import cn from 'classnames'
import classes from './styles.module.scss'
import Link from 'next/link'
import { authLinksProps } from './types'

export const AuthLinks: React.FC<authLinksProps> = ({ pathname, toggle }) => {
  return (
    <>
      <Link
        className={cn(classes.authLink, classes.signIn, {
          [classes.active]: pathname === '/sign-in'
        })}
        href="/sign-in"
        onClick={toggle}
      >
        Sign-In
      </Link>
      <Link
        className={cn(classes.authLink, classes.signUp, {
          [classes.active]: pathname === '/sign-up'
        })}
        href="/sign-up"
        onClick={toggle}
      >
        Sign-Up
      </Link>
    </>
  )
}
