import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    children,
    width,
    height,
    maxWidth,
    padding,
    margin,
    color,
    bgColor,
    fontSize,
    fontWeight,
    whiteSpace,
    display,
    justify,
    align,
    flexDir,
    gap,
    position,
    zIndex,
    top,
    bottom,
    left,
    right,
    float,
    border,
    borderTop,
    borderBottom,
    _onClick,        

    cursor,
    isCenter,
    sortBtn
  } = props;

  const styles = {
    width: width,
    maxWidth:maxWidth,
    height: height,
    padding: padding,
    margin: margin,
    color: color,
    bgColor: bgColor,
    fontSize: fontSize,
    fontWeight: fontWeight,
    whiteSpace: whiteSpace,
    display: display,
    justify: justify,
    align: align,
    flexDir: flexDir,
    gap: gap,
    position: position,
    zIndex: zIndex,
    top: top,
    bottom: bottom,
    borderTop:borderTop,
    borderBottom:borderBottom,
    left: left,
    right: right,
    float: float,
    border: border,
    cursor: cursor,
    isCenter: isCenter,
    sortBtn: sortBtn,
  };

  return (
    <React.Fragment>
      <ElDiv {...styles} onClick={_onClick}>{children}</ElDiv>
    </React.Fragment>
  );
};

Text.defaultProps = {
  children: null,
  width: "auto",
  maxWidth: "",
  height: "auto",
  padding: "",
  margin: "",
  color: "",
  bgColor: "",
  fontSize: "",
  fontWeight: "",
  whiteSpace: "nowrap",
  display: "",
  justify: "",
  align: "",
  flexDir: "",
  gap: "",
  position: "",
  zIndex: "",
  top: "",
  bottom: "",
  left: "",
  right: "",
  float:"",
  border: "",
  borderTop: "",
  borderBottom: "",
  cursor: false,
  _onClick: ()=>{},
  isCenter: false,
  sortBtn: false,
};

const ElDiv = styled.div`
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  flex-direction: ${(props) => props.flexDir};
  gap: ${(props) => props.gap};

  position: ${(props) => props.position};
  z-index: ${(props) => props.zIndex};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  float: ${(props) => props.float};
  
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  
  border: ${(props) => props.border};
  border-top: ${(props) => props.borderTop};
  border-bottom: ${(props) => props.borderBottom};
  background-color: ${(props) => props.bgColor};
  
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  white-space: ${(props) => props.whiteSpace};

  ${(props)=>props.cursor? "cursor: pointer;" : ""}
  ${(props)=>props.isCenter? "display:flex; justify-content:center; align-items: center; width:100%;" : ""}
  ${(props)=>props.sortBtn? "display: flex; flex-direction: column; gap: 4px; margin-left: 6px;" : ""}


`;

export default Grid;
