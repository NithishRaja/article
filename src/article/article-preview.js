import React from 'react';

export default class ArticlePreview extends React.Component{

  render(){

    return(
      <div className="panel panel-primary">
        <div className="panel-heading"><h1>{this.props.title}</h1></div>
        <div className="panel-body"><p>{this.props.body[0]}</p></div>
        <div className="panel-footer">written by - <label>{this.props.authorName}</label></div>
      </div>

    );
  }

}
