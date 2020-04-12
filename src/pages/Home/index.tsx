import React, { Suspense } from 'react'
import Navbar from 'components/Navbar'
import {
  Wrapper,
} from './styled'
import Loader from 'components/Loader'

const HeroSection = React.lazy(() => import('./Sections/HeroSection'));
const Services = React.lazy(() => import('./Sections/Services'));

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
    </Wrapper>
  )
}

export default Home
