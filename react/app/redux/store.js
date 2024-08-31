import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../redux/actions/todoReducer/todo.js';

export const store = configureStore({
  reducer: {
    products: todoReducer, // 'todo' reducer'ını 'products' anahtarıyla kaydediyoruz
  },
});
