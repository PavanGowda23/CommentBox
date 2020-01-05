import React from 'react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import CommentBoxContainer, { commentBoxReducers } from '../components/CommentBoxContainer';
import CommentBoxSaga from '../sagas/CommentBoxSaga';
import '../App.css';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({...commentBoxReducers}),
  compose(applyMiddleware(sagaMiddleware)),
);

// CommentBoxSaga.map(saga => (sagaMiddleware.run(saga)));

class CommentBoxApplication extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <CommentBoxContainer className='App'/>
      </Provider>
    );

  }
}

export default CommentBoxApplication;
