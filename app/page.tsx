import classes from './styles.module.scss'
import cn from 'classnames'
import { Promo } from '@/ui/promo'
import { Posts } from '@/ui/posts'
import promoImg from '@/assets/images/promoImage.png'
import { Works } from '@/ui/works'
import rect1 from '@/assets/images/Rectangle1.png'
import rect2 from '@/assets/images/Rectangle2.png'
import rect3 from '@/assets/images/Rectangle3.png'

const Home: React.FC = () => {
  const postsLink = {
    text: 'View all',
    href: '/'
  }

  const posts = [
    {
      title: 'Making a design system from scratch',
      date: '12 Feb 2020',
      description: 'Design, Pattern',
      subtitle:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
      title: 'Creating pixel perfect icons in Figma',
      date: '12 Feb 2020',
      description: 'Figma, Icon Design',
      subtitle:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    }
  ]

  const workList = [
    {
      img: rect1,
      title: 'Designing Dashboards',
      year: 2020,
      description: 'Dashboard',
      subtitle:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
      img: rect2,
      title: 'Vibrant Portraits of 2020',
      year: 2018,
      description: 'Illustration',
      subtitle:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
      img: rect3,
      title: '36 Days of Malayalam type',
      year: 2018,
      description: 'Typography',
      subtitle:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    }
  ]

  return (
    <main className={cn(classes.main)}>
      <div className={cn(classes.mainWrapper)}>
        <Promo
          heading={`Hi, I am John, \n Creative Technologist`}
          paragraph="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          imgSrc={promoImg}
          buttonText="Download Resume"
        />
        <Posts heading="Recent posts" link={postsLink} posts={posts} />
        <Works heading="Featured works" works={workList} />
      </div>
    </main>
  )
}

export default Home
