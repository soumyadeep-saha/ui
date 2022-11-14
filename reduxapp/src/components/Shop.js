import React from "react";
import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actionCreators} from '../state/index'
import {useSelector} from 'react-redux'

const Shop = () => {
    const dispatch = useDispatch();
    const amount = useSelector(state => state.amount)
    const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch)
  return (
    <div>
      <h2>Deposit/Withdraw Money</h2>
      <button className="btn btn-primary mx-2" onClick={() => withdrawMoney(10000000)}>-</button>
        Update Balance {amount}
      <button className="btn btn-primary mx-2" onClick={() => depositMoney(10000001)}>+</button>
    </div>
  );
};

export default Shop;
