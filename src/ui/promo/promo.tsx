import Image from 'next/image'
import { promoProps } from './types'
import cn from 'classnames'
import classes from './styles.module.scss'

export const Promo: React.FC<promoProps> = ({
  heading,
  paragraph,
  imgSrc,
  buttonText
}) => {
  return (
    <section className={cn(classes.promo)}>
      <div className={cn(classes.promoWrapper)}>
        <h1 className={cn(classes.promoHeading)}>{heading}</h1>
        <p className={cn(classes.promoParagraph)}>{paragraph}</p>
        <button type='button' name='download resume' className={cn(classes.promoButton)}>{buttonText}</button>
      </div>
      <Image
        priority
        className={cn(classes.promoImg)}
        src={imgSrc}
        alt={heading}
      />
    </section>
  )
}
