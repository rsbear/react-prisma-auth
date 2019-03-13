import React from "react";
// import { Link, withRouter } from "react-router-dom";
import { Link } from "@reach/router";
import cookie from "cookie";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { Flex } from "../lib/emotions";

function Nav(props) {
  const handleLogout = () => {
    document.cookie = cookie.serialize("token", "", {
      maxAge: -1 // Expire the cookie immediately
    });
    window.location.reload();
  };

  return (
    <NavStyle>
      <ul css={vertlist}>
        <li>
          <Link to="/" css={item}>
            home
          </Link>
        </li>
        {props.authUser ? (
          <div>
            <li css={item} onClick={handleLogout}>
              log out
            </li>
            <li>
              <Link to="/dashboard" css={item}>
                dashboard
              </Link>
            </li>
          </div>
        ) : (
          <div>
            <li>
              <Link to="/login" css={item}>
                login
              </Link>
            </li>
            <li>
              <Link to="/signup" css={item}>
                signup
              </Link>
            </li>
          </div>
        )}
      </ul>
    </NavStyle>
  );
}

export default Nav;

const NavStyle = styled(Flex)`
  width: 200px;
  padding: 20px 40px;
  justify-content: space-between;
`;

const vertlist = css`
  flex-flow: column;
`;

const item = css`
  margin: 4px 0;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;
