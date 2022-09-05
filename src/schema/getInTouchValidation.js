import * as Yup from 'yup';

const getInTouchValidation = Yup.object({
  firstName: Yup.string()
    .required('**Required'),

  lastName: Yup.string()
    .required('**Required'),

  email: Yup.string()
    .email('Invalid email format')
    .required('**Required'),

  subject: Yup.string()
    .required('**Required'),

  message: Yup.string()
    .required('**Required')

})

export default getInTouchValidation;