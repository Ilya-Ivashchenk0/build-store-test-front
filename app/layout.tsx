import '@/assets/styles/global.css'
import { Font } from '@/assets/fonts/fonts'
import { Header } from '@/ui/header'
import { Footer } from '@/ui/footer'
import facebook from '@/assets/images/icons/fb-icon.svg'
import instagram from '@/assets/images/icons/instagram-icon.svg'
import twitter from '@/assets/images/icons/twetter-icon.svg'
import linkedin from '@/assets/images/icons/linkedin-icon.svg'

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const headerLinks = [
    {text: 'Home', href: '/'},
    {text: 'Works', href: '/works'},
    {text: 'Blog', href: '/blog'},
    {text: 'Contact', href: '/contact'}
  ]

  const footerLinks = [
    {src: facebook, href: 'https://www.facebook.com'},
    {src: instagram, href: 'https://www.instagram.com'},
    {src: twitter, href: 'https://twitter.com'},
    {src: linkedin, href: 'https://linkedin.com'}
  ]

  return (
    <html lang="en" className={`${Font.variable}`}>
      <body>
        <Header links={headerLinks} />
        {children}
        <Footer text='Copyright ©2020 All rights reserved' links={footerLinks} />
      </body>
    </html>
  )
}

export default RootLayout
