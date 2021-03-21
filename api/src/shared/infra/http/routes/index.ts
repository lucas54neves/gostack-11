import { Router } from 'express'
import appointmentsRouter from '@modules/appointments/infra/http/appointments.routes'
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes'
import usersRouter from '@modules/users/infra/http/routes/users.routes'

const routes = Router()

routes.use('/appointments', appointmentsRouter)
routes.use('/sessions', sessionsRouter)
routes.use('/users', usersRouter)

export default routes
