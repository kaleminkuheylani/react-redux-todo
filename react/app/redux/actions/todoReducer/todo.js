import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

const todoReducer = createSlice({
    name: "products",
    initialState,
    reducers: {
        add: (state, { payload }) => {
            state.products.push(payload);
        },
        remove: (state, { payload }) => {
            state.products = state.products.filter(product => product.id !== payload);
        },
    },
});

export const { add, remove } = todoReducer.actions;

export default todoReducer.reducer;
