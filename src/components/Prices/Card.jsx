import { Link } from 'react-router-dom'

export default function Card({ children, href }) {
  return (
    <Link to={href} className='relative rounded-lg bg-white p-6 text-black duration-300 hover:-translate-y-4 hover:scale-105 hover:shadow-lg hover:shadow-gray-800/75'>
      {children}
    </Link>
  )
}
