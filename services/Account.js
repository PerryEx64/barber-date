import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './CloudConection'

export const onSignIn = (user, password, setLoading) => {
  signInWithEmailAndPassword(auth, user, password)
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      setLoading(false)
    })
}
