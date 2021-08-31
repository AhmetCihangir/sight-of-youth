import * as api from '../api/index.js';
import jwt from "jsonwebtoken"

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    console.log(data)

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addComment = (comment,postId) => async (dispatch) => {
  try {
    const { data } = await api.addCommentPost(postId,comment);

    dispatch({ type: "ADD_COMMENT", payload: { id : postId, comment : data } });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id,profileId,lnumber) => async (dispatch) => {
  try {
    const { data } = await api.likePost({id, profileId, likeType : lnumber});

    dispatch({ type: "LIKE", payload : { ...data,lnumber }});
  } catch (error) {
    console.log(error.message);
  }
};

export const login = (authInformations) => async (dispatch) => {
  try {
    const token = jwt.sign(authInformations,process.env.REACT_APP_AUTH_JWT_TOKEN)

    const { data } = await api.login(token);

    dispatch({ type: "LOGGED_IN", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const signUp = (authInformations) => async (dispatch) => {
  try {
    const encodedPassword = jwt.sign(authInformations.password,process.env.REACT_APP_AUTH_JWT_TOKEN)

    const { data } = await api.signUp({...authInformations,password : encodedPassword});

    dispatch({ type: "SIGNUP", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: "LOGGED_OUT" });
  } catch (error) {
    console.log(error.message);
  }
};

