export const MessageAuth = (error) => {
  const Errors = {
    'auth/wrong-password': 'Contraseña Incorrecta',
    'auth/user-not-found' : 'Correo no existe'
  }

  return Errors[error]
}
