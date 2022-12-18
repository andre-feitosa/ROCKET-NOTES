import { Router } from 'express'
import { createUser, usersOne} from './controller/users'
import { NotesCreate, notesOne, notesOneSpecific, notesDelete} from './controller/note'

const routes = Router()

routes.post("/searchuser", usersOne)
routes.post("/createuser", createUser)

routes.post("/searchnotes", notesOne)
routes.post("/createnotes", NotesCreate)
routes.post("/notesone", notesOneSpecific)
routes.post("/notesdelete", notesDelete)

export default routes