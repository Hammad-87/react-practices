import React from 'react';
import Query from "./api/Query";
import Users from "./examples/randomuser/Users";

function App() {
  return (
    <div>
        <Query
               parameters={{
    results: 20, nat: "usa", gender: "female"
        }}>
          <Users/>
        </Query>
    </div>
  );
}

export default App;
