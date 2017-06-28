import React from 'react';
import { connect } from 'dva';
import QuestionItem from './QuestionItem';


function QuestionList({ items }) {
  return (
    <div>
      {items.map(obj => (
        <QuestionItem
          key={obj.id}
          {...obj}
        />
      ))}
    </div>
  );
}

function mapStateToProps({ app }) {
  const { items } = app;
  return {
    items,
  };
}

export default connect(mapStateToProps)(QuestionList);
