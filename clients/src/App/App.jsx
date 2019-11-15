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
    /**
     * For dynamically changing the the time interval.
     */
    this._timeout = setInterval(this.changeHandle, this.interval);

    /**
     * For constant time change of time interval.
     */
    // this._timeout = setInterval(function () {
    //   this.changeHandle();
    // }.bind(this), 3000);
  }

  componentWillUnmount() {
    clearInterval(this._timeout);
    clearInterval(this.intervalID);
  }

  changeTime = () => {
    this.setState({
      date: new Date().toLocaleString()
    });
  };

  changeHandle = () => {
    // Clear the previous counter (dynamically changing the the time interval)
    clearInterval(this._timeout); // stop the setInterval()

    // Fetch the data from server for the current color.
    this._apiCall();

    // dynamically change the run interval
    if (this.state.current === "green") {
      // interval betwwen red -> yellow
      this.interval = 5000;
    } else if (this.state.current === "red") {
      // interval betwwen yellow -> green
      this.interval = 10000;
    } else if (this.state.current === "yellow") {
      // interval betwwen green -> red
      this.interval = 15000;
    }

    this._timeout = setInterval(this.changeHandle, this.interval); // start the setInterval()
  };

  _apiCall = async () => {
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
