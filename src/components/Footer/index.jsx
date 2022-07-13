import { FaFacebook, FaInstagram, FaWhatsapp, FaTelegram, FaTiktok } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer>
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
  )
}
