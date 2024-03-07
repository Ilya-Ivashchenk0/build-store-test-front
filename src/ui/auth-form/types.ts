import { SetStateAction } from 'react'

export interface authFormProps {
  email: string
  changeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void
  emailError: string | undefined
  password: string
  changePassword: (e: React.ChangeEvent<HTMLInputElement>) => void
  passwordError: string | undefined
  formName: string
  buttonText: string
  submit: (e: React.FormEvent<HTMLFormElement>) => void
}
