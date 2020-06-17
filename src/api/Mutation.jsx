import React, { Component } from "react";
import { Authorization } from "./secret";

class Mutation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parameters: props.parameters || {},
    };
  }
  onSubmit = async () => {
    const { endpoint, query, method } = this.props;
    const { parameters } = this.state;
    let response = await fetch(query ? `${endpoint}/${query}` : endpoint, {
      method,
      body: JSON.stringify(parameters),
      headers: {
        ...Authorization,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      let data = await response.json();

      console.log(data);
    } else {
      let data = await response.json();

      console.log(data);
    }
    this.props.reFetch && this.props.reFetch();
  };
  render() {
    return this.props.children({
      parameters: this.state.parameters,
      onSubmit: () => this.onSubmit(),
      setParameters: (state) =>
        this.setState({ parameters: { ...this.state.parameters, ...state } }),
    });
  }
}

export default Mutation;
