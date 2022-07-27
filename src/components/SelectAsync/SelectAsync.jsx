/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';

import AsyncSelect from 'react-select/async';
import { useIntl } from 'gatsby-plugin-intl';
import { select } from './style';

const MultiValueRemove = () => null;

const DropdownIndicator = () => null;

const IndicatorSeparator = () => null;

const fetchData = (url, value) =>
  fetch(`${url}&query=${encodeURIComponent(value)}`)
    .then((res) => res.json())
    .then((data) =>
      data.map(({ ownerID, name, type, category }) => ({
        value: name,
        label: name,
        isStreet: type === 'street',
        ownerId: ownerID,
        categoryId: category,
      }))
    );

const SelectAsync = ({ url, onResult = () => {}, ...props }) => {
  const intl = useIntl();
  const [value, setValue] = useState([]);

  const onChange = (newValue) => {
    setValue(newValue);
    onResult(newValue.categoryId, newValue.ownerId);
  };

  const loadOptions = (data) => fetchData(url, data);

  return (
    <AsyncSelect
      cacheOptions
      styles={select}
      loadOptions={loadOptions}
      noOptionsMessage={() => null}
      onChange={onChange}
      value={value}
      loadingMessage={() => intl.formatMessage({ id: 'search.loadingMessage' })}
      placeholder={intl.formatMessage({ id: 'search.placeholder' })}
      components={{
        IndicatorSeparator,
        MultiValueRemove,
        DropdownIndicator,
      }}
      {...props}
    />
  );
};

export default SelectAsync;
