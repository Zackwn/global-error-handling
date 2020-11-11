import * as Yup from 'yup'

export default {
  data: Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required().min(4)
  })
}