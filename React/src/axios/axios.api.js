import axios from "./axios.config";

const login = (userName, password) => {
    const URL_API = "/user/login";
    let data = {
        userName: userName,
        password: password,
    };
    return axios.post(URL_API, data);
}


export {
    login,
}