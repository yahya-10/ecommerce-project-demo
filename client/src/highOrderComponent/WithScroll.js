import React, { Component } from "react";

const WithScroll = (WrappedComponent) => {
  class HOC extends Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }
    render() {
      return <WrappedComponent />;
    }
  }
  return HOC;
};

export default WithScroll;
