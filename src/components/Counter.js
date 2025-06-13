import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../features/counter';
function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increase by 5</button>
    </div>
  );
}
 

export default Counter;