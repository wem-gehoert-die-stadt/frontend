import React, { forwardRef, useEffect, useState } from 'react';
import {
  container,
  containerFloating,
  icon,
  iconSmall,
  input,
  inputContainer,
  inputContainerSmall,
  inputSmall,
  inputTextContainer,
  labelHidden,
  label as labelStyle,
  noResultsContainer,
  noResultsImage,
  submitButton,
} from './style';

import Button from '../Button';
import House from '../House';
import Paragraph from '../Paragraph';
import SearchIcon from '../../../static/icons/search.svg';
import SearchModal from '../SearchModal';
import SelectAsync from '../SelectAsync';
import Stack from '../Stack';
import constraint from '../../styles/constraint';
import { css } from '@emotion/core';
import fluid from '../../styles/fluid';
import useCityContext from '../../hooks/useCityContext';
import { useIntl } from 'gatsby-plugin-intl';
import { useSiteURL } from '../../hooks/useSiteURL';

const Search = forwardRef(
  (
    {
      autosuggest = false,
      value,
      floating = false,
      floatingIsVisible = false,
      city = 'berlin',
      ...inputProps
    },
    ref
  ) => {
    const intl = useIntl();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState(value || '');
    const [showNoResults, setShowNoResults] = useState(false);
    const [categoryIdIsSeven, setCategoryIdIsSeven] = useState(false);
    const { setActiveOwner } = useCityContext();
     const siteURL = typeof window !== 'undefined' ? window.location.origin : '';


    const closeModal = () => {
      setModalIsOpen(false);
      setInputValue('');
    };

    const jumpToOwner = (categoryId, ownerId) => {
      setShowNoResults(false);
      closeModal();
      setActiveOwner({
        categoryId,
        ownerId,
      });
    };

    const resetOwner = () => {
      setShowNoResults(true);
      setActiveOwner({});
      setCategoryIdIsSeven(false);
    };

    useEffect(() => {
      if (!autosuggest) {
        if (!modalIsOpen && inputValue.length >= 1) {
          setModalIsOpen(true);
        } else {
          setModalIsOpen(false);
        }
      }
    }, [inputValue]);

    return (
      <>
        <div
          css={[container, floating && containerFloating(floatingIsVisible)]}
          ref={ref}
        >
          <label htmlFor="search" css={[labelStyle, floating && labelHidden]}>
            {intl.formatMessage({ id: 'search.label' })}
          </label>

          <div css={[inputContainer, floating && inputContainerSmall]}>
            <div css={inputTextContainer}>
              <input
                type="text"
                css={[input, floating && inputSmall]}
                onChange={({ target: { value: inputChangeValue } }) => {
                  setInputValue(inputChangeValue);
                }}
                value={inputValue}
                {...inputProps}
              />
            </div>

            <SearchIcon css={[icon, floating && iconSmall]} />
          </div>
        </div>

        <SearchModal
          isOpen={modalIsOpen}
          onClose={() => closeModal()}
          onRequestClose={() => closeModal()}
        >
          <form
            method="get"
            css={[container, !autosuggest && constraint]}
            onSubmit={async (event) => {
              event.preventDefault();
            }}
          >
            <label htmlFor="search" css={[labelStyle, floating && labelHidden]}>
              {intl.formatMessage({ id: 'search.label' })}
            </label>

            <div css={inputContainer}>
              <SelectAsync
                name="ownerOrStreetName"
                url={`${siteURL}/.netlify/functions/search?city=${city}`}
                autoFocus
                defaultInputValue={inputValue}
                onResult={(categoryId, ownerId) => {
                  if (categoryId && ownerId) {
                    if (categoryId !== 7) {
                      jumpToOwner(categoryId, ownerId);
                    } else {
                      setCategoryIdIsSeven(true);
                    }
                  } else {
                    resetOwner();
                  }
                }}
              />

              <button type="submit" aria-label="Suchen ..." css={submitButton}>
                <SearchIcon css={[icon, floating && iconSmall]} />
              </button>
            </div>

            {(categoryIdIsSeven || showNoResults) && (
              <Stack centered gap={2} css={noResultsContainer}>
                <House
                  type="shrug"
                  width={64}
                  height={47}
                  css={noResultsImage}
                />

                {categoryIdIsSeven && (
                  <Paragraph
                    html={intl.formatMessage(
                      { id: 'search.categorySeven' },
                      {
                        contactUrl: intl.formatMessage({
                          id: 'study.contactUrl',
                        }),
                      }
                    )}
                  />
                )}

                {showNoResults && (
                  <>
                    <Paragraph center>
                      {intl.formatMessage(
                        { id: 'search.noResultsLong' },
                        {
                          contactUrl: intl.formatMessage({
                            id: 'study.contactUrl',
                          }),
                        }
                      )}
                    </Paragraph>

                    <Button
                      href={intl.formatMessage({
                        id: 'study.study.contactUrl',
                      })}
                    >
                      {intl.formatMessage({ id: 'search.helpComplete' })}
                    </Button>
                  </>
                )}
              </Stack>
            )}

            <Paragraph
              size="small"
              css={css`
                margin-top: ${fluid(1, 2)};
              `}
            >
              {intl.formatMessage({
                id: 'search.disclaimer',
              })}
            </Paragraph>

            <Paragraph
              size="small"
              css={css`
                margin-top: ${fluid(0.5, 1)};
              `}
              html={intl.formatMessage(
                { id: 'search.disclaimer.contact' },
                {
                  contactUrl: intl.formatMessage({ id: 'study.contactUrl' }),
                }
              )}
            />
          </form>
        </SearchModal>
      </>
    );
  }
);

export default Search;
