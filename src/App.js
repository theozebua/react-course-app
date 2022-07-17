import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Fab from './components/Fab'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Payment from './pages/Payment'

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Fab />
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/payment/:type' element={<Payment />} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </Router>
    </>
  )
}
