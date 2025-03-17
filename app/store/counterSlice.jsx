import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0 },
    reducers: {
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        decrease(state, action) {
            state.counter = state.counter - action.payload;
        },
        set(state, action) {
            state.counter = action.payload;
        },
        clear(state) {
            state.counter = 0;
        }
    }
})

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;