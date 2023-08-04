import axios from "axios";


export const init = "account/init";
export const inc = "account/increment";
export const dec = "account/decrement";
export const incacc = "account/incrementacc";



export const getAccUserPending = "account/getUser/pending";
export const getAccUserFulFilled = "account/getUser/fulfilled";
export const getAccUserRejected = "account/getUser/rejected";

export const incBonus = "bonus/increment";

export function getUserAccount(id) {
    return async (dispatch, getState) => {
      try {
          dispatch(getAccountUserPending());
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        dispatch(getAccountUserFulfilled(response.data.price));
      } catch (error) {
        dispatch(getAccountUserRejected(error.message));
      }
    };
  }
  
  export  function getAccountUserFulfilled(value) {
    return { type: getAccUserFulFilled, payload: value };
  }
  
  export function getAccountUserRejected(error) {
    return { type: getAccUserRejected, erro: error };
  }
  export function getAccountUserPending() {
    return { type: getAccUserPending };
  }
  
  //action creators
  
  export function incrementuser() {
    return { type: inc };
  }
  
  export function decrementuser() {
    return { type: dec };
  }
  
  export function incrementaccuser(value) {
    return { type: incacc, payload: value };
  }
  
  export function incBonususer() {
    return { type: incBonus };
  }
   
  export function inituser(value) {
    // const data= await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  
    return { type: init, payload: value };
  }
  