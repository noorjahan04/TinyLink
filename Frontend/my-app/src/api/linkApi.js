import api from './axiosInstance';

export const createLink = (payload) => api.post('/api/links', payload).then(r => r.data);
export const listLinks = () => api.get('/api/links').then(r => r.data);
export const getLink = (code) => api.get(`/api/links/${code}`).then(r => r.data);
export const deleteLink = (code) => api.delete(`/api/links/${code}`).then(r => r.data);
