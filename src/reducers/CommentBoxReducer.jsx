import * as actionTypes from '../actions/ActionTypes';

import {buildComments} from './CommentSelector';

const commentBoxReducer = (state = {
    commentsList: []
    
}, action) => {
    const newState = Object.assign({}, state);


    switch (action.type) {
        case actionTypes.SAVE_COMMENT_REQUEST:
            newState.commentsList = buildComments(newState.commentsList, action.data.comment);
            return newState;

        default:
            return state;
    }
};

export default commentBoxReducer;