import { MenuAlt1Icon, XIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import Button from './Button'

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  const [pathname, setPathname] = useState('')
  const location = useLocation()

  const handleShowMenu = () => {
    setShowMenu(true)
  }

  const handleCloseMenu = () => {
    setShowMenu(false)
  }

  useEffect(() => {
    setPathname(window.location.pathname.split('/').at(1))
  }, [location])

  return (
    <nav className='fixed top-0 z-50 w-full bg-white shadow-md'>
      <div className='container mx-auto p-2 md:px-8'>
        <div className='flex items-center justify-between'>
          <h3 className='w-full text-2xl font-semibold tracking-wider text-primary md:w-1/2 lg:w-full'>Online Course</h3>
          <MenuAlt1Icon className='w-8 rotate-180 text-primary md:hidden' onClick={handleShowMenu} />
          <div className={`absolute top-0 right-0 z-50 h-screen w-full bg-white transition duration-300 md:static md:h-auto md:translate-x-0 ${showMenu || 'translate-x-full'}`}>
            <div className='container mx-auto p-2 md:px-8'>
              <div className='mb-8 flex items-center justify-between md:hidden'>
                <h3 className='text-2xl font-semibold tracking-wider text-primary'>Online Course</h3>
                <XIcon onClick={handleCloseMenu} className='w-8 rotate-180 text-primary' />
              </div>
              <ul className='flex flex-col gap-4 md:flex-row md:justify-between'>
                <Link onClick={handleCloseMenu} className='nav-link' to={'/'}>
                  Home
                </Link>
                {pathname !== 'payment' && (
                  <>
                    <LinkScroll onClick={handleCloseMenu} className='nav-link' to={'why-us'} smooth={true} duration={300} offset={-100}>
                      Why Us?
                    </LinkScroll>
                    <LinkScroll onClick={handleCloseMenu} className='nav-link' to={'services'} smooth={true} duration={300} offset={-100}>
                      Services
                    </LinkScroll>
                    <LinkScroll onClick={handleCloseMenu} className='nav-link' to={'prices'} smooth={true} duration={300} offset={-100}>
                      Prices
                    </LinkScroll>
                    <LinkScroll onClick={handleCloseMenu} className='nav-link' to={'testimonials'} smooth={true} duration={300} offset={-100}>
                      Testimonials
                    </LinkScroll>
                    <LinkScroll onClick={handleCloseMenu} className='nav-link' to={'contact'} smooth={true} duration={300} offset={-100}>
                      Contact
                    </LinkScroll>
                  </>
                )}
              </ul>
              <div className='mt-16 flex flex-col gap-4 md:hidden'>
                <Button className={'bg-primary text-white'} href={'#'} text={'Get Started'} />
                <Button className={'bg-white text-primary'} href={'#'} text={'Learn More'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
