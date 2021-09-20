import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const {
    children,
    width,
    height,
    padding,
    margin,
    color,
    bgColor,
    fontSize,
    fontWeight,
    whiteSpace,
    textAlign,
    _onClick,
    isCenter,
    borderBottom,
    cursor
  } = props;

  const styles = {
    width: width,
    height: height,
    padding: padding,
    margin: margin,
    color: color,
    bgColor: bgColor,
    fontSize: fontSize,
    fontWeight: fontWeight,
    whiteSpace: whiteSpace,
    textAlign: textAlign,
    isCenter: isCenter,
    borderBottom: borderBottom,
    cursor: cursor
  };

  return (
    <React.Fragment>
      <ElP {...styles} onClick={_onClick}>{children}</ElP>
    </React.Fragment>
  );
};

Text.defaultProps = {
  children: null,
  width: "",
  height: "",
  padding: "",
  margin: "",
  color: "",
  bgColor: "",
  fontSize: "24px",
  fontWeight: "600",
  whiteSpace: "nowrap",
  textAlign: "",
  borderBottom: "",
  isCenter: false,
  cursor: "",
};

const ElP = styled.p`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bgColor};
  border-bottom: ${(props)=>props.borderBottom};

  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => props.textAlign};
  white-space: ${(props) => props.whiteSpace};
  
  ${(props)=>props.isCenter? "display:flex; justify-content:center; align-items: center; width:100%;" : ""}
  ${(props)=>props.cursor? "cursor:pointer;":""}
`;

export default Text;
