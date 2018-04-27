import { error } from 'console'

const demo = async (req, res) => {
  try {
    const { test } = req.query

    return res.status(200).json({ test })
  } catch (e) {
    error(e)
    return res.send(500).send('Error en demo controller')
  }
}

export { demo }
