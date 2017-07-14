import React from 'react';

export default class Comment extends React.Component{

  constructor(){
    super();

    this.state = {
      comment:{}
    }
  }

  componentWillMount(){
    const comment = {
      name:this.props.name,
      body:this.props.body,
      date:this.props.date,
      isAbusive:this.props.isAbusive
    }
    this.setState({
      comment
    });
  }

  render(){

    let _isAbusiveJSX;
    let _commentBodyJSX;

    if(this.state.comment.isAbusive){
      _commentBodyJSX = <div>content is marked as abusive</div>;
    }else{
      _commentBodyJSX = <div>{this.state.comment.body}</div>;
    }
    let _commentJSX = <div>
                        <div>{this.state.comment.name}</div>
                        {_commentBodyJSX}
                        <div>{this.state.comment.date}</div>
                      </div>;
    if(this.state.comment.isAbusive){
      _isAbusiveJSX = <a href="" onClick={this._isAbusiveClicked.bind(this)}>not abusive</a>;
    }else{
      _isAbusiveJSX = <a href="" onClick={this._isAbusiveClicked.bind(this)}>mark as abusive</a>;
    }

    return(<div>
            {_commentJSX}
            {_isAbusiveJSX}
          </div>);
  }

  _isAbusiveClicked(event){
    event.preventDefault();

    const comment = {
      name:this.state.comment.name,
      body:this.state.comment.body,
      date:this.state.comment.date,
      isAbusive:!this.state.comment.isAbusive
    }

    this.setState({
      comment
    });
  }
}
