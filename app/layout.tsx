import '@/assets/styles/normalize.css'
import '@/assets/styles/global.css'
import { Font } from '@/assets/fonts/fonts'
import 'react-toastify/dist/ReactToastify.css'
import { Header } from '@/ui/header'
import { Footer } from '@/ui/footer'
import facebook from '@/assets/images/icons/fb-icon.svg'
import instagram from '@/assets/images/icons/instagram-icon.svg'
import twitter from '@/assets/images/icons/twetter-icon.svg'
import linkedin from '@/assets/images/icons/linkedin-icon.svg'
import { ReduxProvider } from '@/redux/provider'
import { ToastContainer } from 'react-toastify'

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const headerLinks = [
    { text: 'Home', href: '/' },
    { text: 'Works', href: '' },
    { text: 'Blog', href: '' },
    { text: 'Contact', href: '' }
  ]

  const footerLinks = [
    { src: facebook, href: 'https://www.facebook.com' },
    { src: instagram, href: 'https://www.instagram.com' },
    { src: twitter, href: 'https://twitter.com' },
    { src: linkedin, href: 'https://linkedin.com' }
  ]

  return (
    <html lang="en" className={`${Font.variable}`}>
      <body>
        <ReduxProvider>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={true}
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover
          />
          <Header links={headerLinks} />
          {children}
          <Footer
            text="Copyright ©2020 All rights reserved"
            links={footerLinks}
          />
        </ReduxProvider>
      </body>
    </html>
  )
}

export default RootLayout
