import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { ordered, restocked } from './icecreamSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

export const IcecreamView = () => {
  const numOfIcecreams = useAppSelector((state) => state.icecream.numOfIceCream);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(1);

  return (
    <div>
      <h2>Number of Icecream - {numOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order Icecream</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>Restock Icecream</button>
    </div>
  );
};
