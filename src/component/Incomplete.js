import React from 'react';

import Note from './Note';

class Incomplete extends React.Component {

  state ={
    notes: this.props.notes
  }

  deleteNote = index => {
    const data = this.state.notes;
    data.splice(index,1)
    this.setState([data]);
  };

  selectNote = index => {
    const data = this.state.notes;
    if(data[index].done) data[index].done = false;
    else data[index].done = true;
    this.setState([data]);
  };
  
  render(){return(<div className="notes">
  {this.state.notes.map((item, index) => {
    return(<Note
      key = {index}
      note = {item}
      deleteNote = {() => this.deleteNote(index)}
      selectNote = {() => this.selectNote(index)}
    />
    );})}
</div>);}
  
}

export default Incomplete;