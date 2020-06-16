import React, { cloneElement, Children, isValidElement } from "react";
class Query extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      data: [],
    };
  }
  componentDidMount() {
    this.fetchData();
    this.normalizeSearchParameters();
  }
  normalizeSearchParameters = () => {
    const { parameters } = this.props;
    return Object.entries(parameters).reduce((acc, entry, index) => {
      return index === 0
        ? acc + entry[0] + "=" + entry[1]
        : acc + "&" + entry[0] + "=" + entry[1]; // result=20
    }, "");
  };
  fetchData = async () => {
    this.setState({ loading: true });
    const { parameters } = this.props;
    const queryStrings = this.normalizeSearchParameters();
    const { results = 10 } = this.props;
    let response = await fetch(`https://randomuser.me/api/?${queryStrings}`);
    if (response.ok) {
      const { results } = await response.json();
      this.setState({ data: results, loading: false, error: false });
    } else {
      const error = await response.json();
      this.setState({ data: [], loading: false, error });
    }
  };
  render() {
    const { loading, error, data } = this.state;
    const { children } = this.props;
    return Children.map(children, (child) => {
      if (isValidElement(child)) {
        return cloneElement(child, {
          loading,
          error,
          data,
        });
      }
      return child;
    });
  }
}

export default Query;
