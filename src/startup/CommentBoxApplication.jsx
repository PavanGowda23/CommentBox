import React from 'react';
import { Provider } from 'react-redux';
import CommentBoxContainer from '../components/CommentBoxContainer';

class CommentBoxApplication extends React.Component {
  render() {
    return (
      // <Provider>
        <CommentBoxContainer />
      // </Provider>
    );

  }
}

export default CommentBoxApplication;
