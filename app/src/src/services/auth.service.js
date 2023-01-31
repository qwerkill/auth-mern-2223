import instance from "./api.service";


const signup = async (credantials) => {
    const response = await instance.post('/auth/signup', credantials);
    return response.data;
    };

const signin = async (credantials) => {
    const response = await instance.post('/auth/signin', credantials);
    return response.data;
    };


    

const AuthService = {
    signup,
    signin
};

export default AuthService;