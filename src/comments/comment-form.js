import React from 'react';

export default class CommentForm extends React.Component{

  render(){
    return(<form>
            <input type="text" placeholder="name" />
            <textarea placeholder="name"></textarea>
            <input type="submit" value="SUBMIT" />
          </form>);
  }
}
