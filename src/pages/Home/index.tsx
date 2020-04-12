import React, { Suspense } from 'react'
import Navbar from 'components/Navbar'
import {
  Wrapper,
} from './styled'
import Loader from 'components/Loader'
import { midikrew } from 'data/portfolio/midikrew'

const HeroSection = React.lazy(() => import('./Sections/HeroSection'));
const Services = React.lazy(() => import('./Sections/Services'));
const Portfolio = React.lazy(() => import('./Sections/Portfolio'));

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
    </Wrapper>
  )
}

export default Home
