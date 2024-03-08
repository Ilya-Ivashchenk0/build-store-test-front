import { worksProps } from './types'
import cn from 'classnames'
import classes from './styles.module.scss'
import Image from 'next/image'

export const Works: React.FC<worksProps> = ({ heading, works }) => {
  return (
    <section className={cn(classes.works)}>
      <h2 className={cn(classes.worksHeading)}>{heading}</h2>
      <div className={cn(classes.worksWrapper)}>
        {works &&
          works.map((work, index) => (
            <div className={cn(classes.worksWork)} key={index}>
              <Image
                placeholder="blur"
                className={cn(classes.worksWorkImage)}
                src={work.img}
                alt={work.title}
              />
              <div className={cn(classes.worksWorkWrapper)}>
                <h4 className={cn(classes.worksWorkTitle)}>{work.title}</h4>
                <div className={cn(classes.worksWorkInfoWrapper)}>
                  <p className={cn(classes.worksWorkYear)}>{work.year}</p>
                  <p className={cn(classes.worksWorkDescription)}>
                    {work.description}
                  </p>
                </div>
                <p className={cn(classes.worksWorkSubtitle)}>{work.subtitle}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}
