import { Router } from 'express'
import { handleLogin, handleLogout, handleRegister } from '../controllers/user.controllers'
import { createNotes, createOneNote, deleteNotes, deleteOneNote, getNotes, getOneNote, updateNotes, updateOneNote } from '../controllers/user.notes.controllers'
import authUser, { returnLoggedUserDetails } from '../middlewares/authUser'
const router = Router()

// if user wants to login , register and logout so here are the logics
router.route('/api/v1/user').get(returnLoggedUserDetails).post(handleRegister)
router.route('/api/v1/user/login').post(handleLogin)
router.route('/api/v1/user/logout').get(handleLogout)


// auth middleware for authing the genuine user
router.use(authUser)

// routes for note, if user wants to access theme
router.route('/api/v1/user/notes').post(createNotes).get(getNotes).patch(updateNotes).delete(deleteNotes)
router.route('/api/v1/user/note').post(createOneNote)        //just for creating one note
router.route('/api/v1/user/notes/:note_id').get(getOneNote).delete(deleteOneNote).patch(updateOneNote)

export default router