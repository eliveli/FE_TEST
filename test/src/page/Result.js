import React from "react";
import {Button, Grid, Text} from "../elements";
import Table from "../component/Table";
import styled from "styled-components";
import {Context, fetchData, cancleChoice, closeSubtable} from "../context/ResultContext";
import { ReactComponent as Cancle } from "../image/cancle.svg";
import { ReactComponent as SortUp } from "../image/SortUp.svg";
import { ReactComponent as SortDown } from "../image/SortDown.svg";

const Result = () => {

  const {state : {result, choice}, contextDispatch} = React.useContext(Context);

  //result 목록 불러오기
  React.useEffect(()=>{
    if (result.length === 0){
      fetchData(contextDispatch);
    }
    changeTempResult(result);
  }, [result]);
  
  // 실제 사용할 리스트
  const [tempResult, changeTempResult] = React.useState([]);

  const [number, plusNumber] = React.useState(1);
  // let tempResult = result;
  //선택 취소
  const cancle = (choice) => {
    cancleChoice(contextDispatch, choice);
  }

  //검색
  const [search, handleSearch] = React.useState("");
  const [searchResult, handleSearchResult] = React.useState([]);
  const [filterList, handleFilterList] = React.useState(false);
  const goSearch = () => {
    closeSubtable(contextDispatch);
    handleSearchResult(result.filter(_=>_[0].includes(search)));
    handleFilterList(true);
    changeTempResult(searchResult);
    console.log(searchResult,"searchResult검색직후")
    console.log(tempResult,"tempResult검색직후")
  }
  //전체보기
  const showAll = () => {
    handleSearch("");
    handleSearchResult([]);
    changeTempResult(result);
    handleFilterList(false);
  }


  //정렬하기
  const [upFox, handleUpFox] = React.useState(false);
  const [upGolf, handleUpGolf] = React.useState(false);
  const sort = (no, isUp) => {
    console.log(tempResult,"tempResult이전")
    tempResult.sort(function(a, b) { 
      if (isUp){
        return a[no] - b[no]; 
      } else {
        return b[no] - a[no]; 
      }
    });
    console.log(tempResult,"tempResult이후")

    plusNumber(number+1);
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


//   //정렬하기
//   const handleSortResult = (list) => {
//     changeTempResult(list);
//   }
//   const sortList = (no, isUp, list) => {
//     list.sort(function(a, b) { 
//         if (isUp){
//             return a[no] - b[no]; 
//         } else {
//             return b[no] - a[no]; 
//         }
//       }
//     );
//     handleSortResult(list);
// }
//   //(Fox or Golf , Up or Down)
//   const handleSort = (isFox, isUp, list) => {
//     if(isFox) {sortList(1, isUp, list);}
//     else {sortList(2, isUp, list);}
// }

  return(
  <Grid padding="10px" position="relative" top="50px" margin="0 auto" width="700px">
    <Grid display="flex" justify="space-between" margin="10px">
      <Text>Result</Text>
      <Grid margin="0 10px 0 0" display="flex">
        <Inp onChange={(e)=>handleSearch(e.target.value)} value={search}
            placeholder="이름으로 검색하세요"
        ></Inp>
        <Button _onClick={goSearch}>search</Button>
        <Button _onClick={showAll}>show all</Button>
        <Button margin="0 0 0 30px">download</Button>
      </Grid>
    </Grid>

  {/* 선택 항목 표시 */}
    {
      choice.length !== 0 && (
        <Grid bgColor="yellow">
          {choice.map((_, idx) =>
            <Grid display="flex" key={idx}>
              <Text margin="5px 10px">{_}</Text>
              <Cancle onClick={()=>cancle(_)}></Cancle>
            </Grid>
          )}
        </Grid>
      )
    }
    
    <Grid width="100%" display="flex" justify="space-between" margin="10px">
      <Text isCenter={true}>Name</Text>
      <Grid isCenter={true} display="flex">
        <Text>Foxtrot</Text>
        <Grid sortBtn={true}>
            <SortUp onClick={()=>sortFox(true)} style={{cursor: "pointer"}}></SortUp>
            <SortDown onClick={()=>sortFox(false)} style={{cursor: "pointer"}}></SortDown>
        </Grid>
      </Grid>
      <Grid isCenter={true} display="flex">
        <Text>Golf</Text>
        <Grid sortBtn={true}>
            <SortUp onClick={()=>sortGolf(true)} style={{cursor: "pointer"}}></SortUp>
            <SortDown onClick={()=>sortGolf(false)} style={{cursor: "pointer"}}></SortDown>
        </Grid>
      </Grid>
    </Grid>

    {/* 전체 목록 */}
    {!filterList && tempResult?.map((_, idx)=>
      <Table info={_} key={idx}></Table>
    )}
    {/* 검색 목록 */}
    {filterList && searchResult.length !== 0 && searchResult.map((_, idx)=>
      <Table info={_} key={idx}></Table>
    )}
    {filterList && searchResult.length === 0 && (
      <Text>검색 결과가 없습니다.</Text>
    )
    }
    
  </Grid>
  )
};

const Inp = styled.input`

`

export default Result;
