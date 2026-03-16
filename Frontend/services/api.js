const API_URL = 'http://localhost:5000/api';

const apiRequest = async (endpoint, method = 'GET', body = null) => {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    const response = await fetch(`${API_URL}${endpoint}`, options);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'An error occurred during the request');
    }

    return data;
};

const api = {
    get: (endpoint) => apiRequest(endpoint, 'GET'),
    post: (endpoint, data) => apiRequest(endpoint, 'POST', data),
    put: (endpoint, data) => apiRequest(endpoint, 'PUT', data),
    delete: (endpoint) => apiRequest(endpoint, 'DELETE'),
};

export default api;
