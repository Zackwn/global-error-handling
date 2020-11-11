import { ErrorRequestHandler } from 'express'
import { ValidationError } from 'yup'

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  if (error instanceof ValidationError) {
    return res.status(400).send() // bad request
  }
  return res.status(500).send() // internal server error
}

export default errorHandler