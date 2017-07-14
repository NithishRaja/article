import React from 'react';
import ArticleInfo from './article-info';
import CommentList from './../comments/comment-list';

export default class Article extends React.Component{

/*
  constructor to create instance of ArticleInfo
  Note:
    this.state.article is provided with dummy values because
    render() is called before callBack of _getArticles() in
    componentWillMount() is completed. hence, without the dummy
    values the this.state.articles.map function in render()
    will error out
*/
  constructor(){
    super();

    this.articleList = new ArticleInfo();

    this.state = {
      article:{
        id:-2,
        title:"test",
        body:[
          {
            heading:"test heading",
            content:"this is a tesst"
          }
      ],
        author:{
          name:"tester",
          bio:"i am a tester",
          image:"",
          site:""
        }
      }
    }
  }

/*
  componentWillMount() lifecycle method is used to get article values
  via ajax request
*/
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

/*
  renders the article page
*/
  render(){
    let _articleJSX = this.state.article.body.map(b=><div>
                                                      <h2 key={`heading ${b.paraNumber}`}>{b.heading}</h2>
                                                      <p className="text-justify" key={`para ${b.paraNumber}`}>{b.content}</p>
                                                    </div>);
    const _authorJSX = <div className="col-md-4">
                        <div className="thumbnail">
                          <h3 className="text-center">About the author</h3>
                          <img className="img-circle" src={this.state.article.author.image} alt={this.state.article.author.name} />
                          <div className="caption">
                            {this.state.article.author.bio}
                          </div>
                        </div>
                      </div>;

    return <div>
            <h1 className="page-header col-md-12">{this.state.article.title}</h1>
            <div className="col-md-12">written by - <strong>{this.state.article.author.name}</strong></div>
            <div className="col-md-12">written on - {this.state.article.writtenOn}</div>
            <div className="col-md-8">
              {_articleJSX}
            </div>
            {_authorJSX}
            <div className="col-md-8">
              <CommentList />
            </div>
          </div>
  }
}
