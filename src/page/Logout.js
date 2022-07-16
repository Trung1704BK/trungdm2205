import React from "react";

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    localStorage.clear();
    this.props.history.push("/login");
  }
  render() {
    return null;
  }
}
export default Logout;
