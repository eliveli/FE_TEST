import React from "react";
import axios from "axios";

//================== 데이터 패칭 함수 ===================//

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
        data: {info: response.data, name: findname}
    })
    }
    catch (err) {
    console.log(err, "fetchNameError")
    }
}

  
  //================== 상태값 세팅 ===================//
  const initialState = {
      result: [],
      names: [],
      select: [],
      
  };
  
  //================== 리듀서 함수 ===================//
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_RESULT":
        return {
          ...state,
          result: action.data
        };
      case "SET_NAME":
        return {
          ...state,
          names: [...state.names, action.data]
        };

      default:
        throw new Error(`Unhanded action type: ${action.type}`);
    }
  }
  
  //context
  export const Context = React.createContext(null);
  
  // 위에서 선언한 Context의 Provider로 감싸주는 컴포넌트
  export const ContextProvider = ({ children }) => {
    const [state, contextDispatch] = React.useReducer(reducer, initialState);
  
    return (
        <Context.Provider value={{ state: state, contextDispatch}}>
          {children}
        </Context.Provider>
    );
  
  };