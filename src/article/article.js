import React from 'react';
import ArticleInfo from './article-info';

export default class Article extends React.Component{

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
    let _articleJSX = this.state.article.body.map(b=><div>
                                                      <h2 key={`heading ${b.paraNumber}`}>{b.heading}</h2>
                                                      <p className="text-justify" key={`para ${b.paraNumber}`}>{b.content}</p>
                                                    </div>);
    const _authorJSX = <div className="col-md-offset-1 col-md-3">
                        <h3>About the author</h3>
                        <div className="thumbnail">
                          <img src={this.state.article.author.image} alt={this.state.article.author.name} />
                          <div className="caption">
                            {this.state.article.author.bio}
                          </div>
                        </div>
                      </div>;

    return <div>
            <h1 className="page-header">{this.state.article.title}</h1>
            <div className="col-md-4">written by - <strong>{this.state.article.author.name}</strong></div>
            <div className="col-md-4">written on - {this.state.article.writtenOn}</div>
            <div className="col-md-8">
              {_articleJSX}
            </div>
            {_authorJSX}
          </div>
  }
}
