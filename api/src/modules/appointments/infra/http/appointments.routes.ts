import { Request, Response, Router } from 'express'
import { parseISO } from 'date-fns'

import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository'
import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService'
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'

const appointmentsRouter = Router()

appointmentsRouter.use(ensureAuthenticated)

// appointmentsRouter.get('/', async (request: Request, response: Response) => {
//   const appointments = await appointmentsRepository.find()

//   return response.json(appointments)
// })

appointmentsRouter.post('/', async (request: Request, response: Response) => {
  const { providerId, date } = request.body

  const appointmentsRepository = new AppointmentsRepository()

  const parsedDate = parseISO(date)

  const createAppointment = new CreateAppointmentService(appointmentsRepository)

  const appointment = await createAppointment.execute({
    providerId,
    date: parsedDate
  })

  return response.json(appointment)
})

export default appointmentsRouter
