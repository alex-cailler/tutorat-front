import generic, {getData, err} from "@/apis/generic";

export default axios => ({
  ...generic(axios)('classe'),
  myClasses: (config) => axios.get('/api/classe/me', config).then(getData).catch(err),
})
