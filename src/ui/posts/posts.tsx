import { postsProps } from './types'
import cn from 'classnames'
import classes from './styles.module.scss'
import Link from 'next/link'

export const Posts: React.FC<postsProps> = ({ heading, link, posts }) => {
  return (
    <section className={cn(classes.posts)}>
      <div className={cn(classes.postsWrapper)}>
        <div className={cn(classes.postsHeadingWrapper)}>
          <h3 className={cn(classes.postsHeading)}>{heading}</h3>
          <Link className={cn(classes.postsLink)} href={link.href}>
            {link.text}
          </Link>
        </div>
        <div className={cn(classes.postsPostWrapper)}>
          {posts &&
            posts.map((post, index) => (
              <div className={cn(classes.postsPost)} key={index}>
                <h4 className={cn(classes.postsPostTitle)}>{post.title}</h4>
                <div className={cn(classes.postsPostInfoWrapper)}>
                  <p className={cn(classes.postsPostDate)}>{post.date}</p>
                  <p className={cn(classes.postsPostInfo)}>{post.description}</p>
                </div>
                <p className={cn(classes.postsPostSubtitle)}>{post.subtitle}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
