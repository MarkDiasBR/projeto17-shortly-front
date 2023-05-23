import axios from 'axios';

export async function getUserName() {

    const token = localStorage.getItem("token");
    let config;
    
    if (token) {
        config = { "headers": {"Authorization": `Bearer ${token}`} };
    }


    try {
        // console.log("entrada f")
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/users/name`, config);
        // console.log("saida f")
        const { name } = response.data;
        // console.log('name', name)
        return name;
        
    } catch (error) {
        // console.log("dentro f")
        console.log(error.response.data);
        throw error;
    }
}

export async function getUserData() { 

    const token = localStorage.getItem("token");
    let config;
    
    if (token) {
        config = { "headers": {"Authorization": `Bearer ${token}`} };
    }
    
    try {
        // console.log("amigo estou aqui")
        const promise = await axios.get(`${process.env.REACT_APP_API_URL}/users/data`, config);
        // console.log(promise.data)
        return promise.data
    } catch (err) {
        console.log("down here")
        console.log(err.response.data)
    }
}

export async function shortenUrl(body) {

    const token = localStorage.getItem("token");
    let config;
    
    if (token) {
        config = { "headers": {"Authorization": `Bearer ${token}`} };
    }
    
    try {
        const promise = await axios.post(`${process.env.REACT_APP_API_URL}/urls/shorten`, body, config);
        return promise;
    } catch (err) {
        console.log(err.response.data)
        return err.response;
    }
}

export async function getAllLinks() {

    const token = localStorage.getItem("token");
    let config;
    
    if (token) {
        config = { "headers": {"Authorization": `Bearer ${token}`} };
    }
    
    try {
        const promise = await axios.get(`${process.env.REACT_APP_API_URL}/users/me`, config);
        return promise.data.shortenedUrls;
    } catch (err) {
        console.log(err.response.data)
        return err.response;
    }
}

export async function deleteLink(id) {

    const token = localStorage.getItem("token");
    let config;
    
    if (token) {
        config = { "headers": {"Authorization": `Bearer ${token}`} };
    }
    
    try {
        await axios.delete(`${process.env.REACT_APP_API_URL}/urls/${id}`, config);
        return;
    } catch (err) {
        console.error(err)
    }
}