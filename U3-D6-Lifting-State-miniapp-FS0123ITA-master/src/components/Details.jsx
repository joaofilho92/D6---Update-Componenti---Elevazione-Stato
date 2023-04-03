import { Component } from "react";
import { Alert } from "react-bootstrap";

class Details extends Component {
  componentDidMount() {
    console.log("Sono componentDidMount()");
  }

  componentDidUpdate() {
    console.log("Sono componentDidUpdate()");
  }

  componentWillUnmount() {
    console.log("Sono componentWillUnmount()");
  }

  render() {
    console.log("Sono render()");
    return <Alert variant="success">{this.props.selected || "Nothing selected yet"}</Alert>;
  }
}

export default Details;
