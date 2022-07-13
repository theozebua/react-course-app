import { FaWhatsapp } from 'react-icons/fa'

export default function Fab() {
  return (
    <a href='#' className='fixed bottom-2 right-2 z-40 rounded-full border-2 border-green-500 p-3 text-green-500 transition duration-300 hover:bg-green-500 hover:text-white md:bottom-4 md:right-4 lg:bottom-6 lg:right-6'>
      <FaWhatsapp className='h-8 w-8 md:h-10 md:w-10' />
    </a>
  )
}
