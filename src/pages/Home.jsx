import Contact from '../components/Contact'
import Header from '../components/Header'
import Prices from '../components/Prices'
import Service from '../components/Service'
import Testimonials from '../components/Testimonials'
import WhyUs from '../components/WhyUs'

export default function Home() {
  return (
    <>
      <Header />
      <main className='overflow-x-hidden'>
        <WhyUs />
        <Service />
        <Prices />
        <Testimonials />
        <Contact />
      </main>
    </>
  )
}
