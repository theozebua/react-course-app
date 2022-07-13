import { MenuAlt1Icon, XIcon } from '@heroicons/react/outline'
import { useState } from 'react'

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = () => {
    setShowMenu(true)
  }

  const handleCloseMenu = () => {
    setShowMenu(false)
  }

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
                <XIcon className='w-8 rotate-180 text-primary' onClick={handleCloseMenu} />
              </div>
              <ul className='flex flex-col gap-4 md:flex-row md:justify-between'>
                <li className='nav-link'>
                  <a href='#home'>Home</a>
                </li>
                <li className='rounded-lg border-2 border-primary p-2 text-center tracking-wide text-primary md:border-none md:p-0 md:text-left md:text-black'>
                  <a href='#why-us'>Why Us?</a>
                </li>
                <li className='rounded-lg border-2 border-primary p-2 text-center tracking-wide text-primary md:border-none md:p-0 md:text-left md:text-black'>
                  <a href='#services'>Services</a>
                </li>
                <li className='rounded-lg border-2 border-primary p-2 text-center tracking-wide text-primary md:border-none md:p-0 md:text-left md:text-black'>
                  <a href='#prices'>Prices</a>
                </li>
                <li className='rounded-lg border-2 border-primary p-2 text-center tracking-wide text-primary md:border-none md:p-0 md:text-left md:text-black'>
                  <a href='#contact'>Contact</a>
                </li>
              </ul>
              <div className='mt-16 flex flex-col gap-4 md:hidden'>
                <a className='w-full rounded-lg border-2 border-primary bg-primary p-2 text-center tracking-wide text-white' href='#'>
                  Get Started
                </a>
                <a className='w-full rounded-lg border-2 border-primary bg-white p-2 text-center tracking-wide text-primary' href='#'>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
