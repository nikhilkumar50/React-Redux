import { getAccUserFulFilled,getAccUserRejected,inc,dec,incacc,init,getAccUserPending } from "../action";

export function accountReducer(state = { amount: 0 }, action) {
  switch (action.type) {
    case getAccUserFulFilled:
      return { amount: action.payload, pending: false };
    case getAccUserRejected:
      return { ...state, error: action.error, pending: false };
    case getAccUserPending:
      return { ...state, pending: true };

    case inc:
      return { amount: state.amount + 1 };
    case dec:
      return { amount: state.amount - 1 };
    case incacc:
      return { amount: state.amount + action.payload };
    case init:
      return { amount: action.payload };

    default:
      return state;
  }
}
 