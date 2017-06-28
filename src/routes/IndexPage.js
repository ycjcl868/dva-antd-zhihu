import React from 'react';
// import { connect } from 'dva';
import { Row } from 'antd';
import QuestionList from '../components/QuestionList';

import Style from './style.less';

function IndexPage() {
  return (
    <div>
      <Row className={Style.header} justify="center">
        <h1>知乎问答</h1>
      </Row>
      <Row className={Style.question_wrapper}>
        <Row className={Style.items}>
          <QuestionList />
        </Row>
      </Row>
    </div>
  );
}

IndexPage.propTypes = {
};

export default IndexPage;
