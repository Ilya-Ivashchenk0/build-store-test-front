import Link from 'next/link'
import { headerProps } from './types'
import cn from 'classnames'
import classes from './styles.module.scss'

export const Header: React.FC<headerProps> = ({ links }) => {
  return (
    <header className={cn(classes.header)}>
      <div className={cn(classes.headerWrapper)}>
        {links && links.map((link, index) => (
          <Link className={cn(classes.headerLink)} key={index} href={link.href}>
            {link.text}
          </Link>
        ))}
      </div>
    </header>
  )
}