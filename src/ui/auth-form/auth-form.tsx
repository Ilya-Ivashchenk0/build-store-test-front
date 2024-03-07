import { authFormProps } from './types'
import cn from 'classnames'
import classes from './styles.module.scss'
import { Input } from '../input'

export const AuthForm: React.FC<authFormProps> = ({
  email,
  changeEmail,
  emailError,
  password,
  changePassword,
  passwordError,
  formName,
  buttonText,
  submit
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    submit(e)
  }

  return (
    <form className={cn(classes.authForm)} onSubmit={handleSubmit}>
      <h1 className={cn(classes.authFormHeading)}>{formName}</h1>
      <Input
        value={email}
        changeValue={changeEmail}
        errorValue={emailError}
        name="email"
      />
      <Input
        value={password}
        changeValue={changePassword}
        errorValue={passwordError}
        name="password"
      />
      <button
        className={cn(classes.authFormButton, {
          [classes.active]:
            !emailError && !passwordError && email !== '' && password !== ''
        })}
        type="submit"
        disabled={
          !!emailError || !!passwordError || email === '' || password === ''
        }
      >
        {buttonText}
      </button>
    </form>
  )
}
