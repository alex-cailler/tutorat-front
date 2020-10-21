import generic, {err} from "./generic"

export default axios => ({
  ...generic(axios)('classe'),
})
