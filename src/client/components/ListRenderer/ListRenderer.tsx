import React, { ReactComponentElement } from 'react';
import styles from './ListRenderer.style';
import withStyles from '../../utils/withStyles';

interface props {
  list: Array<any>;
  Component: any;
  className: string;
  containerClass: string;
  itemClass: string;
}

const ListRenderer = (props: props) => {
  const { list, Component, className, containerClass, itemClass } = props || {};
  console.log('props ...', props);
  return (
    <section className={`${className} ${containerClass} list-render`}>
      {list &&
        list.map((item: any) => (
          <Component {...item} cssClass={itemClass}></Component>
        ))}
    </section>
  );
};

export default withStyles(styles, ListRenderer);
