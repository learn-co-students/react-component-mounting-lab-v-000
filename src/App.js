import React, { Component } from 'react';

import Timer from './Timer'

class App extends Component {

  //no props being used here, so we can use the shorthand declaration of state
  state = {
    timerIDs: []
  }


  //Since App is the top level component, its componentDidMount method will be invoked before
  // any other child components are even constructed.

  // The App component is keeping track of timers using an array of random ID numbers. This
  // allows for easy removal and addition of Timer components. In App, write a componentDidMount
  // method that invokes the existing handleAddTimer class method.

  // When writing lifecycle methods, avoid using arrow functions - while they may work in browser,
  // we want these methods to exist on the prototype chain of whatever JavaScript class we've
  // created. Lifecycle methods written using arrow functions will not exist on the prototype
  // chain and will not pass the tests in this lab.

  componentDidMount(){
    this.handleAddTimer()
  }
  // No need to modify anything in render or the class methods below
  // Unless, of course, you're curious about how it all works
  render() {

    return (
      <div className="App">
        <h1>MultiTimer</h1>
        <button onClick={this.handleAddTimer}>Add New Timer</button>

        <div className="TimerGrid">
          {this.renderTimers()}
        </div>

      </div>
    );
  }

  // returns array of components written in JSX, mapped from this.state.timerIDs
  renderTimers = () => this.state.timerIDs.map(id => {
    return <Timer key={id} id={id} removeTimer={this.removeTimer} />
  })

  // adds a random number for timer ID
  handleAddTimer = () => {
    this.setState(prevState => ({
      timerIDs: [...prevState.timerIDs, Math.floor(Math.random()*1000)]
    }))
  }

  // removeTimer updates state, removing any timer that matches the provided author
  removeTimer = id => {
    this.setState(prevState => ({
      timerIDs: prevState.timerIDs.filter(timer_id => timer_id !== id)
    }))
  }


}

export default App;
