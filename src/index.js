import React from 'react';
import ReactDOM from 'react-dom';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
        </div>
        Bist du sher?
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author = "sam"
          timeAgo = "today"
          content = "nice blag past"
          avatar = {faker.image.avatar()}
        />
      </ApprovalCard>
}
