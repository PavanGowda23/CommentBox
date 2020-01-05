import * as actionTypes from './ActionTypes';

export function saveCommentAction(comment){
    return {
        type: actionTypes.SAVE_COMMENT_REQUEST,
        data: {
            comment,
        },
      };
    }