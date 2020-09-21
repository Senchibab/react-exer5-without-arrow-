import React from "react";
import ReactDOM from "react-dom";
class Ex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: parseInt(this.props.count) };
    this.startCount = this.startCount.bind(this);
  }
  startCount() {
    this.count = setInterval(() => {
      this.setState({
        count: this.state.count + parseInt(this.props.increment)
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.startCount}>Click to start counter</button>
      </div>
    );
  }
}
ReactDOM.render(
  <Ex count="10" increment="100" />,
  document.getElementById("root")
);
