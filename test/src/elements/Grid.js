import React from "react";
import styled from "styled-components";

const Grid = (props) => {
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
    display,
    jusify,
    align,
    flexDir,
    position,
    zIndex,
    top,
    bottom,
    left,
    border,
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
    display: display,
    jusify: jusify,
    align: align,
    flexDir: flexDir,
    position: position,
    zIndex: zIndex,
    top: top,
    bottom: bottom,
    left: left,
    border: border,
  };

  return (
    <React.Fragment>
      <ElDiv {...styles}>{children}</ElDiv>
    </React.Fragment>
  );
};

Text.defaultProps = {
  children: null,
  width: "auto",
  height: "auto",
  padding: false,
  margin: false,
  color: false,
  bgColor: false,
  fontSize: false,
  fontWeight: false,
  whiteSpace: "nowrap",
  display: "",
  jusify: "",
  align: "",
  flexDir: "",
  position: "",
  zIndex: "",
  top: "",
  bottom: "",
  left: "",
  border: "",
};

const ElDiv = styled.div`
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  flex-direction: ${(props) => props.flexDir};
  position: ${(props) => props.position};
  z-index: ${(props) => props.zIndex};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  border: ${(props) => props.border};

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  white-space: ${(props) => props.whiteSpace};
`;

export default Grid;
