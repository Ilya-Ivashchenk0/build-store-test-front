'use client'

import { useState } from 'react'
import classes from './styles.module.scss'
import cn from 'classnames'
import { AuthForm } from '@/ui/auth-form/auth-form'
import { signSchema } from '@/utils/validation'
import { register } from '@/api/authApi'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

const Signup: React.FC = () => {
  const router = useRouter()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [emailError, setEmailError] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    register(email, password)
      .then(message => {
        console.log(message)
        toast.success(message.message)
        router.push('/sign-in')
      })
      .catch(err => toast.error(err))
  }

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value
    setEmail(newEmail)

    const result = signSchema.safeParse({ email: newEmail, password })
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors
      setEmailError(fieldErrors.email?.toString() ?? '')
    } else {
      setEmailError('')
    }
  }

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value
    setPassword(newPassword)

    const result = signSchema.safeParse({ email, password: newPassword })
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors
      setPasswordError(fieldErrors.password?.toString() ?? '')
    } else {
      setPasswordError('')
    }
  }

  return (
    <main className={cn(classes.signup)}>
      <AuthForm
        email={email}
        changeEmail={handleChangeEmail}
        emailError={emailError}
        password={password}
        changePassword={handleChangePassword}
        passwordError={passwordError}
        formName="Sign-Un"
        buttonText="Continue"
        submit={handleSubmit}
      />
    </main>
  )
}

export default Signup
