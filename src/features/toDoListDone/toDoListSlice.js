import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  toDoList: [],
  DoneList: []
}

export const toDoListSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setToDo: (state,action) => {
      state.toDoList.push(action.payload)
    },
  },
})

export const { setToDo } = toDoListSlice.actions

export default toDoListSlice.reducer