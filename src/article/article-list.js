import React from 'react';
import ArticlePreview from './article-preview';
import ArticleInfo from './article-info';

export default class ArticleList extends React.Component{

  constructor(){
    super();

    this.articleInfo = new ArticleInfo();

    this.state = {
      articles:[]
    };
  }

  componentWillMount(){
    this.articleInfo._getArticles((articles, error)=>{
      if(!error){
        this.setState({
          articles
        });
      }else{
        alert(articles);
        alert(error);
      }
    });

  }

  render(){

    let _articleListJSX = <div>
                            {this.state.articles.map(article=>
                              <ArticlePreview
                                {...article}
                                //name={article.name}
                                //body={article.body}
                                //writtenBy={article.writtenBy}
                                key={article.id}/>
                              )}
                          </div>

    return(
      <div>{_articleListJSX}</div>
    );
  }
}
