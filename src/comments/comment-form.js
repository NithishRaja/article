import React from 'react';

export default class CommentForm extends React.Component{

  render(){

    const _formJSX = <form className="well-form">
                      <div className="form-group">
                        <label>name</label>
                        <input className="form-control" type="text" placeholder="name" ref={input=>this.name = input}/>
                      </div>
                      <div className="form-group">
                        <label>comment</label>
                        <textarea className="form-control"
                                  placeholder="enter your comment here"
                                  ref={input=>this.comment = input}>
                        </textarea>
                      </div>
                    <input type="submit" className="btn btn-success" value="SUBMIT" onClick={this._formSubmitted.bind(this)}/>
                  </form>;
    return(<div>
            {_formJSX}
          </div>);
  }

  _formSubmitted(event){
    event.preventDefault();

    alert(this.name.value);
    this.name.value = "";
    alert(this.comment.value);
    this.comment.value = "";
  }
}
