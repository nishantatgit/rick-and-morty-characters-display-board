import React, { useState, useEffect } from 'react';

import styles from './Homepage.style';

import withStyles from '../../utils/withStyles';
import fetch from '../../utils/fetch';
import constants from '../../../constants';

import ListRenderer from '../../components/ListRenderer/ListRenderer';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import FilterList from '../../components/FilterList/Filterlist';

const HomePage = (props: {
  className: string;
  initialState?: Array<object>;
}) => {
  const { initialState = [], className } = props;
  console.log('initialState at home page ', initialState);
  const [filters, setfilters] = useState({ gender: 'Male', status: 'Alive' });
  const [data, setData] = useState(initialState);

  const getData = () => {
    fetch(constants.URLS.characters, { params: filters }).then((data) => {
      console.log('data', data);
      const {
        data: { results },
      } = data;
      setData(results);
    });
  };

  useEffect(getData, []);

  return (
    <div className={className}>
      <FilterList filters={constants.filters}></FilterList>
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
