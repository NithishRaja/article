import React from 'react';
import CommentInfo from './comment-info';
import Comment from './comment';

export default class CommentList extends React.Component{

  constructor(){
    super();

    this.commentInfo = new CommentInfo();

    this.state = {
      comments:[]
    }
  }

  componentWillMount(){
    this.commentInfo._getComments(this.props.id,(comments, error)=>{
      if(error){
        alert(comments);
        alert(error);
      }else{
        this.setState({
          comments
        });
      }
    })
  }

  render(){

    let _commentListJSX = <div>{this.state.comments.length} comments</div>;

    if(this.state.comments.length!=0){
      var _commentsJSX = this.state.comments.map(comment=><Comment {...comment} />);
    }else{
      alert('no comments');
    }
    return(
      <div>
        {_commentListJSX}
        {_commentsJSX}
      </div>);
  }
}
