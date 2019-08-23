import React, { Fragment } from 'react';

// import Note from '../component/Note';
import RouterContainer from './RouterContainer'
import './Main.css'

class MainContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {text: "item 1", done: false},
        {text: "note 2", done: false},
        {text: "task 3", done: true},
        {text: "smth 4", done: true},
        {text: "smth 5", done: true},],
      value: '',
    };

    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({value: event.target.value});
  }

  addNote = () => {
    let arr = this.state.notes;
    arr.push({text: this.state.value, done: false})
    this.setState({
      ...this.state,
      notes: arr
    })
  };

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

  render() {
    return (
        <Fragment>
          <header className="add__box">
            <h1>To-Do App!</h1>
            <p>Add New To-Do</p>
            <input 
            type="text" 
            className="add__input"
            placeholder="Enter New Task"
            value = { this.state.value }
            onChange={ this.handleInput }/>
            <button onClick={ this.addNote } className="add__button">Add</button>
          </header> 
          <RouterContainer notes = { this.state.notes }/>
        </Fragment>
    );
  }
}

export default MainContainer;