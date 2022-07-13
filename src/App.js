import Contact from './components/Contact'
import Fab from './components/Fab'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Prices from './components/Prices'
import Service from './components/Service'
import WhyUs from './components/WhyUs'

export default function App() {
  return (
    <>
      <Navbar />
      <Fab />
      <Header />
      <main>
        <WhyUs />
        <Service />
        <Prices />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
