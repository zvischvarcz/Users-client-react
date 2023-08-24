import { writeCookie } from "../common";

export const registerUser = async (username, email, password) => {
    try {
        const response = await fetch("http://localhost:5001/users/register", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username": username,
                "email": email,
                "password": password
            })
        });
        const data = await response.json();
        if (data.errorMessage){
            return data.errorMessage
        }
        return(data)
    } catch (error) {
        console.log(error)
    }
}

export const loginUser = async (username, email, password, newUser) => {
    try {
        const response = await fetch("http://localhost:5001/users/login", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username": username,
                "email": email,
                "password": password
            })
        });
        const data = await response.json();
        if (data.errorMessage){
            return data.errorMessage
        }
        newUser(data.user.username)
        localStorage.setItem("username", data.user.username )
        writeCookie("jwt-token", data.user.token, 7)
        return(data)
    } catch (error) {
        console.log(error)
    }
}

export const updateUser = async (username, key, value) => {
    try {
        const response = await fetch("http://localhost:5001/users/update", {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username": username,
                "key": key,
                "value": value
            })
        });
        const data = await response.json();
        return(data)
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = async (username) => {
    try {
        const response = await fetch("http://localhost:5001/users/delete", {
            method: 'DELETE',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username": username
            })
        });
        const data = await response.json();
        return(data)
    } catch (error) {
        console.log(error)
    }
}

export const authCheck = async (token) => {
    try {
        const response = await fetch("http://localhost:5001/users/authCheck", {
            method: 'GET',
            headers: {"Content-Type": "application/json", "authorization": token}
        });
        const data = await response.json();
        return data.user.username
    } catch (error) {
        console.log(error)
    }
}

export const addBook = async (title, author, user) => {
    try {
        const response = await fetch("http://localhost:5001/books/addBook", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "title": title,
                "author": author,
                "username": user
            })
        });
        const data = await response.json();
        if (data.errorMessage){
            return data.errorMessage
        }
        return(data)
    } catch (error) {
        console.log(error)
    }
}