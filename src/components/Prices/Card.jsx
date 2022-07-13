export default function Card({ children, href }) {
  return (
    <a href={href} className='relative rounded-lg bg-white p-6 text-black duration-300 hover:-translate-y-4 hover:scale-105 hover:shadow-lg hover:shadow-gray-800/75'>
      {children}
    </a>
  )
}
