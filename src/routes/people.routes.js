import { Router } from 'express'
import { getPeople, savePerson } from '../controllers/people.controllers.js'

const router = Router()

router.get('/people', getPeople)
router.post('/people', savePerson)



export default router