import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

export default function TopLogo() {
  return (
    <div css={header}>
      <h3>REACT PRISMA AUTH</h3>
    </div>
  );
}

const header = css`
  width: 800px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
