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
        authorName:"tester"
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
    let _articleJSX = this.state.article.body.map(b=><div key={b.paraNumber}>
                                                  <h2 key={`heading ${b.paraNumber}`}>{b.heading}</h2>
                                                  <p key={`para ${b.paraNumber}`}>{b.content}</p>
                                                </div>);

    return <div>
            <h1>{this.state.article.title}</h1>
            {_articleJSX}
          </div>
  }
}
