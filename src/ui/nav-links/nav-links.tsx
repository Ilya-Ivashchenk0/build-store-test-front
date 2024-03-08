import cn from 'classnames'
import classes from './styles.module.scss'
import Link from 'next/link'
import { navLinksProps } from './types'

export const NavLinks: React.FC<navLinksProps> = ({
  pathname,
  links,
  toggle
}) => {
  return (
    <>
      {links &&
        links.map((link, index) => (
          <Link
            className={cn(classes.navLink, {
              [classes.active]: pathname === link.href
            })}
            key={index}
            href={link.href}
            onClick={toggle}
          >
            {link.text}
          </Link>
        ))}
    </>
  )
}
