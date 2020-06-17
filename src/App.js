import React from "react";
import Mutation from "./api/Mutation";
import { COMMENTS } from "./api/endpoint";
import FunctionalQuery from "./api/FunctionalQuery";

function App() {
  return (
    <div>
      <FunctionalQuery endpoint={COMMENTS} query={"5"}>
        {({ loading, error, data, reFetch }) => {
          if (loading) {
            return <div>loading</div>;
          } else if (error) {
            return <div>error</div>;
          } else {
            return (
              <div>
                <div>
                  {Array.isArray(data) &&
                    data.map((comment) => <p>{comment.comment}</p>)}
                </div>
                <Mutation
                  reFetch={reFetch}
                  parameters={{ elementId: "5", rate: 5 }}
                  endpoint={COMMENTS}
                  method={"POST"}
                >
                  {({ parameters, onSubmit, setParameters }) => (
                    <div>
                      <p> {JSON.stringify(parameters)}</p>
                      <input
                        onChange={(e) =>
                          setParameters({ comment: e.target.value })
                        }
                        type={"text"}
                        value={parameters.comment}
                      />
                      <button onClick={() => onSubmit()}>Submit</button>
                    </div>
                  )}
                </Mutation>
              </div>
            );
          }
        }}
      </FunctionalQuery>
    </div>
  );
}

export default App;
