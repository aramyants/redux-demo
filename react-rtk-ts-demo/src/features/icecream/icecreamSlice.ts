import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ordered as cakeOrdered } from '../cake/cakeSlice';

type InitialState = {
  numOfIceCream: number;
};

const initialState: InitialState = {
  numOfIceCream: 20
};

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCream--;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfIceCream += action.payload;
    }
  },
  // extraReducers: {
  //   ['cake/ordered']: (state) => {
  //     state.numOfIceCream--;
  //   }
  // },                              deprecated in favor of builder notation
  extraReducers: (builder) => {
    builder
      .addCase(cakeOrdered, (state) => {
        state.numOfIceCream--;
      })
      // .addCase('cake/restocked', (state, action) => {
      //   state.numOfIceCream += action.payload;
      // })
    },
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;

