const getData = response => response.data.data;

const api = axios => resource => ({
  list: (config) => axios.get(`/api/${resource}`, config).then(getData),
  get: (id, config) => axios.get(`/api/${resource}/${id}`, config).then(getData),
  create: (data, config) => axios.post(`/api/${resource}`, data, config).then(getData),
  update: (id, data, config) => axios.patch(`/api/${resource}/${id}`, data, config).then(getData),
  remove: (id, config) => axios.delete(`/api/${resource}/${id}`, config),
});

export default api;
