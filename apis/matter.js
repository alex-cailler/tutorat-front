import generic from "./generic"

export default (axios) => ({
  ...generic(axios)("matter"),
})
