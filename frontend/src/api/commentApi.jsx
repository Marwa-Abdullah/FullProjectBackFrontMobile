import axios from "axios";
const API_URL = "http://localhost:3000/comments";

export const getComments = (postId) => axios.get(`${API_URL}/${postId}`);
export const addComment = (comment) => axios.post(`${API_URL}/add`, comment);
