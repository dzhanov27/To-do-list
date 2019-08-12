import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Note from './Note'

class RouterContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  // deleteNote = index => {
  //   const data = this.state.notes;
  //   data.splice(index,1)
  //   this.setState([data]);
  // };

  // selectNote = index => {
  //   const data = this.state.notes;
  //   if(data[index].done) data[index].done = false;
  //   else data[index].done = true;
  //   this.setState([data]);
  // };

  showAll = () => {
    console.log(this.props.notes)
    this.props.notes.map((item, index) => {
        return(<Note
          key = {index}
          note = {item}
          deleteNote = {() => this.deleteNote(index)}
          selectNote = {() => this.selectNote(index)}
        />
        );})
  }


  render(){
    return (
        <div>
          <Router>
            <div>
              <ul>
                <li>
                  <Link to="/">All</Link>
                </li>
                <li>
                  <Link to="/complete">Complete</Link>
                </li>
                <li>
                  <Link to="/incomplete">Incomplete</Link>
                </li>
              </ul>
              <Route path="/" component={this.showAll} />
              <Route path="/complete" component={Complete} />
              <Route path="/incomplete" component={Incomplete} />
            </div>
          </Router>
        </div>
    );
  }
}


function All () {
  // let filterComplete = this.props.notes.filter(item => item.done === true);
  // let filterIncomplete = this.props.notes.filter(item => item.done === false);
  console.log(RouterContainer.props.notes);
  return(
    <div>All
    </div>
  );
}

function Complete () {
  return(
    <div>Complete
    </div>
  );
}

function Incomplete () {
  return(
    <div>Incomplete
    </div>
  );
}


// {this.props.notes.map((item, index) => {
//   return(<Note
//     key = {index}
//     note = {item}
//     deleteNote = {() => this.deleteNote(index)}
//     selectNote = {() => this.selectNote(index)}
//   />
//   );})}

// this.state.notes.filter(item => item.done === true).map((item, index) => {
//   return(<Note
//     key = {index}
//     note = {item}
//     deleteNote = {() => this.deleteNote(index)}
//     selectNote = {() => this.selectNote(index)}
// />
//       );})}


export default RouterContainer;