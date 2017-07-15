import React from 'react';

export default class CommentForm extends React.Component{

  constructor(){
    super();

    this.state = {
      formFilled:"empty"
    }
  }

  render(){

    let _formAlertJSX;

    if(this.state.formFilled == "notFilled"){
      _formAlertJSX = <h3><div className="label label-danger" role="alert">fill all fields and then submit</div></h3>;
    }else if(this.state.formFilled == "filled"){
      _formAlertJSX = <h3><div className="label label-success" role="alert">comment successfully added</div></h3>;
    }

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
                      {_formAlertJSX}
                    <input type="submit" className="btn btn-success" value="SUBMIT" onClick={this._formSubmitted.bind(this)}/>
                  </form>;
    return(<div>
            {_formJSX}
          </div>);
  }

  _formSubmitted(event){
    event.preventDefault();

    if(this.name.value!=""&&this.comment.value!=""){
      this.props.callBack(this.name.value, this.comment.value);
      this.setState({
        formFilled:"filled"
      });
    }else{
      this.setState({
        formFilled:"notFilled"
      });
    }

    setTimeout(()=>{
      this.setState({
        formFilled:"empty"
      });
    },3000);

    this.name.value = "";
    this.comment.value = "";
  }
}
