import cn from 'classnames'
import classes from './styles.module.scss'
import { navBarProps } from './types'

export const NavBar: React.FC<navBarProps> = ({ children, isOpen, toggle }) => {
  return (
    <aside
      className={cn(classes.navBar, {
        [classes.open]: isOpen
      })}
    >
      <nav className={cn(classes.navBarWrapper)}>
        <button
          className={cn(classes.navBarCloseButton)}
          onClick={toggle}
          type="button"
        ></button>
        {children}
      </nav>
    </aside>
  )
}
