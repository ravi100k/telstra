import axios from 'axios';
import React, { Component } from 'react';

const trafficStyle = {
  red: {
    backgroundColor: "red"
  },
  yellow: {
    backgroundColor: "yellow"
  },
  green: {
    backgroundColor: "green"
  },
  black: {
    backgroundColor: "black"
  }
};

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      red: trafficStyle.red,
      yellow: trafficStyle.black,
      green: trafficStyle.black,
      next: "yellow",
      current: "red",
    }
  }

  componentDidMount() {
    this._timeout = setInterval(function () {
      this.changeHandle();
    }.bind(this), 3000);
  }

  componentWillUnmount() {
    clearInterval(this._timeout);
  }

  handleTime = () => {
    console.log(this.state.current)
    if (this.state.current === 'red') {
      return 3000;
    }
    else if (this.state.current === 'yellow') {
      return 2000;
    }
    else if (this.state.current === 'green') {
      return 1000;
    }
  }
  changeHandle = () => {
    let styleObject = Object.assign({}, this.state);

    axios.get(`/traffic`)
    .then(res => {

      styleObject.current = res.data.active;

      if (res.data.active === "yellow") {
        styleObject.red = trafficStyle.black;
        styleObject.green = trafficStyle.black;
        styleObject.yellow = trafficStyle.yellow;
        styleObject.next = "green";
      }
      if (res.data.active === "green") {
        styleObject.red = trafficStyle.black;
        styleObject.green = trafficStyle.green;
        styleObject.yellow = trafficStyle.black;
        styleObject.next = "red";
      }
      if (res.data.active === "red") {
        styleObject.red = trafficStyle.red;
        styleObject.green = trafficStyle.black;
        styleObject.yellow = trafficStyle.black;
        styleObject.next = "yellow";
      }

    })
      .then(() => {
        this.setState({
          ...styleObject
        });
      })
  }

  render() {
    return (
      <div className="App" >
        <h2>Traffic Light Indicator</h2>

        <div className="box">
          <div className="circle" style={this.state.red}></div>
          <div className="circle" style={this.state.yellow}></div>
          <div className="circle" style={this.state.green}></div>
        </div>
      </div>
    );
  }
}

export default App;
