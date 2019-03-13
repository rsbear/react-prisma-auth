import React from "react";
import { Link } from "@reach/router";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { SectionTitle } from "../lib/emotions";

export default function Landing(props) {
  return (
    <div>
      <SectionTitle>Is anyone logged in?</SectionTitle>
      {!props.authUser ? (
        <div>
          <span css={bold}>Nope.</span>
          <p css={ptext}>
            Please reference the note for making this a more complete app.
          </p>
          <p css={ptextlink}>
            <Link to="/login">Go to the login page &rarr;</Link>
          </p>
        </div>
      ) : (
        <div>
          <span css={bold}>YES.</span>
          <br />
          <p css={ptext}>
            Lets return some data from props.authUser that is queried in the
            App.js component.
          </p>
          <br />
          <span css={bold}>{props.authUser.email}</span>
        </div>
      )}
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <SectionTitle>Please note.</SectionTitle>
        <p css={ptext}>
          Generally, I think it makes for a better UX to just go ahead and
          redirect a user to the login page.
        </p>
        <p css={ptext}>So we can make an AuthRoute component:</p>
        <p css={ptext}>
          Or alternatively we can check within each component render:
        </p>
        <p css={[ptext, codetext]}>
          React.useEffect(() => &#123; <br />
          &nbsp; &nbsp; if (!props.authUser) &#123; <br />
          &nbsp; &nbsp; &nbsp; &nbsp; props.router.push("/login") <br />
          &nbsp; &nbsp; &#125; <br />
          &#125;)
        </p>
      </div>
    </div>
  );
}

const bold = css`
  font-size: 1.2em;
  font-weight: 300;
`;

const ptext = css`
  font-size: 15px;
  font-weight: 300;
  margin: 10px 0;
`;

const ptextlink = css`
  font-size: 15px;
  font-weight: 300;
  text-decoration: underline;
  color: purple;
`;

const codetext = css`
  font-family: monospace;
  font-size: 13px;
  margin-top: 20px;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f1f1f1;
`;
