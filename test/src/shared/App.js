import React from "react";
import Header from "./Header";
import Result from "../page/Result";
import {ContextProvider} from "../context/ResultContext"

function App() {
  return (
    <>
      <Header></Header>
      <ContextProvider>
        <Result></Result>
      </ContextProvider>
    </>
  );
}

export default App;
