export const registerFormFields = {
  nickname: {
    value: {},
    label: 'Nickname',
    type: 'text',
    name: 'nickname',
    id: 'nickname',
    required: true,
    placeholder: '',
    // initialValue: '',
  },
  email: {
    value: {},
    label: 'E-mail',
    type: 'email',
    name: 'email',
    id: 'email',
    required: true,
    placeholder: 'hello@fran.me',
  },
  passsword: {
    value: {},
    label: 'Password',
    type: 'password',
    name: 'password',
    id: 'password',
    required: true,
    placeholder: 'Enter Password',
  },
  passwordConfirm: {
    value: {},
    label: 'Confirm password',
    type: 'password',
    name: 'passwordConfirm',
    id: 'passwordConfirm',
    required: true,
    placeholder: 'Confirm Password',
  },
  legal: {
    value: {},
    label: 'I have read and agree to the terms',
    type: 'checkbox',
    name: 'legal',
    id: 'legal',
    required: true,
  }
}

export const loginFormFields = {
  email: {
    value: {},
    label: 'E-mail',
    type: 'email',
    name: 'email',
    id: 'email',
    required: true,
    placeholder: 'hello@fran.me',
  },
  passsword: {
    value: {},
    label: 'Password',
    type: 'password',
    name: 'password',
    id: 'password',
    required: true,
    placeholder: 'Enter Password',
  }
}