export default axios => ({
  register: (data, config) => axios.post(`/api/register`, data, config),
  login: (data, config) => axios.post(`/api/register`, data, config),
  updatePassword: (data, config) => axios.post(`/api/password/update`, data, config)
})
