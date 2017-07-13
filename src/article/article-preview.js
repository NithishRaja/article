import React from 'react';
import {Link} from 'react-router';

export default class ArticlePreview extends React.Component{

  render(){

    return(
      <Link to={"/article/"+this.props.id}>
      <div className="panel panel-info">
        <div className="panel-heading text-center"><h1>{this.props.title}</h1></div>
        <div className="panel-body"><p>{this.props.body[0].content}</p></div>
        <div className="panel-footer">written by - <label>{this.props.author.name}</label></div>
      </div>
      </Link>

    );
  }

}
