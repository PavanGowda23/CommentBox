import React from 'react';
import CommentBoxView from './CommentBoxView';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CommentBoxActions from '../actions/CommentBoxActions';
import commentBoxReducer from '../reducers/CommentBoxReducer';
import CommentsView from './CommentsView';

class CommentBoxContainer extends React.Component {

saveComment(comment){
    this.props.commentBoxTypeActions.saveCommentAction(comment);
}

    render() {
        const { commentsList } = this.props;
        return (
            <>
            <CommentBoxView
                saveComment={this.saveComment.bind(this)}
                
            />
            <CommentsView
            commentsList={commentsList}
            />
            </>
        );
    }
}

const mapStateToProps = state => ({
    commentsList: state.commentBoxReducerState.commentsList,
});

function mapDispatchToProps(dispatch) {
    return {
        commentBoxTypeActions: bindActionCreators(CommentBoxActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentBoxContainer);

const commentBoxReducers = Object.assign({}, { commentBoxReducerState: commentBoxReducer });

export { commentBoxReducers };