import express from "express"
import "express-async-errors"

import validation from './validation'
import errorHandler from './errorHandler'

const app = express()

app.use(express.json())

app.get("/", async (req, res) => {
  const { data } = req.body

  await validation.data.validate(data)

  return res.json({ data })
})

app.use(errorHandler)

app.listen(3333)