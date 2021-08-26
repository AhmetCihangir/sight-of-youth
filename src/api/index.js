import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

export const fetchPosts = () => axios.get(`${url}/allblogs`);

export const createPost = (newPost) => axios.post(`${url}/allblogs`, newPost);

export const likePost = (likeInf) => axios.post(`${url}/allblogs/${likeInf.id}/likePost`,likeInf);

export const updatePost = (id, updatedPost) => axios.post(`${url}/allBlogs/${id}/updateBlog`, updatedPost);


export const login = (token) => axios.get(`${url}/login`,{
    headers : {
        "Content-type": "application/json",
        Authorization : `Bearer ${token}`
    }
});

export const signUp = (user) => axios.post(`${url}/addUser`,user);

export const addCommentPost = (id,comment) => axios.post(`${url}/allblogs/${id}/addComment`,comment);
