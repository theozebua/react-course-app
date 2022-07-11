import { MenuAlt3Icon } from '@heroicons/react/outline'

export default function Navbar() {
  return (
    <nav className='fixed top-0 z-50 w-full bg-white shadow-md'>
      <div className='container mx-auto p-2 md:px-8'>
        <div className='flex items-center justify-between'>
          <h3 className='text-2xl font-semibold tracking-wider text-primary'>Online Course</h3>
          <MenuAlt3Icon className='w-8 text-primary' />
        </div>
      </div>
    </nav>
  )
}
