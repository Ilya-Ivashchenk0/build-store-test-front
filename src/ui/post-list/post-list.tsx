import { postsProps } from './types'
import cn from 'classnames'
import classes from './styles.module.scss'
import Link from 'next/link'
import { Post } from '../post'

export const PostList: React.FC<postsProps> = ({ heading, link, posts }) => {
  return (
    <section className={cn(classes.posts)}>
      <div className={cn(classes.postsWrapper)}>
        <div className={cn(classes.postsHeadingWrapper)}>
          <h2 className={cn(classes.postsHeading)}>{heading}</h2>
          <Link className={cn(classes.postsLink)} href={link.href}>
            {link.text}
          </Link>
        </div>
        <div className={cn(classes.postsPostWrapper)}>
          {posts && posts.map((post, index) => (
            <Post className='post' key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
