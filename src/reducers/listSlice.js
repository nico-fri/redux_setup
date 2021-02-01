import { createSlice } from '@reduxjs/toolkit'

export const listSlice = createSlice({
  name: 'list',
  initialState: {
    list: ['milk'],
  },
  reducers: {
    addItem: (state, action) => {
      state.list.push(action.payload)
    },
  },
})

export const { addItem } = listSlice.actions

export const selectList = (state) => state.list

export default listSlice.reducer
