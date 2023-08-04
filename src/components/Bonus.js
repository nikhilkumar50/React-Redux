import { useDispatch } from "react-redux";
import { incBonususer } from "../action";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Bonus() {
  const bonus=useSelector(state=>state.bonus.price);
  const dispatch=useDispatch();
 
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Bonus Component</b>
        </h4>
        <h3>Total Point : ${bonus}</h3>

        <button onClick={()=>dispatch(incBonususer())}>Increment +</button>
      </div>
    </div>
  );
}

export default Bonus;
