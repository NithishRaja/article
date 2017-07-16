import React from 'react';
import ArticlePreview from './article-preview';
import ArticleInfo from './article-info';
import PageCover from './../cover/page-cover';

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
    this.articleInfo._getArticles(null, (articles, error)=>{
      if(error){
        alert(JSON.stringify(articles));
        alert(error);
      }else{
        this.setState({
          articles
        });
      }
    });

  }

/*
  writing required JSX in a variable and finally returning it
*/
  render(){

    const _pageNavJSX = <nav className="navbar navbar-inverse navbar-fixed-top">
                          <div className="navbar-brand">Read article</div>
                          <ul className="nav navbar-nav">
                            <li className="active"><a href="">mainpage</a></li>
                          </ul>
                        </nav>;

    let _articleListJSX = <div className="mx-auto well-articleList">
                            {this.state.articles.map(article=>
                              <ArticlePreview
                                {...article}
                                key={article.id}/>
                              )}
                          </div>;

    return(<div>
            {_pageNavJSX}
            <PageCover />
            <div className="container">
              {_articleListJSX}
            </div>
          </div>);
  }
}
