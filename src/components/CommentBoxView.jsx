import React from 'react';
import '../App.css'
class CommentBoxView extends React.Component {

    handleSubmit() {
        let comment = document.getElementById('cmnt').value;
        let commentsArray = [].push(comment);
        alert(commentsArray);
        this.props.saveComment(comment)
    }

    // getContent(){
    //     const { commentsList } = this.props;

    //     for(var i =0; i<commentsList.length();i++){
    //         return <div>
    //             <p>commentsList.get(i)</p>
    //         </div>
    //     }
    // }

render() {

    return (
        <div >
            <h1>Hello view</h1>
            <div>
                <textarea className='txtArea' id='cmnt'/>
            </div>
            <div>
            <input type='submit' className='submit' onClick={() => this.handleSubmit()}/>
            </div>
        </div>
    );
}
}

export default CommentBoxView;