import React, { Suspense } from 'react'
import Navbar from 'components/Navbar'
import {
  Wrapper,
} from './styled'
import Loader from 'components/Loader'
import { midikrew } from 'data/portfolio/midikrew'
import { team } from 'data/team'

const HeroSection = React.lazy(() => import('./Sections/HeroSection'));
const Services = React.lazy(() => import('./Sections/Services'));
const Portfolio = React.lazy(() => import('./Sections/Portfolio'));
const Team = React.lazy(() => import('./Sections/Team'));

const lazyLoad = (c: any) => (
  <Suspense fallback={<Loader />}>
    {c()}
  </Suspense>
)

const Home = () => {

  return (
    <Wrapper>
      <Navbar />
      {lazyLoad(() => <HeroSection />)}
      {lazyLoad(() => <Services />)}
      {lazyLoad(() => <Portfolio project={midikrew} />)}
      {lazyLoad(() => <Team team={team} />)}
    </Wrapper>
  )
}

export default Home
