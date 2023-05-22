import axios from 'axios';

const token = localStorage.getItem("token");
let config;

if (token) {
    config = { "headers": {"Authorization": `Bearer ${token}`} };
}

export async function getUserName() {
    try {
        const promise = await axios.get(`${process.env.REACT_APP_API_URL}/users/name`, config);

        const { name } = promise.data;

        // console.log(promise.data);
        // promise.proceed = true;
        return name;
    } catch (err) {
        console.log(err.response.data)
        // err.response.proceed = false;
        // return err.response;
    }
}

export async function getUserData(config) {
    try {
        const promise = await axios.get(`${process.env.REACT_APP_API_URL}/users/data`, config);
        // console.log(promise.data)
        return promise.data
    } catch (err) {
        console.log("down here")
        console.log(err.response.data)
    }
}

export async function shortenUrl(body) {
    try {
        const promise = await axios.post(`${process.env.REACT_APP_API_URL}/urls/shorten`, body, config);
        return promise;
    } catch (err) {
        console.log(err.response.data)
        return err.response;
    }
}

export async function getAllLinks() {
    try {
        const promise = await axios.get(`${process.env.REACT_APP_API_URL}/users/me`, config);
        return promise.data.shortenedUrls;
    } catch (err) {
        console.log(err.response.data)
        return err.response;
    }
}