import React from 'react';
import {Button, Grid, Text} from "../elements";
import styled from "styled-components";
import {Context, setChoice} from "../context/ResultContext";

const SubTable = (props) => {
    const {subInfo, name} = props;

    const {state : {choice}, contextDispatch} = React.useContext(Context);

    // 항목 선택
    const subName = name + "-" + subInfo[0];
    const isSelected = choice.includes(subName);
    const select = () => {
        if (!isSelected){
            setChoice(contextDispatch, subName);
        }
    }

    return (
      <Grid width="100%" height="71px" display="flex" justify="space-between" borderBottom="1px solid rgba(0, 0, 0, 0.3)"
            _onClick={select} bgColor={isSelected? "#e0e0e0" : ""} >
        <Grid isCenter={true}>
            <Button border="none" bgColor="transparent">
                {subInfo[0]}
            </Button>
        </Grid>
        <Text isCenter={true}>{subInfo[1]}</Text>
        <Text isCenter={true} padding="0 10px 0 0">{subInfo[2]}</Text>
      </Grid>
    );
};

export default SubTable;