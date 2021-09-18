import React from 'react';
import {Button, Grid, Text} from "../elements";
import styled from "styled-components";
import {Context, fetchName, setChoices, cancleChoices} from "../context/ResultContext";
import SubTable from './SubTable';


const Table = (props) => {
    const {info} = props;

    const findName = info[0];
    const {state, contextDispatch} = React.useContext(Context);

    const [showSub, handleShowSub] = React.useState(false);

    //이름 별 서브테이블 불러오기
    //주의: 불러온 데이터는 상수에 담아 사용. useState 이용 시 두번 째 시도에 state 반영됨..
    const nameInfo = state.names.filter(_=>_.name === findName)[0];
    const showDetail = () => {
        if (!nameInfo){
            fetchName(contextDispatch, findName);
        }

        if (showSub){
            handleShowSub(false);
        } else{
            handleShowSub(true);
        }
  }

  const checkAll = () => {
    setChoices(contextDispatch, info[0]);
  }
  const clear = () => {
    cancleChoices(contextDispatch, info[0]);
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
        <Text>{info[1].toFixed(5)}</Text>
        <Text>{info[2].toFixed(5)}</Text>
      </Grid>

      {showSub && 
        <>
        <Grid display="flex">
            <Button _onClick={checkAll} margin="0 5px 0 0">check all</Button>
            <Button _onClick={clear}>clear</Button>
        </Grid>
        <Grid display="flex" justify="space-between" margin="10px">
            <Text>id</Text>
            <Text _onClick={sortFox}>Foxtrot</Text>
            <Text _onClick={sortGolf}>Golf</Text>
        </Grid>

        {nameInfo?.info.map(_=>
            <SubTable subInfo={_} name={findName}></SubTable>
        )}
        </>
    }
    </>
    );
};

export default Table;