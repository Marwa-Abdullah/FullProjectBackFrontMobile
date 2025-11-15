import axios from "axios";
const API_URL = "http://localhost:3000/posts";

export const getPosts = () => axios.get(API_URL);


export const addPost = (post) => axios.post(`${API_URL}/add`, post);
