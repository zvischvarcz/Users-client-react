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
        return(data)
    } catch (error) {
        console.log(error)
    }
}

export const loginUser = async (username, email, password) => {
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