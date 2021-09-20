import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    _onClick,
    children,
    width,
    minWidth,
    height,
    padding,
    margin,
    color,
    bgColor,
    fontSize,
    borderRadius,
    fontWeight,
    border,
    shape,
    size,
    disabled,
    src,
    lineHeight
  } = props;

  const styles = {
    width: width,
    minWidth: minWidth,
    height: height,
    padding: padding,
    margin: margin,
    color: color,
    bgColor: bgColor,
    fontSize: fontSize,
    borderRadius: borderRadius,
    fontWeight: fontWeight,
    border: border,
    size: size,
    disabled: disabled,
    src: src,
    lineHeight:lineHeight,
  };

  if (shape === "circle") {
    return (
      <React.Fragment>
        <ElCircleButton {...styles} onClick={_onClick}>
          {children}
        </ElCircleButton>
      </React.Fragment>
    );
  }

  if (shape === "pill") {
    return (
      <React.Fragment>
        <ElPillButton {...styles} onClick={_onClick}>
          {children}
        </ElPillButton>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>
        {children}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  _onClick: () => {},
  children: null,
  width: "auto",
  minWidth: "",
  height: "auto",
  padding: "",
  margin: 0,
  color: "black",
  bgColor: "white",
  fontSize: "24px",
  borderRadius: "",
  fontWeight: "600",
  border: `1px solid black`,
  shape: "",
  size: 0,
  src: "",
  disabled: false,
  lineHeight:"",
};

const ElCircleButton = styled.button`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  border: ${(props) => props.border};
  border-radius: 100%;

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  &:focus,
  &:active {
    outline: none;
  }
  &:hover {
    opacity: 0.8;
  }

  font-family: "Noto Sans KR";
`;

const ElPillButton = styled.button`
  width: ${(props) => props.width};
  height: 36px;
  padding: ${(props) => (props.padding ? props.padding : "9px 12px")};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  font-size: 14px;
  font-weight: 500;
  border: ${(props) => props.border};
  border-radius: 36px;

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  &:focus,
  &:active {
    outline: none;
  }

  font-family: "Noto Sans KR";
`;

const ElButton = styled.button`
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  background-image: url("${(props) => props.src}");
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  line-height:${(props)=>props.lineHeight};

  &:focus,
  &:active {
    outline: none;
  }

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
  }

  font-family: "Noto Sans KR";
`;

export default Button;
