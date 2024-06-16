// auth.js

const getToken = () => {
    return localStorage.getItem('token');
}

const setToken = (token) => {
    localStorage.setItem('token', token);
}

const removeToken = () => {
    localStorage.removeItem('token');
}

const isAuthenticated = () => {
    const token = getToken();
    // Verifica se o token existe e não está expirado
    return token && !isTokenExpired(token);
}

const isTokenExpired = (token) => {
    const decodedToken = jwt.decode(token);
    return decodedToken.exp < Date.now() / 1000;
}

const getAuthHeader = () => {
    const token = getToken();
    if (token) {
        return { Authorization: `Bearer ${token}` };
    } else {
        return {};
    }
}

export { getToken, setToken, removeToken, isAuthenticated, getAuthHeader };