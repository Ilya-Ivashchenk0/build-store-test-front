import cn from 'classnames'
import classes from './styles.module.scss'
import { userInfoProps } from "./types"

export const UserInfo: React.FC<userInfoProps> = ({ email, logout }) => {
  return (
    <>
      <p className={cn(classes.userInfoEmail)}>{email}</p>
      <button
        className={cn(classes.userInfoButton)}
        onClick={logout}
        type="button"
      >
        Logout
      </button>
    </>
  )
}