import React, { Component } from "react";
import signalResponse from "../services/fetchData";
import Signal from "./components/signal";

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
    super(props);
    this.state = {
      red: trafficStyle.red,
      yellow: trafficStyle.black,
      green: trafficStyle.black,
      next: "yellow",
      current: "red",
      date: new Date().toLocaleString()
    };
    this.interval = 0;
  }

  componentDidMount() {
    this.intervalID = setInterval(this.changeTime, 1000);
    this._timeout = setInterval(this.changeHandle, 1000);
  };

  componentWillUnmount() {
    clearInterval(this._timeout);
    clearInterval(this.intervalID);
  };

  changeTime = () => {
    this.setState({
      date: new Date().toLocaleString()
    });
  };

  changeHandle = async () => {
    // Fetch the data from server for the current color.
    let styleObject = Object.assign({}, this.state);

    let res = await signalResponse.call();
    if (res.data) {
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

      this.setState({
        ...styleObject
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h2>Traffic Light Indicator</h2>
        <span>
          Todays Date - {this.state.date}
        </span>
        <Signal color={this.state} />
      </div>
    );
  }
}

export default App;
