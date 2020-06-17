import React from "react";
import { Authorization } from "./secret";
class FunctionalQuery extends React.Component {
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
  }

  fetchData = async () => {
    this.setState({ loading: true });
    const { query, endpoint } = this.props;
    let response = await fetch(
      "https://striveschool.herokuapp.com/api/comments/5",
      {
        headers: {
          ...Authorization,
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();

      this.setState({ data, loading: false, error: false });
    } else {
      const error = await response.json();
      this.setState({ data: [], loading: false, error });
    }
  };
  render() {
    const { loading, error, data } = this.state;
    return this.props.children({
      loading,
      error,
      data,
      reFetch: this.fetchData,
    });
  }
}

export default FunctionalQuery;
