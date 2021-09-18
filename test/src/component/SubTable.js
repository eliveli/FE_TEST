import React from 'react';
import {Button, Grid, Text} from "../elements";
import styled from "styled-components";
import {Context, setChoice} from "../context/ResultContext";

const SubTable = (props) => {
    const {subInfo, name} = props;

    const {state, contextDispatch} = React.useContext(Context);
    const {choice} = state;

    const subName = name + "-" + subInfo[0];
    const isSelected = choice.includes(subName);
    const select = () => {
        if (!isSelected){
            setChoice(contextDispatch, subName);
        }
    }

    return (
      <Grid  _onClick={select} bgColor={isSelected? "yellow" : ""}
            display="flex" justify="space-between" margin="10px">
        <Text>{subInfo[0]}</Text>
        <Text>{subInfo[1].toFixed(5)}</Text>
        <Text>{subInfo[2].toFixed(5)}</Text>
      </Grid>
    );
};

export default SubTable;