import _ from 'lodash';
import produce from 'immer';

export const buildComments = produce((commentsList, comment) => {
    let commentsArray = [];

    commentsArray = [...commentsList];

    commentsArray.push(comment);

    return commentsArray;
});