import React from 'react';
import Button from './Button';
import styles from './App.scss';

export default () => (
  <div className={styles.myContainer}>
    <Button className="button">Button</Button>
    <Button ui={styles.myButton}>Button</Button>
  </div>
);