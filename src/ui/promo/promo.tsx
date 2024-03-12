import Image from 'next/image'
import { promoProps } from './types'
import cn from 'classnames'
import classes from './styles.module.scss'

export const Promo: React.FC<promoProps> = ({
  className,
  heading,
  paragraph,
  imgSrc,
  buttonText
}) => {
  return (
    <section className={cn(className, classes.promo)}>
      <div className={cn(className, classes.promoWrapper)}>
        <h1 className={cn(className, classes.promoHeading)}>{heading}</h1>
        <p className={cn(className, classes.promoParagraph)}>{paragraph}</p>
        <button
          type="button"
          name="download resume"
          className={cn(className, classes.promoButton)}
        >
          {buttonText}
        </button>
      </div>
      <Image
        priority
        className={cn(className, classes.promoImg)}
        src={imgSrc}
        alt={heading}
      />
    </section>
  )
}
