import axios from 'axios';
// import dotenv from 'dotenv';
// dotenv.config();

// import { BASE_URL } from '../constants/urls.js';

// const user = JSON.parse(localStorage.getItem("user"));
// let config;

// if (user) {
//     config = { "headers": {"Authorization": `Bearer ${user.token}`} };
// }

export async function signUp(form) {
    try {
        const promise = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, form);
        console.log(promise.data);
        promise.proceed = true;
        return promise;
    } catch (err) {
        console.log(err.response.data)
        err.response.proceed = false;
        return err.response;
    }
}

export async function signIn(form) {
    try {
        const promise = await axios.post(`${process.env.REACT_APP_API_URL}/signin`, form);
        console.log(promise.data);
        promise.proceed = true;
        return promise;
    } catch (err) {
        console.log(err.response.data);
        err.response.proceed = false;
        return err.response;
    }
}