import { Router } from 'express'

const router = new Router()

router.get('/', (req, res) => {
  res.send('Api is working fine !')
})

export default router
