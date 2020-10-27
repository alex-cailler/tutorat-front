import generic, { err, getData } from "./generic"

export default axios => ({
  ...generic(axios)('participant-classe'),
  remove: (class_id, user_id, config) => axios.delete(`/api/participant-classe/${class_id}/${user_id}`, config).catch(err),
  myClasses: (config) => axios.get('/api/participant-classe/me', config).then(getData).catch(err),
})
