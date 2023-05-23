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
        localStorage.setItem("token", promise.data.token);
        
        promise.proceed = true;
        return promise;
    } catch (err) {
        console.log(err);
        err.response.proceed = false;
        return err.response;
    }
}

export function logout() {
    localStorage.clear();
}

export async function getRedirected(shortUrl) {
    try {
        const promise = await axios.get(`${process.env.REACT_APP_API_URL}/urls/open/${shortUrl}`);
        return promise.data.url;
    } catch (err) {
        console.error(err);
        throw new Error(err);
    }
}

export async function getRanking() {
    try {
        const ranking = await axios.get(`${process.env.REACT_APP_API_URL}/ranking`);
        return ranking.data;
    } catch (err) {
        console.error(err);
    }
}