import cn from 'classnames'
import classes from './styles.module.scss'
import { postProps } from './types'

export const Post: React.FC<postProps> = ({ className, post }) => {
  return (
    <article className={cn(className, classes.post)}>
      <h4 className={cn(className, classes.postTitle)}>{post.title}</h4>
      <div className={cn(className, classes.postInfoWrapper)}>
        <p className={cn(className, classes.postDate)}>{post.date}</p>
        <p className={cn(className, classes.postInfo)}>{post.description}</p>
      </div>
      <p className={cn(className, classes.postSubtitle)}>{post.subtitle}</p>
    </article>
  )
}
