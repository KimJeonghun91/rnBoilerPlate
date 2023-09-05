import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as IF from '../../utils/InterFace';

const initialState: IF.ICounterState = { value: 0 };

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export type CounterSliceType = ReturnType<typeof counterSlice.reducer>;
