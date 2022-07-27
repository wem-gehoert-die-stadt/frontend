import { Accordion, AccordionItem } from '@reach/accordion';
import { Global } from '@emotion/core';
import React, { useEffect, useState } from 'react';

import Card from './Card';

import useCityContext from '../../hooks/useCityContext';

import { accordionButton, container } from './style';

const CategoryCards = ({ categories }) => {
  const cardRefMap = [];
  const {
    activeOwner: { categoryId },
  } = useCityContext();
  const [hasChanged, setHasChanged] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!categoryId) {
      return;
    }

    let activeCategoryIndex = categories.findIndex(
      ({ databaseId }) => databaseId === categoryId
    );

    if (activeCategoryIndex === -1) {
      activeCategoryIndex = 0;
    }

    setActiveIndex(activeCategoryIndex);
  }, [categoryId]);

  useEffect(() => {
    if ((hasChanged || categoryId) && typeof window !== 'undefined') {
      setTimeout(() => {
        cardRefMap[activeIndex].scrollIntoView();
      }, 10);
    }
  }, [categoryId, activeIndex, hasChanged]);

  return (
    <div css={container}>
      <Global styles={accordionButton} />

      <Accordion
        index={activeIndex}
        onChange={(value) => {
          setHasChanged(true);
          setActiveIndex(value);
        }}
      >
        {categories.map((category, index) => (
          <AccordionItem>
            <Card
              index={index}
              isExpanded={activeIndex === index}
              ref={(el) => cardRefMap.push(el)}
              key={`owner-category-${index}`}
              {...category}
            />
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default CategoryCards;
