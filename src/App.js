import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, million } from './actions';


function App() {
    const counter = useSelector(state => state.counter);
<<<<<<< HEAD
    const isLogged = useSelector(state => state.isLogged);
=======
    const isLogged = useSelector(state => state.isLogged)
>>>>>>> 6a69516f0685fd3f5077920d6c77e4d0ed7536c6
    const dispatch = useDispatch();
    
    const randomNum = (function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      });
      

    return ( 
    <div className = "App">
        <h1>This app was made using <i>React with Redux</i> states to <i>increment</i> action of random number from 0 to 5 on "+" button
             and <i>decrement</i> -1 on "-" button</h1>
        <h1> Counter {counter}</h1> 
        <button className= "greenButton" onClick={() => dispatch(increment(randomNum(5)))}>+</button>
        <button className= "redButton" onClick={() => dispatch(decrement())}>-</button>
        <button className= "redButton" onClick={() => dispatch(reset())}>Reset to 0</button>
        <button className= "greenButton" onClick={() => dispatch(million())}>set to 1 million</button>
        {isLogged ? <h3>Secret information only for logged in users</h3> : ''}
    </div>
    );
}
export default App;