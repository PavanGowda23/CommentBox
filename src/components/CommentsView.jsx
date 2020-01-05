import React from 'react';
import '../App.css'
class CommentsView extends React.Component {
constructor(props){
    super(props)
    this.getContent = this.getContent.bind(this);
}

    getContent(){
        const { commentsList } = this.props;

        if(commentsList){

        for(var i =0; i<commentsList.length;i++){
                return <p>{commentsList[i]}</p>
        }
    }
    return "NO COMMENTS YET"
    }

render() {

    return (
        <div >
            <div>
                {this.getContent()}

            </div>
        </div>
    );
}
}

export default CommentsView;