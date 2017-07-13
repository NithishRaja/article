import React from 'react';
import ArticleInfo from './article-info';

export default class Article extends React.Component{

  constructor(){
    super();

    this.articleList = new ArticleInfo();

    this.state = {
      article:{}
    }
  }

  componentWillMount(){
    this.articleList._getArticles(this.props.params.articleID,(singleArticle, error)=>{
      if(error){
        alert(JSON.stringify(singleArticle));
        alert(error);
      }else{
        const article = singleArticle[0];
        this.setState({
          article
        });
      }
    });
  }

  render(){
    return <div>{this.state.article.title}</div>
  }

}
