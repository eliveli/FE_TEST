import React from 'react';

export const Sort = () => {
    //컬럼 별 오름차순/내림차순 정렬
    const [upFox, handleUpFox] = React.useState(false);
    const [upGolf, handleUpGolf] = React.useState(false);
  
    const sort = (no, isUp, list) => {
        list?.sort(function(a, b) { 
        if (isUp){
          return a[no] - b[no]; 
        } else {
          return b[no] - a[no]; 
        }
      });
    }
    const sortFox = (list) => {
      if (upFox){
        handleUpFox(false);
        sort(1, false, list);
      } else{
        handleUpFox(true);
        sort(1, true, list);
      }
    }
    const sortGolf = (list) => {
      if (upGolf){
        handleUpGolf(false);
        sort(2, false, list);
      } else{
        handleUpGolf(true);
        sort(2, true, list);
      }
    }
    
    const sortFunction = {sortFox, sortGolf};
    
    return sortFunction;
};