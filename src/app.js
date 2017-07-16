import React from 'react';
import ReactDOM from 'react-dom';
import ArticleList from './article/article-list';
import Article from './article/article';
import {hashHistory, Router, Route, Redirect} from 'react-router';

const _reactArticleJSX = <Router history={hashHistory}>
                    <Redirect from="/" to="/mainpage" />
                    <Route path="/">
                      <Route path="mainpage" component={ArticleList} />
                      <Route path="article/:articleID" component={Article} />
                     </Route>
                  </Router>;

const _app = document.getElementById('my-app');

ReactDOM.render(_reactArticleJSX,_app);

/*
add more articles and add functionality to pagination/pager
figure out github pages
add props required
*/
