import axios from "axios";

const api = axios.create({
    //baseURL: "https://cors-anywhere.herokuapp.com/http://localhost:8081/",
    baseURL: "http://localhost:8080/",
});

export default api;