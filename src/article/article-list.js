import React from 'react';
import ArticlePreview from './article-preview';

export default class ArticleList extends React.Component{

  constructor(){
    super();

    this.state = {
      articles:[
        {
          id:1,
          name:'no rings for the raptors',
          body:'no rings for the raptors as long as they are based in canada',
          writtenBy:'nithishraja@ymail.com'
        },
        {
          id:2,
          name:'lakers are the best',
          body:'cause KOBE',
          writtenBy:'nithishraja@ymail.com'
        },
        {
          id:3,
          name:'dear basketball',
          body:'81',
          writtenBy:'kobe bryant'
        }
      ]
    }

  }

  render(){

    let _articleListJSX = <div>
                            {this.state.articles.map(article=>
                              <ArticlePreview
                                name={article.name}
                                body={article.body}
                                writtenBy={article.writtenBy}
                                key={article.id}/>
                              )}
                          </div>

    return(
      <div>{_articleListJSX}</div>
    );
  }

}
