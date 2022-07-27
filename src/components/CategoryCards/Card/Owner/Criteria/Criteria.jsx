import { graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import React, { useState } from 'react';

import Heading from '../../../../Heading';
import InfoIcon from '../../../../../../static/icons/info.svg';
import Paragraph from '../../../../Paragraph';
import RatingIcon from './RatingIcon';
import Stack from '../../../../Stack';

import {
  container,
  rating as ratingStyle,
  summaryContainer,
  infoButton,
  infoIcon,
} from './style';

export const fragment = graphql`
  fragment Critera on CriteriasJson {
    name
    description
  }
`;

const Criteria = ({
  rating,
  criteria: { name: criteriaName, description: criteriaDescription },
  description,
}) => {
  const intl = useIntl();
  const [helpIsOpen, setHelpIsOpen] = useState(false);

  return (
    <dl css={container}>
      <dt css={ratingStyle}>
        <RatingIcon rating={rating} />
      </dt>

      <dd css={summaryContainer}>
        <Stack gap={0.25}>
          <Heading level={4}>
            {criteriaName}

            {criteriaDescription && (
              <button
                type="button"
                aria-label={intl.formatMessage({ id: 'rating.label' })}
                onClick={() => setHelpIsOpen(!helpIsOpen)}
                css={infoButton}
              >
                <InfoIcon css={infoIcon} />
              </button>
            )}
          </Heading>

          {criteriaDescription && helpIsOpen && (
            <Paragraph size="tiny">{criteriaDescription}</Paragraph>
          )}

          {description && (
            <Stack gap={0.5}>
              {description.split('\\n').map((descriptionItem) => (
                <Paragraph size="small" key={`criteria-${descriptionItem}`}>
                  {descriptionItem}
                </Paragraph>
              ))}
            </Stack>
          )}
        </Stack>
      </dd>
    </dl>
  );
};

export default Criteria;
