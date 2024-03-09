'use client'

import { headerProps } from './types'
import cn from 'classnames'
import classes from './styles.module.scss'
import { usePathname } from 'next/navigation'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/redux/store'
import { logOut } from '@/redux/features/auth-slice'
import { NavBar } from '@/ui/nav-bar'
import { useState } from 'react'
import { UserInfo } from '../user-info'
import { AuthLinks } from '../auth-links'
import { NavLinks } from '../nav-links'

export const Header: React.FC<headerProps> = ({ links }) => {
  const pathname = usePathname()
  const dispatch = useDispatch()

  const [isOpenNavBar, setOpenNavBar] = useState<boolean>(false)

  const userEmail = useSelector((state: RootState) => state.auth.email)

  const logout = (): void => {
    dispatch(logOut())
  }

  const toggleNavBar = (): void => {
    setOpenNavBar(!isOpenNavBar)
  }

  return (
    <header className={cn(classes.header)}>
      <div className={cn(classes.headerWrapper)}>
        <nav className={cn(classes.headerNavigate)}>
          <div className={cn(classes.headerSignContainer)}>
            {userEmail ? (
              <UserInfo email={userEmail} logout={logout} />
            ) : (
              <AuthLinks pathname={pathname} />
            )}
          </div>
          <div className={cn(classes.headerLinks)}>
            <NavLinks pathname={pathname} links={links} />
          </div>
        </nav>
        <button
          type="button"
          name="burger"
          onClick={toggleNavBar}
          className={cn(classes.headerBurger)}
        ></button>
      </div>
      <NavBar isOpen={isOpenNavBar} toggle={toggleNavBar}>
        <>
          {userEmail ? (
            <UserInfo email={userEmail} logout={logout} />
          ) : (
            <AuthLinks pathname={pathname} toggle={toggleNavBar} />
          )}
          <NavLinks pathname={pathname} links={links} toggle={toggleNavBar} />
        </>
      </NavBar>
    </header>
  )
}
