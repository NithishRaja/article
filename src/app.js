import React from 'react';
import ReactDOM from 'react-dom';
import ArticleList from './article/article-list';
import Article from './article/article';
import PageCover from './cover/page-cover';
import {hashHistory, Router, Route, Redirect} from 'react-router';

const _reactArticleJSX = <Router history={hashHistory}>
                    <Redirect from="/" to="/mainpage" />
                    <Route path="/">
                      <Route path="mainpage" component={ArticleList} />
                      <Route path="article/:articleID" component={Article} />
                     </Route>
                  </Router>;

const _testRouterJSX = <Router>
                        <Route path="/">
                          <Route path="mainpage" component={PageCover} />
                          <Route path="article/:articleID" />
                        </Route>
                      </Router>;

const _app = document.getElementById('my-app');

const _test = document.getElementById('test');

ReactDOM.render(_reactArticleJSX,_app);

ReactDOM.render(_testRouterJSX,_test);
/*
figure out github pages
*/
