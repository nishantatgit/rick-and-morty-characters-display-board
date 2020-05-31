import React, { useState, useEffect } from 'react';
import { Ripple } from 'react-awesome-spinners';
import styles from './Homepage.style';

import withStyles from '../../utils/withStyles';
import fetch from '../../utils/fetch';
import constants from '../../../constants';

import ListRenderer from '../../components/ListRenderer/ListRenderer';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import ScreenMask from '../../components/ScreenMask/ScreenMask';
import FilterList from '../../components/FilterList/Filterlist';
import Chip from '../../components/Chip/Chip';

const HomePage = (props: {
  className: string;
  initialState?: Array<object>;
}) => {
  const { initialState = [], className } = props;

  const [filters, setFilters] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(initialState);

  const updateFilter = (e: { target: any }) => {
    const {
      target: { name, value },
    } = e;

    if (!value || value === 'All') {
      delete filters[name];
    } else {
      filters[name] = value;
    }

    setFilters({ ...filters });
    console.log('filters', filters);
  };

  const getData = () => {
    const fetchOptions: { ['params']?: {} } = {};
    const filterKeys = Object.keys(filters);

    if (filterKeys && filterKeys.length) {
      fetchOptions.params = filters;
    }
    setLoading(true);
    fetch(constants.URLS.characters, fetchOptions).then(
      (data) => {
        console.log('data', data);
        const {
          data: { results },
        } = data;
        setData(results);
        setLoading(false);
      },
      () => {
        setLoading(false);
      }
    );
  };

  const onChipClose = (e: any) => {
    const label = e.target.parentElement.innerText;
    const chipTexts =
      label && label.split(':').map((value: string) => value.trim());
    const currentFilters = { ...filters };
    delete currentFilters[chipTexts[0]];
    setFilters({ ...currentFilters });
  };

  console.log('filters', filters);
  useEffect(getData, [filters]);

  const filterKeys = Object.keys(filters);
  const chips = filterKeys.map((filterKey) => {
    const chipProps: any = {
      label: `${filterKey}: ${filters[filterKey]}`,
      onClose: onChipClose,
    };
    return chipProps;
  });

  console.log('chips ', chips);
  return (
    <div className={className}>
      {chips && chips.length > 0 && (
        <ListRenderer
          Component={Chip}
          list={chips}
          containerClass='chips-container'
          itemClass='filter-chip'
        />
      )}
      <FilterList
        filters={
          constants.filters &&
          constants.filters.map((filter: any) => {
            filter.onChange = updateFilter;
            return filter;
          })
        }
        onChange={updateFilter}
      ></FilterList>
      {isLoading && (
        <>
          <ScreenMask />
          <Ripple />
        </>
      )}{' '}
      <ListRenderer
        Component={CharacterCard}
        list={data}
        containerClass='list-container'
        itemClass='list-item'
      />
    </div>
  );
};

export default withStyles(styles, HomePage);
