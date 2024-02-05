import axios from "axios";

//08710-410/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;