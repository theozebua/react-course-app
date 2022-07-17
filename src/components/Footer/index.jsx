import { useEffect, useState } from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp, FaTelegram, FaTiktok } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import WavesUp from '../../assets/svg/waves-up.svg'

export default function Footer() {
  const [pathname, setPathname] = useState('')
  const location = useLocation()

  useEffect(() => {
    setPathname(window.location.pathname.split('/').at(1))
  }, [location])

  return (
    <>
      {pathname === 'payment' && <object data={WavesUp} type='image/svg+xml'></object>}
      <footer className={`${pathname === 'payment' && 'bg-primary text-white'}`}>
        <div className='container mx-auto p-4 md:px-8'>
          <div className='grid gap-8 md:grid-cols-4'>
            <div>
              <h4 className='text-lg font-semibold tracking-wider'>Online Course</h4>
              <p className='text-sm tracking-wide'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, neque.</p>
            </div>
            <nav>
              <h6 className='text-lg font-semibold tracking-wider'>Navigation</h6>
              <ul>
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
                <li>
                  <Link to={'/'}>Why Us?</Link>
                </li>
                <li>
                  <Link to={'/'}>Services</Link>
                </li>
                <li>
                  <Link to={'/'}>Prices</Link>
                </li>
                <li>
                  <Link to={'/'}>Testimonials</Link>
                </li>
                <li>
                  <Link to={'/'}>Contact</Link>
                </li>
              </ul>
            </nav>
            <div>
              <h6 className='text-lg font-semibold tracking-wider'>Sponsor</h6>
              <ul>
                <li>
                  <a href='#'>Google</a>
                </li>
                <li>
                  <a href='#'>Facebook</a>
                </li>
                <li>
                  <a href='#'>Twitter</a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className='text-lg font-semibold tracking-wider'>Partner</h6>
              <ul>
                <li>
                  <a href='#'>Google</a>
                </li>
                <li>
                  <a href='#'>Facebook</a>
                </li>
                <li>
                  <a href='#'>Twitter</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='mt-16 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between'>
            <span className='text-sm tracking-wide'>&copy; {new Date().getFullYear()} Online Course. All rights reserved.</span>
            <div className='flex justify-center gap-4'>
              <FaFacebook className='h-4 w-4' />
              <FaInstagram className='h-4 w-4' />
              <FaWhatsapp className='h-4 w-4' />
              <FaTelegram className='h-4 w-4' />
              <FaTiktok className='h-4 w-4' />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
