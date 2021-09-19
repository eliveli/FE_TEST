import React from 'react';
import {Button, Grid, Text} from "../elements";
import styled from "styled-components";
import {Context, fetchName, setChoices, cancleChoices} from "../context/ResultContext";
import SubTable from './SubTable';
import {Sort} from "../shared/Sort";

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

  //컬럼 별 정렬
  const {sortFox, sortGolf} = Sort();

    return (
    <>
      <Grid width="100%" display="flex" justify="space-between" margin="10px">
        <Text isCenter={true} _onClick={showDetail}>{findName}</Text>
        <Text isCenter={true}>{info[1]}</Text>
        <Text isCenter={true}>{info[2]}</Text>
      </Grid>

      {showSub && 
        <>
          <Grid display="flex">
              <Button _onClick={checkAll} margin="0 5px 0 0">check all</Button>
              <Button _onClick={clear}>clear</Button>
          </Grid>
          <Grid width="100%" display="flex" justify="space-between" margin="10px">
              <Text isCenter={true}>id</Text>
              <Text isCenter={true} _onClick={()=>sortFox(nameInfo?.info)}>Foxtrot</Text>
              <Text isCenter={true} _onClick={()=>sortGolf(nameInfo?.info)}>Golf</Text>
          </Grid>

          {nameInfo?.info.map((_, idx)=>{
            return <SubTable subInfo={_} name={findName} key={idx}></SubTable>
          })
          }
        </>
    }
    </>
    );
};

export default Table;