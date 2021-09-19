import React from 'react';
import {Button, Grid, Text} from "../elements";
import styled from "styled-components";
import {Context, setChoice} from "../context/ResultContext";

const SubTable = (props) => {
    const {subInfo, name} = props;

    const {state, contextDispatch} = React.useContext(Context);
    const {choice} = state;

    // 항목 선택
    const subName = name + "-" + subInfo[0];
    const isSelected = choice.includes(subName);
    const select = () => {
        if (!isSelected){
            setChoice(contextDispatch, subName);
        }
    }

    return (
      <Grid width="100%" _onClick={select} bgColor={isSelected? "yellow" : ""}
            display="flex" justify="space-between" margin="10px">
        <Text isCenter={true}>{subInfo[0]}</Text>
        <Text isCenter={true}>{subInfo[1]}</Text>
        <Text isCenter={true}>{subInfo[2]}</Text>
      </Grid>
    );
};

export default SubTable;