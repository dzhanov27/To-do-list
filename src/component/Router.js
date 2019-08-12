import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import All from './All'
import Complete from './Complete'
import Incomplete from './Incomplete'
import '../container/Main.css'

class RouterContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  showAll = () => {
    return(<All 
      notes = {this.props.notes}

    />)
  }

  showComplete = () => {
    let arr = this.props.notes.filter(item => item.done === true);
    return(<Complete notes = {arr} />)
  }
  showIncomplete = () => {
    let arr = this.props.notes.filter(item => item.done === false);
    return(<Incomplete notes = {arr} />)
  }


  render(){
    return (
        <div>
          <Router>
            <div className="router">
              <p>Let's get some work done!</p>
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
              </ul>
              <Route path="/All" component={this.showAll} />
              <Route path="/complete" component={this.showComplete} />
              <Route path="/incomplete" component={this.showIncomplete} />
            </div>
          </Router>
        </div>
    );
  }
}

export default RouterContainer;