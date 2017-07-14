import React from 'react';
import ArticleInfo from './article-info';
import CommentList from './../comments/comment-list';

export default class Article extends React.Component{

/*
  constructor to create instance of ArticleInfo
*/
  constructor(){
    super();

    this.articleList = new ArticleInfo();

    this.state = {
      article:{}
    }
  }

/*
  componentWillMount() lifecycle method is used to get article values
  via ajax request
*/
  componentWillMount(){
    this.articleList._getArticles(this.props.params.articleID,(article, error)=>{
      if(error){
        alert(JSON.stringify(article));
        alert(error);
      }else{
        this.setState({
          article
        });
      }
    });
  }

/*
  renders the article page
*/
  render(){

    if(this.state.article.body){
      var _headingJSX = <header>
                      <h1 className="page-header col-md-12">{this.state.article.title}</h1>
                      <div className="col-md-12">written by - <strong>{this.state.article.author.name}</strong></div>
                      <div className="col-md-12">written on - {this.state.article.writtenOn}</div>

                    </header>;

      var _articleJSX = this.state.article.body.map(b=><div>
                                                        <h2 key={`heading ${b.paraNumber}`}>{b.heading}</h2>
                                                        <p className="text-justify" key={`para ${b.paraNumber}`}>{b.content}</p>
                                                      </div>);
      var _authorJSX = <div className="col-md-4">
                          <div className="thumbnail">
                            <h3 className="text-center">About the author</h3>
                            <img className="img-circle" src={this.state.article.author.image} alt={this.state.article.author.name} />
                            <div className="caption">
                              {this.state.article.author.bio}
                            </div>
                          </div>
                        </div>;
      var _commentsJSX = <CommentList id={this.state.article.id} />;
    }

    return <div>
              {_headingJSX}
              <div className="col-md-8">
              {_articleJSX}
              {_commentsJSX}
              </div>
              {_authorJSX}
          </div>
  }
}
