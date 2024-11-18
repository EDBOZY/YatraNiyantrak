import axios from "axios"

const url="http://localhost:8000/api/";

export const loginUser=async(email,password)=>{
        const response = await axios.post(
            url + 'users/login',
            { email, password },
            { withCredentials: true }
        );
        return response.data; // Return the data from the response
    
}

export const logoutUser = async () => {
    return await axios.get(url + "users/logout", {
      withCredentials: true,
    });
};

export const checkUser = async () => {
    return await axios.get(url + "users/loggedin", {
      withCredentials: true,
    });
};

export const register = async (name, email, password, phone) => {
    await axios.post(url + `users/register`, {
      name,
      email,
      password,
      phone,
      is_admin: "false",
    });
};



