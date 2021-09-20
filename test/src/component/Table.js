import React from 'react';
import {Button, Grid, Text} from "../elements";
import styled from "styled-components";
import {Context, fetchName, setChoices, cancleChoices} from "../context/ResultContext";
import SubTable from './SubTable';
import { ReactComponent as SortUp } from "../image/SortUp.svg";
import { ReactComponent as SortDown } from "../image/SortDown.svg";


const Table = (props) => {
    const {info} = props;

    const findName = info[0];
    const {state : {names, closeNo}, contextDispatch} = React.useContext(Context);
    const [showSub, handleShowSub] = React.useState(false);

    //검색 직후 서브테이블 제목 닫기
    React.useEffect(()=>{
      handleShowSub(false);
    }, [closeNo]);

    //이름 별 서브테이블 불러오기
    //주의: (O)불러온 데이터는 상수에 담아 사용. (X)useState 이용 시 두번 째 시도에 state 반영됨..
    const nameInfo = names.filter(_=>_.name === findName)[0];
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
    setChoices(contextDispatch, findName);
  }
  const clear = () => {
    cancleChoices(contextDispatch, findName);
  }

    //정렬하기
    const [upFox, handleUpFox] = React.useState(false);
    const [upGolf, handleUpGolf] = React.useState(false);
    const sort = (no, isUp) => {
      nameInfo?.info.sort(function(a, b) { 
        if (isUp){
          return a[no] - b[no]; 
        } else {
          return b[no] - a[no]; 
        }
      });
  
    }
    const sortFox = (isUp) => {
      if (isUp){
          handleUpFox(true);
          sort(1, true);
      } else{
          handleUpFox(false);
          sort(1, false);
      }
    }
    const sortGolf = (isUp) => {
      if (isUp){
        handleUpGolf(true);
        sort(2, true);
      } else{
        handleUpGolf(false);
        sort(2, false);
      }
    }
  
    return (
    <>
      <Grid width="100%" height="71px" display="flex" justify="space-between" borderBottom="1px solid rgba(0, 0, 0, 0.3)">
        <Grid isCenter={true} >
          <Button minWidth="140px" height="40px" border="1px solid #0D9991" color="#0D9991" _onClick={showDetail}>{findName}</Button>
        </Grid>
        <Text isCenter={true}>{info[1]}</Text>
        <Text isCenter={true} padding="0 10px 0 0">{info[2]}</Text>
      </Grid>

      {showSub && 
        <Grid padding="20px 40px 0">
          <Grid display="flex" width="100%" justify="space-between">
            <Grid display="flex" width="100%" justify="center">
              <Button width="102px" border="1px solid #7879F1" color="#7879F1"_onClick={checkAll} margin="0 12px 0 0" fontSize="18px">check all</Button>
              <Button width="102px" border="1px solid rgba(255, 0, 0, 0.65)" color="rgba(255, 0, 0, 0.65)" _onClick={clear} fontSize="18px">clear</Button>
            </Grid>
            <Grid width="100%" />
            <Grid width="100%" />
          </Grid>
          <Grid width="100%" display="flex" justify="space-between" borderBottom="1px solid black">
              <Text isCenter={true}>id</Text>
              <Grid isCenter={true} display="flex">
                <Text padding="0 7px 0 0">Foxtrot</Text>
                <Grid sortBtn={true}>
                  <SortUp onClick={()=>sortFox(true)} style={{cursor: "pointer"}}></SortUp>
                  <SortDown onClick={()=>sortFox(false)} style={{cursor: "pointer"}}></SortDown>
              </Grid>
              </Grid>
              <Grid isCenter={true} display="flex">
                <Text padding="0 7px 0 0">Golf</Text>
                <Grid sortBtn={true}>
                  <SortUp onClick={()=>sortGolf(true)} style={{cursor: "pointer"}}></SortUp>
                  <SortDown onClick={()=>sortGolf(false)} style={{cursor: "pointer"}}></SortDown>
              </Grid>
              </Grid>
          </Grid>

          {nameInfo?.info.map((_, idx)=>{
            return <SubTable subInfo={_} name={findName} key={idx}></SubTable>
          })
          }
        </Grid>
    }
    </>
    );
};

export default Table;