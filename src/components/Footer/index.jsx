import { FaFacebook, FaInstagram, FaWhatsapp, FaTelegram, FaTiktok } from 'react-icons/fa'

export default function Footer() {
  return (
    <>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#312e81'
          fill-opacity='1'
          d='M0,32L48,42.7C96,53,192,75,288,96C384,117,480,139,576,138.7C672,139,768,117,864,106.7C960,96,1056,96,1152,122.7C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg>
      <footer className='bg-primary text-white'>
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
                  <a href='#'>Home</a>
                </li>
                <li>
                  <a href='#'>Why Us?</a>
                </li>
                <li>
                  <a href='#'>Services</a>
                </li>
                <li>
                  <a href='#'>Prices</a>
                </li>
                <li>
                  <a href='#'>Contact</a>
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
