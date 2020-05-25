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
          (
            filter: JSX.IntrinsicAttributes & {
              values: any[];
              onChange?: any;
              filterLabel: string;
              filterName: string;
            }
          ) => <Filter {...filter}></Filter>
        )}
    </form>
  );
};

export default withStyles(styles, FilterList);
