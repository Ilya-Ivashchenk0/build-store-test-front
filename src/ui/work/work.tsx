import { workProps } from './types'
import cn from 'classnames'
import classes from './styles.module.scss'
import Image from 'next/image'

export const Work: React.FC<workProps> = ({ className, work }) => {
  return (
    <article className={cn(className, classes.work)}>
      <div className={cn(className, classes.workWrapper)}>
        <Image
          placeholder="blur"
          className={cn(className, classes.workImage)}
          src={work.img}
          alt={work.title}
        />
        <div className={cn(className, classes.workContentWrapper)}>
          <h4 className={cn(className, classes.workTitle)}>{work.title}</h4>
          <div className={cn(className, classes.workInfoWrapper)}>
            <p className={cn(className, classes.workYear)}>{work.year}</p>
            <p className={cn(className, classes.workDescription)}>
              {work.description}
            </p>
          </div>
          <p className={cn(className, classes.workSubtitle)}>{work.subtitle}</p>
        </div>
      </div>
      <hr className={cn(className, classes.workHr)} />
    </article>
  )
}
