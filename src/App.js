import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';
function App() {

  //state is going to be an object which has callback function as a property
  //so ultimately we are return account reducer's initial value which is 0

  //changed the state to state.account so it is not an object anymore it will return a 
  //number which is the initial value of the account reducer
  const state = useSelector(state => state.account);
  const dispatch = useDispatch();
  const { depositeMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);
  return (
    <div className="App">
      <h1>{ state }</h1>
      <button onClick={() => depositeMoney(1000)}>Deposite</button>
      <button onClick={() => withdrawMoney(599)}>Withdraw</button>
    </div>
  );
}

export default App;
