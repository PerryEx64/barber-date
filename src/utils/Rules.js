export const RulePassword = {
  required: { value: true, message: 'campo obligatorio' },
  pattern: {
    value:
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8}$/,
    message:
      'La cadena debe contener al menos una letra mayúscula, letras minúsculas, números y caracteres especiales'
  },
  maxLength: {
    value: 8
  }
}
