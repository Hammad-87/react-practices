import React from "react";
import User from "./User";

function Users(props) {
  const { loading, error, data } = props;
  if (loading) {
    return <div>loading</div>;
  } else if (error) {
    return <div>error</div>;
  } else {
    return data.map((user) => <User user={user} />);
  }
}

export default Users;
