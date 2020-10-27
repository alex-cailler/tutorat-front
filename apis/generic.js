import { notification } from '@/store'

console.log()

export const getData = response => response.data.data;
export const err = err => notification.mutations.PUSH_NOTIFICATION(notification.state(), {
  type: 'danger',
  message: 'Une erreur est survenue' + err
})

const api = axios => resource => ({
  list: (config) => axios.get(`/api/${resource}`, config).then(getData).catch(err),
  get: (id, config) => axios.get(`/api/${resource}/${id}`, config).then(getData).catch(err),
  create: (data, config) => axios.post(`/api/${resource}`, data, config).then(getData).catch(err),
  update: (id, data, config) => axios.patch(`/api/${resource}/${id}`, data, config).then(getData).catch(err),
  remove: (id, config) => axios.delete(`/api/${resource}/${id}`, config).catch(err),
});

export default api;
