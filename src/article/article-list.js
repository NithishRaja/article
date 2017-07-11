import React from 'react';

export default class ArticleList extends React.Component{

  constructor(){
    super();

    this.state = {
      articles:[
        {
          name:'no rings for the raptors',
          body:'no rings for the raptors as long as they are based in canada',
          writtenBy:'nithishraja@ymail.com'
        },
        {
          name:'lakers are the best',
          body:'cause KOBE',
          writtenBy:'nithishraja@ymail.com'
        },
        {
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
                              <div>
                                <label>{article.name}</label>
                                <br />
                                <label>{article.body}</label>
                                <br />
                                <label>{article.writtenBy}</label>
                                <br />
                                <br />
                              </div>)}
                          </div>

    return(
      <div>{_articleListJSX}</div>
    );
  }

}
