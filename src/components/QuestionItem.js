import React from 'react';
import { Row, Col, Button } from 'antd';

import './style.less';

const QuestionItem = ({ props, dispatch }) => {
  return (
    <div className="item">
      <Row gutter={8}>
        <Col span={2}>
          <Row>
            <Col>
              <Button onClick={() => { dispatch({ type: 'app/voteUp' }); }} className="vote-btn up-btn" icon="caret-up" >
                <p>{props.num}</p>
              </Button>

            </Col>
          </Row>
          <Row>
            <Col>
              <Button onClick={() => { dispatch({ type: 'app/voteDown' }); }} className="vote-btn down-btn" icon="caret-down" />
            </Col>
          </Row>
        </Col>
        <Col span={22}>
          <h1>{props.title}</h1>
          <p>{props.content}</p>

        </Col>
      </Row>
    </div>
  );
};

QuestionItem.propTypes = {
};

export default QuestionItem;
