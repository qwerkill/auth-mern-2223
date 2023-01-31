import jwtDecode from "jwt-decode";

const setTokenInlocalStorage = (accessToken) => {
    localStorage.setItem('accessToken', accessToken);
}

const getTokenFromLocalStorage = () => {
    const accessToken = localStorage.getItem('accessToken');
    return accessToken;
}

const isValidToken = (accessToken) =>{
    const decodeToken = jwtDecode(accessToken);
    const currentTime = Date.now() / 1000;
    return decodeToken.exp > currentTime ;
    }



const getUserFromLocalToken = () => {
    const accessToken = getTokenFromLocalStorage();
    if (!accessToken) return null;
    const isValid = isValidToken(accessToken);
    if (!isValid) return null;
    return jwtDecode(accessToken);    
}





const TokenService = {
    setTokenInlocalStorage, 
    getUserFromLocalToken,
    getTokenFromLocalStorage,
}

export default TokenService;