import React, { useState } from "react";
import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";

export default function Dashboard(props) {
  const [icTitle, setIcTitle] = useState("");

  return (
    <div>
      <h2>dashboard</h2>
      <Mutation mutation={CREATEIC}>
        {mutate => (
          <form
            onSubmit={async e => {
              e.preventDefault();
              await mutate({
                variables: {
                  title: icTitle
                }
              });
            }}
          >
            <input
              type="text"
              placeholder="interest check title"
              onChange={e => setIcTitle(e.target.value)}
            />
            <button type="submit"> create ic</button>
          </form>
        )}
      </Mutation>
      <br />
      <br />
      <br />
      <Query query={ICQUERY}>
        {({ data, loading, error }) => {
          if (error) return <h2>error wrong</h2>;
          if (loading) return <h2>loading...</h2>;

          return (
            <div>
              {data.interestChecks.map(ic => (
                <h2>{ic.title}</h2>
              ))}
            </div>
          );
        }}
      </Query>
    </div>
  );
}

const CREATEIC = gql`
  mutation createIC($title: String!) {
    createIC(title: $title) {
      id
      title
    }
  }
`;

const ICQUERY = gql`
  query interestChecks {
    interestChecks {
      id
      title
    }
  }
`;
