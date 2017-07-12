import React from 'react';

export default class ArticlePreview extends React.Component{

  constructor(){
    super();

    //alert(Style.label);
  }

  render(){
    return(
      <div className="panel panel-primary">
        <div className="panel-heading"><h1>{this.props.title}</h1></div>
        <div className="panel-body"><p>{this.props.body}</p></div>
        <div className="panel-footer"><label>{this.props.authorName}</label></div>
      </div>
    );
  }

}
