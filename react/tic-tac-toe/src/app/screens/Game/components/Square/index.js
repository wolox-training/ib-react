import React from 'react';

import styles from './styles.module.scss';

function Square(props) {
  const { value, onClick } = props;
  return (
    <button className={styles.square} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
