import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    decrement,
    increment,
    reset,
  } from "../actions/sharedActions";


  function Counterexample() {
    //below references the reducer by name for the "selector" .. selector = reducer function name
    const counter = useSelector((state) => state.counter);
    //below wires up dispatch for the store
    const dispatch = useDispatch();
  
    return (
      <div>
        <h1>
           Hello World <br /> A little Redux Project. YaaY!
        </h1>
        <h3>Counter</h3>
        <h3>{counter}</h3>
        <button onClick={() => dispatch(increment())}>Increase</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(decrement())}>Decrease</button>
    
      </div>
    );
  }
  
  export default Counterexample;