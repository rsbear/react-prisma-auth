import React, { Component } from "react";
import { Global } from "@emotion/core";
import { globalStyle } from "./lib/emotions";

import Nav from "./components/nav";
import { MainRender } from "./lib/routeconfig";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import TopLogo from "./components/toplogo";

class App extends Component {
  state = {
    authUser: null
  };

  componentDidMount() {
    this.props.userQuery.then(data => this.setState({ authUser: data }));
  }

  render() {
    return (
      <div css={appWrapper}>
        <Global styles={globalStyle} />
        <TopLogo />
        <Nav authUser={this.state.authUser} />
        <MainRender authUser={this.state.authUser} />
      </div>
    );
  }
}

export default App;

const appWrapper = css`
  display: flex;
  flex-flow: row wrap;
  width: 800px;
  margin: 0 auto;
`;
