import React from "react";
import {Button, Grid, Text} from "../elements";
import Table from "../component/Table";
import styled from "styled-components";
import {Context, fetchData, cancleChoice, closeSubtable} from "../context/ResultContext";
import { ReactComponent as Cancle } from "../image/cancle.svg";
import {Sort} from "../shared/Sort";

const Result = () => {

  const {state : {result, choice}, contextDispatch} = React.useContext(Context);

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

  //검색
  const [search, handleSearch] = React.useState("");
  const [searchResult, handleSearchResult] = React.useState([]);
  const [filterList, handleFilterList] = React.useState(false);
  const goSearch = () => {
    closeSubtable(contextDispatch);
    handleSearchResult(result.filter(_=>_[0].includes(search)));
    handleFilterList(true);
  }
  //전체보기
  const showAll = () => {
    handleSearch("");
    handleSearchResult([]);
    handleFilterList(false);
  }

    //컬럼 별 정렬
    const {sortFox, sortGolf} = Sort(); 

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
      <Text isCenter={true} _onClick={()=>sortFox(result)}>Foxtrot</Text>
      <Text isCenter={true} _onClick={()=>sortGolf(result)}>Golf</Text>
    </Grid>
    {/* 전체 목록 */}
    {!filterList && result?.map((_, idx)=>
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
