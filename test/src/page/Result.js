import React from "react";
import {Button, Grid, Text} from "../elements";
import Table from "../component/Table";
import styled from "styled-components";
import {Context, fetchData, cancleChoice} from "../context/ResultContext";
import { ReactComponent as Cancle } from "../image/cancle.svg";


const Result = () => {

  const {state, contextDispatch} = React.useContext(Context);
  const {result, choice} = state;

  console.log(choice,"choice")
  //result 목록 불러오기
  React.useEffect(()=>{
    if (result.length === 0){
      fetchData(contextDispatch);
    }
  }, []);


  //선택 취소
  const cancle = (choice) => {
    cancleChoice(contextDispatch, choice);
  }

  //컬럼 별 오름차순/내림차순 정렬
  const [upFox, handleUpFox] = React.useState(false);
  const [upGolf, handleUpGolf] = React.useState(false);

  const sort = (no, isUp) => {
    result.sort(function(a, b) { 
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
  

  return(
  <Grid padding="10px" position="relative" top="50px" margin="0 auto" width="700px">
    <Grid display="flex" justify="space-between" margin="10px">
      <Text>Result</Text>
      <Grid margin="0 10px 0 0" display="flex">
        <Inp></Inp>
        <Button>search</Button>
        <Button margin="0 0 0 30px">download</Button>
      </Grid>
    </Grid>

    {
      choice.length !== 0 && (
        <Grid bgColor="yellow">
          {choice.map( _ =>
            <Grid display="flex">
              <Text margin="5px 10px">{_}</Text>
              <Cancle onClick={()=>cancle(_)}></Cancle>
            </Grid>
          )}
        </Grid>
      )
    }
    
    <Grid display="flex" justify="space-between" margin="10px">
      <Text>Name</Text>
      <Text _onClick={sortFox}>Foxtrot</Text>
      <Text _onClick={sortGolf}>Golf</Text>
    </Grid>
    {result?.map(_=>
      <Table info={_}></Table>
    )}
    
  </Grid>
  )
};

const Inp = styled.input`

`

export default Result;
