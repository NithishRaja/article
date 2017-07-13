import React from 'react';
import ReactDOM from 'react-dom';
import ArticleList from './article/article-list';
import Article from './article/article';
import {Router, Route, Redirect} from 'react-router';

const _reactJSX = <Router>
                    <Redirect from="/" to="/mainpage" />
                    <Route path="/">
                      <Route path="mainpage" component={ArticleList} />
                      <Route path=":author/:articleID" component={Article} />
                     </Route>
                  </Router>

const _app = document.getElementById('my-app');

ReactDOM.render(_reactJSX,_app);

/*
implement routers
add onClick listener to article-preview to view article in full detail
*/
