import React from 'react';
import PropTypes from 'prop-types';

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
      _isAbusiveJSX = <a href="" className="btn btn-warning" onClick={this._isAbusiveClicked.bind(this)}>not abusive</a>;
    }else{
      _isAbusiveJSX = <a href="" className="btn btn-warning" onClick={this._isAbusiveClicked.bind(this)}>mark as abusive</a>;
    }

    if(this.state.comment.isAbusive){
      _commentBodyJSX = <div className="panel-body">content is marked as abusive</div>;
    }else{
      _commentBodyJSX = <div className="panel-body"><p>{this.state.comment.body}</p></div>;
    }
    let _commentJSX = <div className="panel panel-warning">
                        <div className="panel-heading"><h5>{this.state.comment.name}</h5> {this.state.comment.date}</div>
                        {_commentBodyJSX}
                        <div className="panel-footer">{_isAbusiveJSX}</div>
                      </div>;

    return(<div>
            {_commentJSX}

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

Comment.PropTypes = {
  name: PropTypes.string,
  body: PropTypes.string,
  date: PropTypes.string,
  isAbusive: PropTypes.bool
}
