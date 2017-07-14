import React from 'react';
import ReactDOM from 'react-dom';
import ArticleList from './article/article-list';
import Article from './article/article';
import {Router, Route, Redirect} from 'react-router';

const _reactJSX = <Router>
                    <Redirect from="/" to="/mainpage" />
                    <Route path="/">
                      <Route path="mainpage" component={ArticleList} />
                      <Route path="article/:articleID" component={Article} />
                     </Route>
                  </Router>

const _app = document.getElementById('my-app');

ReactDOM.render(_reactJSX,_app);

/*
add visit aauthor site
add comments engine
add a nav bar
add cover image
figure out github pages
*/
