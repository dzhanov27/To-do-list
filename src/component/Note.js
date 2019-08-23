import React from 'react';

import '../container/Main.css';

class Note extends React.Component{

  selectBtn = () => {
    if(!this.props.note.done){
      return(
        <div className="note">
        <button onClick={this.props.selectNote} className="btn">Done</button>
        <button onClick={this.props.deleteNote} className="btn">Delete</button>
        <p>{this.props.note.text}</p>
        </div>
        );
    }
    else{
      return(
        <div className="note">
        <button onClick={this.props.selectNote} className="btn">Undo</button>
        <button onClick={this.props.deleteNote} className="btn">Delete</button>
        <p><s>{this.props.note.text}</s></p>
        </div>
        );
    }
  };

  render() {
    return(
      <div>
        {this.selectBtn()}
      </div>
    );
  }
}

export default Note;