import React from 'react';

export default class PageCover extends React.Component{

  render(){
    return(<div className="page-cover">
            <div className="text-center cover-header">
              <h1 className="cover-heading">Read articles online for free</h1>
              <a href="#mainpage" className="btn cover-btn">Start reading</a>
            </div>
          </div>);
  }
}
