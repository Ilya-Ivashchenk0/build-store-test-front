import { worksProps } from './types'
import cn from 'classnames'
import classes from './styles.module.scss'
import { Work } from '../work'

export const WorkList: React.FC<worksProps> = ({
  className,
  heading,
  works
}) => {
  return (
    <section className={cn(className, classes.workList)}>
      <h2 className={cn(className, classes.workListHeading)}>{heading}</h2>
      <div className={cn(className, classes.workListWrapper)}>
        {works &&
          works.map((work, index) => (
            <Work className="work" key={index} work={work} />
          ))}
      </div>
    </section>
  )
}
