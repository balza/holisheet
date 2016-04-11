import React from 'react';
import ReactDOM from 'react-dom';
import './less/styles.less';

const Holisheet = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});

ReactDOM.render(<Holisheet />, document.getElementById('root'));
