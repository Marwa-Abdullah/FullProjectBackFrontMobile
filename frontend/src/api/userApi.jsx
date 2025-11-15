import axios from "axios";
const API_URL = "http://localhost:3000/users";

export const getUsers = () => axios.get(API_URL);


export const addUser = (user) => axios.post(`${API_URL}/add`, user);
