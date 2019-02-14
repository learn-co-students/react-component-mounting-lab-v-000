import React, { Component } from 'react';

class Timer extends Component {

  state = {time: 10,color: '#'+Math.floor(Math.random()*16777215).toString(16)}
  
  clockTick=()=>this.setState(prevState=>({time: prevState.time+1}))
  interval = setInterval(this.clockTick, 1000)
  // Event handlers
  stopClock = () => clearInterval(this.interval)
  handleClose = () => this.props.removeTimer(this.props.id)

  componentDidMount(){ this.interval }

  render() {
    const { time, color } = this.state
    return (
      <section className="Timer" style={{background: color}}>
        <h1>{ time }</h1>
        <button onClick={ this.stopClock }>Stop</button>
        <aside className="mountText">Mounted</aside>
        <small onClick={ this.handleClose }>X</small>
      </section>
    );
  }  
  
  componentWillUnmount(){clearInterval(this.interval)}
}
export default Timer;
