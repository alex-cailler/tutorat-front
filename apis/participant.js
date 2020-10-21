import generic, {err} from "./generic"

export default axios => ({
  ...generic(axios)('participant-classe'),
  remove: (class_id, user_id, config) => axios.delete(`/api/participant-classe/${user_id}/${class_id}`, config).catch(err),
})
