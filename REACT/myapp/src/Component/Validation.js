import * as yup from 'yup'

const ValidationForm = yup.object({
    email: yup.string().email().required("please enter a valid email"),
    password: yup.string().required("please enter valid password").min(8)
})

export default ValidationForm