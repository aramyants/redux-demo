// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './cakeSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

export const CakeView = () => {
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(restocked(5))}>Restock Cake</button>
    </div>
  )
}
