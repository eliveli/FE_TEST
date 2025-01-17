import React from "react";
import axios from "axios";

//action creators (for fetching data)
export const fetchData = async (dispatch) => {
    try{
      const response = await axios.get("http://testapi.hits.ai/result");
      dispatch({
        type: "SET_RESULT",
        data: response.data
    })
    } catch (err) {
      console.log(err, "fetchDataError")
    }
  }
export const fetchName = async (dispatch, findname) => {
    try{
    const response = await axios.get(`http://testapi.hits.ai/result/${findname}`);
    dispatch({
        type: "SET_NAME",
        data: {info: response.data, name: findname, isSorted: false}
    })
    }
    catch (err) {
    console.log(err, "fetchNameError")
    }
}

// action creators (for sorting data)
export const sortData = async (dispatch, list) => {
    try{
      dispatch({
        type: "SET_RESULT",
        data: list
    })
    } catch (err) {
      console.log(err, "sortDataError")
    }
  }
export const sortName = async (dispatch, list, findname) => {
    try{
    dispatch({
        type: "SET_NAME",
        data: {info: list, name: findname, isSorted: true}
    })
    }
    catch (err) {
    console.log(err, "sortNameError")
    }
}


// action creators (for choice or cancle)
export const setChoice = (dispatch, choice) => {
    try{
    dispatch({
        type: "SET_CHOICE",
        data: choice
    })
    }
    catch (err) {
    console.log(err, "setChoiceError")
    }
}

export const cancleChoice = (dispatch, choice) => {
    try{
    dispatch({
        type: "CANCLE_CHOICE",
        data: choice
    })
    }
    catch (err) {
    console.log(err, "cancleChoiceError")
    }
}


export const setChoices = (dispatch, infoName) => {
    try{
    dispatch({
        type: "SET_CHOICES",
        data: infoName
    })
    }
    catch (err) {
    console.log(err, "setChoicesError")
    }
}

export const cancleChoices = (dispatch, infoName) => {
    try{
    dispatch({
        type: "CANCLE_CHOICES",
        data: infoName
    })
    }
    catch (err) {
    console.log(err, "cancleChoicesError")
    }
}


//action creators (to close previous subtables when searching)
export const closeSubtable = (dispatch) => {
    try{
    dispatch({
        type: "CLOSE_SUBTABLE",
    })
    }
    catch (err) {
    console.log(err, "closeSubtableError")
    }
}

  
const initialState = {
    result: [],
    names: [],
    choice: [],
    closeNo: 0, 
};
  
  const reducer = (state, action) => {
    switch (action.type) {

      case "SET_RESULT":
        let list = [];
        // 최초 result 불러온 경우 소수점 자리변환 후 저장
        if(state.result.length === 0){
          list = action.data.map(_=>{
            _[1] = _[1].toFixed(5);
            _[2] = _[2].toFixed(5);
            return _;
          })
        }
        // 기존 result 정렬한 경우 교체 저장
        else {
          list = action.data
        }  
        return {
          ...state,
          result: list
        };

      case "SET_NAME":
        let infoList = [];
        // 최초 name 불러온 경우 소수점 자리변환 후 저장
        if (!action.data.isSorted) {
          infoList = action.data.info.map(_=>{
            _[1] = _[1].toFixed(5);
            _[2] = _[2].toFixed(5);
            return _;
          })
        }
        // 기존 name 정렬한 경우 교체 저장
        else {
          infoList = action.data.info;
        }

        return {
          ...state,
          names: [...state.names, {name: action.data.name, info: infoList}]
        };
        
        
      case "SET_CHOICE":
        return {
          ...state,
          choice: [...state.choice, action.data]
        };
      case "CANCLE_CHOICE":
        const _state = state.choice.filter(_=>
            _ !== action.data
        )
        return {
          ...state,
          choice: _state
        };

    
      case "SET_CHOICES":
        const _choiceList = state.names.filter(_=> _.name === action.data)[0].info.map(_=>action.data + "-" + _[0]); //name에 속한 데이터로 리스트 구성
        const choiceList = _choiceList.filter(_=> !state.choice.includes(_)); //기존 목록에 없는 choice 추가
        return {
          ...state,
          choice: [...state.choice, ...choiceList]
        };
      case "CANCLE_CHOICES":
        const cancleList = state.names.filter(_=> _.name === action.data)[0].info.map(_=>action.data + "-" + _[0]); //name에 속한 데이터로 리스트 구성
        const afterCancles = state.choice.filter(_=>    //기존 목록에 포함된 choice 제거해 리스트 재구성
            !cancleList.includes(_)
        )
        return {
          ...state,
          choice: afterCancles
        };

      // search 시 기존 subtable 닫기 위한 상태 변경
      case "CLOSE_SUBTABLE":
        return {
          ...state,
          closeNo: ++state.closeNo
        };

      default:
        throw new Error(`Unhanded action type: ${action.type}`);
    }
  }
  
  //context
  export const Context = React.createContext(null);
  
  //context provider
  export const ContextProvider = ({ children }) => {
    const [state, contextDispatch] = React.useReducer(reducer, initialState);
  
    return (
        <Context.Provider value={{ state: state, contextDispatch}}>
          {children}
        </Context.Provider>
    );
  
  };