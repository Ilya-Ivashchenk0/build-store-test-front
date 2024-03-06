'use client'

import Link from 'next/link'
import { headerProps } from './types'
import cn from 'classnames'
import classes from './styles.module.scss'
import { usePathname } from 'next/navigation'

export const Header: React.FC<headerProps> = ({ links }) => {
  const pathname = usePathname()
  
  return (
    <header className={cn(classes.header)}>
      <div className={cn(classes.headerWrapper)}>
        <div className={cn(classes.headerSignContainer)}>
          <Link
            className={cn(classes.headerLink, classes.signIn, {
              [classes.active]: pathname === '/sign-in'
            })}
            href='/sign-in'
          >
            Sign-In
          </Link>
          <Link
            className={cn(classes.headerLink, classes.signUp, {
              [classes.active]: pathname === '/sign-up'
            })}
            href='/sign-up'
          >
            Sign-Up
          </Link>
        </div>
        <div className={cn(classes.headerLinks)}>
          {links && links.map((link, index) => (
            <Link className={cn(classes.headerLink, {[classes.active]: pathname === link.href})} key={index} href={link.href}>
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}