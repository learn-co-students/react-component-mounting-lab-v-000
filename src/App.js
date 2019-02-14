import React, { Component } from 'react';
import Timer from './Timer'

class App extends Component {

  //no props being used here, so we can use the shorthand declaration of state
  state = { timerIDs: [] }

  // NOTE: Don't use arrow function in component did mount, because doing so would remove any methods from the prototype chain.
  componentDidMount(){
    console.log("hello")
    // Calling handleAddTimer here just adds our first timer.
    this.handleAddTimer()
  }

  // No need to modify anything in render or the class methods below
  // Unless, of course, you're curious about how it all works
  render() {
    return (
      <div className="App">
        <h1>MultiTimer</h1>
        <button onClick={this.handleAddTimer}>Add New Timer</button>
        <div className="TimerGrid">{this.renderTimers()}</div>
      </div>
    );
  }

  // returns array of components written in JSX, mapped from this.state.timerIDs
  renderTimers = () => this.state.timerIDs.map(id => {
    return <Timer key={id} id={id} removeTimer={this.removeTimer} />
  })

  // adds a random number for timer ID
  handleAddTimer = () => {
    // We pass a function to setState, rather than an object. The function passes in prevState to our state object. We use the spread operator to spread the timerIDs we've previously used and add to that a new timerID, which is just a random number.
    this.setState(prevState => ({
      timerIDs: [...prevState.timerIDs, Math.floor(Math.random()*1000)]
    }))
  }

  // removeTimer updates state, removing any timer that matches the provided id. Pay attention to the method used to remove the timer. We filter the timerIDs, passing along only the timers that do not match the id of the timer that we're passing in.
  removeTimer = id => {
    this.setState(prevState => ({
      timerIDs: prevState.timerIDs.filter(timer_id => timer_id !== id)
    }))
  }
}
export default App;
