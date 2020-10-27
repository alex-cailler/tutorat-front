import users from "@/apis/users"
import security from "@/apis/security"
import matter from "@/apis/matter"
import classe from "@/apis/classe"
import participant from "@/apis/participant"

export default (axios) => ({
  users: users(axios),
  security: security(axios),
  matter: matter(axios),
  classe: classe(axios),
  participant: participant(axios),
})
