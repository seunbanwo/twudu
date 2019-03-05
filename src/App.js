import React, { Component } from 'react';
import Header from './components/layout/Header';
import Twudus from './components/Twudus';
import AddTwudu from './components/AddTwudu';
import uuid from 'uuid';

import './App.css';

class App extends Component {
  state = {
    twudus: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Meeting with boss  ',
        completed: false
      }
    ]
  }

  // Toggler
  markComplete = (id) => {
    this.setState ({
      twudus: this.state.twudus.map ( twudu => {
        if(twudu.id === id) {
          twudu.completed = !twudu.completed
        }
        return twudu;
      })
    });
  }
  
  // Delete Twudu
  delTwudu = (id) => {
    this.setState ({
      twudus: [...this.state.twudus.filter(twudu => twudu.id !== id)]
    });
  }

  // Add Twudu
  addTwudu = (title) => {
    const newTwudu = {
      id: uuid.v4() ,
      title,
      completed: false
    }
    this.setState ({
      twudus: [...this.state.twudus, newTwudu]
    });
  }

  render() { 
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTwudu addTwudu={this.addTwudu}/>
          <Twudus twudus={this.state.twudus} markComplete={this.markComplete} delTwudu={this.delTwudu}/>
        </div>
      </div>
    );
  }
}

export default App;