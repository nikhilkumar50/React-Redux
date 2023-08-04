import { incBonus,incacc } from "../action";


export function bonusReducer(state = { price: 0 }, action) {
  switch (action.type) {
    case incBonus:
      return { price: state.price + 1 };
    
    default:
      return state;
  }
}
 