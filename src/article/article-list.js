import React from 'react';
import ArticlePreview from './article-preview';
import jQuery from 'jquery';

export default class ArticleList extends React.Component{

  constructor(){
    super();

    this.state = {
      articles:[]
    };
  }

  componentWillMount(){
    this._getArticles();
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

  _getArticles(){
    let articles;

      jQuery.ajax({
        method:'GET',
        url:'./assets/data/article-info.json',
        success:(data)=>{
          articles = data;
          this.setState({
            articles
          });
        },
        error:(data, error)=>{
          alert(error);
          alert(data);
        }
      });
  }
}
