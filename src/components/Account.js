import { useState } from 'react';
import { incrementuser,decrementuser,incrementaccuser, getUserAccount } from '../action';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
  
function Account() {
  
  const [value, setValue] = useState(0);
  const amount=useSelector(state=>state.account.amount);
  const dispatch=useDispatch();

  

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Account Component</b>
        </h4>
        <h3>Amount:${amount}</h3>
        <button onClick={()=>dispatch(incrementuser())}>Increment +</button>
        <button onClick={()=>dispatch(decrementuser())}>Decrement -</button>
        <input type="text" onChange={(e) => setValue(+e.target.value)}></input>
        <button onClick={() =>dispatch( incrementaccuser(value))}>
          Increment By {value} +
        </button>
        <button onClick={() =>dispatch( getUserAccount(1))}>Init User</button>
      </div>
    </div>
  );
}

export default Account;
