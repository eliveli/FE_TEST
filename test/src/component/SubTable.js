import React from 'react';
import {Button, Grid, Text} from "../elements";
import styled from "styled-components";
import {Context, fetchData} from "../context/ResultContext";

const SubTable = (props) => {
    const {_} = props;

    const select = () => {

    }
    
    return (
      <Grid display="flex" justify="space-between" margin="10px">
        <Text _onClick={select}>{_[0]}</Text>
        <Text>{_[1].toFixed(5)}</Text>
        <Text>{_[2].toFixed(5)}</Text>
      </Grid>
    );
};

export default SubTable;