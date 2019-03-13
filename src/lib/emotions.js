import styled from "@emotion/styled";
import { jsx, css } from "@emotion/core";

export const radius = "3px";

export const eerie = "#181818";
export const accentlavender = "#766C7F";

export const Flex = styled.div`
  display: flex;
  flex-flow: ${props => (props.column ? "column" : "row")};
  box-sizing: border-box;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 20px;
`;

export const FormInput = styled.input`
  height: 35px;
  width: 100%;
  margin: 10px 0;
  padding: 0 5px;
  box-sizing: border-box;
  outline: 0;
  text-align: center;
  border: solid 1px #f1f1f1;
  background-color: #f1f1f1;
  border-radius: ${radius};
`;

export const BtnPrimary = styled.button`
  height: 35px;
  width: 100%;
  margin: 10px 0;
  padding: 0 5px;
  box-sizing: border-box;
  outline: 0;
  border: solid 1px ${accentlavender};
  background-color: ${accentlavender};
  border-radius: ${radius};
  transition: all 200ms ease;
  cursor: pointer;

  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: white;
  font-weight: 300;

  &:hover {
    background-color: transparent;
    color: ${accentlavender};
  }
`;

export const globalStyle = {
  body: {
    margin: "0px",
    padding: "0px",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    color: eerie,
    textRendering: "optimizeLegibility",
    fontSmoothing: "antialiased",
    textSizeAdjust: "100%",
    backgroundColor: "#fcfcfc"
  },
  "ul, li, a, span, p, h1, h2, h3, h4, h5, h6": {
    margin: "0px",
    padding: "0px",
    listStyleType: "none",
    textDecoration: "none",
    display: "flex"
  }
};
