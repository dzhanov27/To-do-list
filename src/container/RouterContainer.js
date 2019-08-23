import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import All from '../component/All'
import Search from '../component/Search'
import '../container/Main.css'

class RouterContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: this.props.notes,
      filter: []
    };
  }

  showAll = () => {
    return(<All notes = {this.state.notes}/>)
  }

  showComplete = () => {
    let arr = this.state.notes.filter(item => item.done === true);
    return(<All notes = {arr} />)
  }
  showIncomplete = () => {
    let arr = this.state.notes.filter(item => item.done === false);
    return(<All notes = {arr} />)
  }

  filterFunc = text => {
    console.log(text);
    let filtredNotes = this.state.notes.filter( item => {
      return item.text.toLowerCase().includes(text.toLowerCase());
    });
    console.log(filtredNotes)
    this.setState({
      ...this.state,
      filter: filtredNotes
    })
  }

  showSearch = () => {
    return(<All notes = {this.state.filter}/>)
  }


  render(){

    return (
        <div>
          <Router>
            <div className="router">
              <p>Let's get some work done!</p>
              <Search filterFunc={this.filterFunc} />
              <ul>
                <li>
                  <Link className="li" to="/All">All</Link>
                </li>
                <li>
                  <Link className="li" to="/complete">Complete</Link>
                </li>
                <li>
                  <Link className="li" to="/incomplete">Incomplete</Link>
                </li>
                <li>
                  <Link className="li" to="/search">Search</Link>
                </li>
              </ul>
              <Route path="/All" component={this.showAll} />
              <Route path="/complete" component={this.showComplete} />
              <Route path="/incomplete" component={this.showIncomplete} />
              <Route path="/search" component={this.showSearch} />
            </div>
          </Router>
        </div>
    );
  }
}

export default RouterContainer;