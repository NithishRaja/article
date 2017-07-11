import React from 'react';

export default class ArticlePreview extends React.Component{

  render(){
    return(
      <div>
        <label>{this.props.name}</label>
        <br />
        <label>{this.props.body}</label>
        <br />
        <label>{this.props.writtenBy}</label>
        <br />
        <br />
      </div>
    );
  }

}
