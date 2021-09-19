import React from "react";
import Header from "./Header";
import Result from "../page/Result";
import {Grid} from "../elements";
import {ContextProvider} from "../context/ResultContext";
import { ReactComponent as GoTop } from "../image/GoTop.svg";

function App() {
  return (
    <>
      <Header></Header>
      <ContextProvider>
        <Result></Result>
      </ContextProvider>

      {/* 최상단 이동 버튼 */}
      <Grid
        position="fixed"
        bottom="40px"
        right="36px"
        zIndex="1"
        cursor={true}
        _onClick={() => window.scrollTo(0, 0)}
      >
        <GoTop />
      </Grid>
    </>
  );
}

export default App;
