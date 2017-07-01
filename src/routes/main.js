import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Api is working fine !')
})

export default router
