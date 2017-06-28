import React from 'react';
import { connect } from 'dva';
import { Row, Col, Button } from 'antd';

import Style from '../routes/style.less';

const QuestionItem = ({ id, title, content, num, dispatch }) => {
  return (
    <div className={Style.item}>
      <Row gutter={8}>
        <Col span={2}>
          <Row>
            <Col>
              <Button onClick={() => { dispatch({ type: 'app/voteUp', payload: { id, num: num + 1 } }); }} className={Style.up_btn} icon="caret-up" >
                <p>{num}</p>
              </Button>

            </Col>
          </Row>
          <Row>
            <Col>
              <Button onClick={() => { dispatch({ type: 'app/voteDown', payload: { id, num: num - 1 } }); }} className={Style.down_btn} icon="caret-down" />
            </Col>
          </Row>
        </Col>
        <Col span={22}>
          <h1>{title}</h1>
          <p>{content}</p>

        </Col>
      </Row>
    </div>
  );
};

QuestionItem.propTypes = {
};

export default connect()(QuestionItem);
