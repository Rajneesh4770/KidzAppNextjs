import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../Redux/index'

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div style={{margin:'200px'}}>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Incrementnoxde 
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}