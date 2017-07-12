import React from 'react';
import ArticlePreview from './article-preview';
import ArticleInfo from './article-info';

export default class ArticleList extends React.Component{
/*
  constructor to initialize state and create instance of ArticleInfo class
*/
  constructor(){
    super();

    this.articleInfo = new ArticleInfo();

    this.state = {
      articles:[]
    };
  }

/*
  componentWillMount lifecycle method is used to update state.articles
*/
  componentWillMount(){
    this.articleInfo._getArticles((articles, error)=>{
      if(!error){
        this.setState({
          articles
        });
      }else{
        alert(JSON.stringify(articles));
        alert(error);
      }
    });

  }

/*
  writing required JSX in a variable and finally returning it
*/
  render(){

    let _articleListJSX = <div className="mx-auto well">
                            {this.state.articles.map(article=>
                              <ArticlePreview
                                {...article}
                                key={article.id}/>
                              )}
                          </div>
    return(
      <div className="extra1">{_articleListJSX}</div>
    );
  }
}
