import api from './api';

export const authService = {
    login: (email, password) => api.post('/login', { email, password }),
};

// Also export individual function for backward compatibility
export const login = authService.login;
