import React from 'react';
import CommentInfo from './comment-info';
import Comment from './comment';
import CommentForm from './comment-form';

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
    });
  }

  render(){

    let _commentNumber = this.state.comments.length>1?' comments':(this.state.comments.length==1?' comment':'no comments');

    let _commentListJSX = <div className="label label-warning">
                            <span className="badge">{this.state.comments.length!=0?this.state.comments.length:''}</span>
                            {_commentNumber}</div>;

    if(this.state.comments.length!=0){
      var _commentsJSX = this.state.comments.map(comment=><Comment {...comment} />);
    }

    return(
      <div className="well-comments">
        <h3>{_commentListJSX}</h3>
        {_commentsJSX}
        <CommentForm />
      </div>);
  }

  componentDidMount(){

    const timer = setInterval(()=>{
      this.commentInfo._getComments(this.props.id,(comments, error)=>{
        if(error){
          alert(comments);
          alert(error);
        }else{
          this.setState({
            comments
          });
        }
      });
    }, 5000);
  }

  componentWillUnmount(){

    clearInterval(timer);
  }
}
