const { cakeActions } = require('../cake/cakeSlice');

const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
  numOfIceCream: 20
};

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCream--;
    },
    restocked: (state, action) => {
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
      .addCase(cakeActions.ordered, (state) => {
        state.numOfIceCream--;
      })
      // .addCase('cake/restocked', (state, action) => {
      //   state.numOfIceCream += action.payload;
      // })
    },
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;

