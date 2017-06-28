import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage({ items }) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
      {items.map(obj => (
        <div key={obj.id}>
          <p>{obj.title}</p>
          <p>{obj.content}</p>
        </div>
      ))}
    </div>
  );
}

IndexPage.propTypes = {
};

function mapStateToProps({ app }) {
  const { items } = app;
  return {
    items,
  };
}

export default connect(mapStateToProps)(IndexPage);
