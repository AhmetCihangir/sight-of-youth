import { createSlice,configureStore } from "@reduxjs/toolkit"


const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs : [],
    weeklNews : {}
  } ,
  reducers : {
    setBlogs(state,actions){
      state.blogs = actions.payload
    },
    getBlogs(state){
      return 1
    }
  },
});


const store = configureStore({
  reducer : {
    blog : blogSlice.reducer
  }
})

export const blogActions = blogSlice.actions

export default store


