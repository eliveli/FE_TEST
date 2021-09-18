import React from 'react';
import {Button, Grid, Text} from "../elements";
import styled from "styled-components";
import {Context, fetchName} from "../context/ResultContext";
import SubTable from './SubTable';


const Table = (props) => {
    const {_} = props;

    const findName = _[0];
    const {state, contextDispatch} = React.useContext(Context);

    const [showSub, handleShowSub] = React.useState(false);

    //이름 별 서브테이블 불러오기
    const nameInfo = state.names.filter(_=>_.name === findName)[0];
    const showDetail = () => {
        if (!nameInfo){
            fetchName(contextDispatch, findName);
            console.log(nameInfo,"nameinfo")
        }

        if (showSub){
            handleShowSub(false);
        } else{
            handleShowSub(true);
        }
  }

  //나중에 컴포넌트로 따로 빼기..
    //컬럼 별 오름차순/내림차순 정렬
        const [upFox, handleUpFox] = React.useState(false);
        const [upGolf, handleUpGolf] = React.useState(false);
      
        const sort = (no, isUp) => {
            nameInfo.info.sort(function(a, b) { 
            if (isUp){
              return a[no] - b[no]; 
            } else {
              return b[no] - a[no]; 
            }
          });
        }
        const sortFox = () => {
          if (upFox){
            handleUpFox(false);
            sort(1, false);
          } else{
            handleUpFox(true);
            sort(1, true);
          }
        }
        const sortGolf = () => {
          if (upGolf){
            handleUpGolf(false);
            sort(2, false);
          } else{
            handleUpGolf(true);
            sort(2, true);
          }
        }
    return (
    <>
      <Grid display="flex" justify="space-between" margin="10px">
        <Text _onClick={showDetail}>{findName}</Text>
        <Text>{_[1].toFixed(5)}</Text>
        <Text>{_[2].toFixed(5)}</Text>
      </Grid>

      {showSub && 
        <>
        <Grid display="flex" justify="space-between" margin="10px">
            <Text>id</Text>
            <Text _onClick={sortFox}>Foxtrot</Text>
            <Text _onClick={sortGolf}>Golf</Text>
        </Grid>

        {nameInfo?.info.map(_=>
            <SubTable _={_}></SubTable>
        )}
        </>
    }
    </>
    );
};

export default Table;