import '@/assets/styles/global.css'
import { Font } from '@/assets/fonts/fonts'

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className={`${Font.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
