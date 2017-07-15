import React from 'react';
import CommentInfo from './comment-info';
import Comment from './comment';
import CommentForm from './comment-form';

export default class CommentList extends React.Component{

  constructor(){
    super();

    this.commentInfo = new CommentInfo();

    this.state = {
      comments:[],
      showComments:false
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
    let _commentContainerJSX;

    let _commentButtonText = this.state.showComments?'Hide Comments':'Show Comments';

    let _commentNumber = this.state.comments.length>1?' comments':(this.state.comments.length==1?' comment':'no comments');

    let _commentListJSX =  <div>
                            <div className="label label-warning">
                            <span className="badge">{this.state.comments.length!=0?this.state.comments.length:''}</span>
                            {_commentNumber}
                            </div>
                          </div>;

    if(this.state.comments.length!=0){
      var _commentsJSX = this.state.comments.map(comment=><Comment {...comment} />);
    }

    if(this.state.showComments){
      _commentContainerJSX = <div className="well-comments">
                      <h3>{_commentListJSX}</h3>
                      <button className="btn btn-warning" onClick={this._toggleComments.bind(this)}>{_commentButtonText}</button>
                      {_commentsJSX}
                      <CommentForm callBack={this._formSubmitted.bind(this)} />
                    </div>;
    }else{
      _commentContainerJSX = <div className="well-comments">
                      <h3>{_commentListJSX}</h3>
                      <button className="btn btn-warning" onClick={this._toggleComments.bind(this)}>{_commentButtonText}</button>
                    </div>;
    }

    return(<div>{_commentContainerJSX}</div>);
  }

  _formSubmitted(name, body){
    const date = new Date().toString();
    const comments = this.state.comments.concat({
      name,
      body,
      date,
      isAbusive:false
    });
    this.setState({
      comments
    });
    // alert(JSON.stringify(this.state.comments));
  }

  _toggleComments(){
    this.setState({
      showComments:!this.state.showComments
    });
  }
}
