import Link from 'next/link'
import Image from 'next/image'
import { footerProps } from './types'
import cn from 'classnames'
import classes from './styles.module.scss'

export const Footer: React.FC<footerProps> = ({ text, links }) => {
  return (
    <footer className={cn(classes.footer)}>
      <div className={cn(classes.footerLinksWrapper)}>
        {links &&
          links.map((link, index) => (
            <Link
              className={cn(classes.footerLink)}
              key={index}
              href={link.href}
            >
              <Image src={link.src} alt={link.href} />
            </Link>
          ))}
      </div>
      <p className={cn(classes.footerCopyright)}>{text}</p>
    </footer>
  )
}
