import React from 'react';
import Filter from '../Filter/Filter';
import withStyles from '../../utils/withStyles';

import styles from './Filterlist.style';
const FilterList = (props: { filters: any; className?: string }) => {
  const { filters, className } = props;

  return (
    <form id='filters' className={className}>
      {filters &&
        filters.map(
          (filter: {
            values: { label: string; value: string }[];
            filterLabel: string;
            filterName: string;
            onChange?: any;
          }) => <Filter type='radio' {...filter}></Filter>
        )}
    </form>
  );
};

export default withStyles(styles, FilterList);
