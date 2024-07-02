import { configureStore } from '@reduxjs/toolkit'
import { toDoListSlice } from './features/toDoListDone/toDoListSlice'

export const store = configureStore({
  reducer: {
    counter: toDoListSlice.reducer,
  },
})