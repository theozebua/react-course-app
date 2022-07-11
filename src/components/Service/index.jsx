import { GlobeAltIcon, DeviceMobileIcon, DesktopComputerIcon, PuzzleIcon } from '@heroicons/react/outline'

export default function Service() {
  return (
    <section className='mt-8 bg-primary text-white'>
      <div className='container mx-auto p-4 py-8 md:px-8'>
        <h3 className='mb-4 text-center text-2xl font-semibold tracking-wider md:mb-8'>Services</h3>
        <div className='grid gap-8 md:grid-cols-2 md:gap-6'>
          <div className='service-wrapper'>
            <GlobeAltIcon className='mb-4 w-8' />
            <h5 className='service-title'>Web Development</h5>
            <p className='service-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non culpa, accusamus repudiandae ipsa ea id.</p>
          </div>
          <div className='service-wrapper'>
            <DeviceMobileIcon className='mb-4 w-8' />
            <h5 className='service-title'>Mobile App Development</h5>
            <p className='service-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non culpa, accusamus repudiandae ipsa ea id.</p>
          </div>
          <div className='service-wrapper'>
            <DesktopComputerIcon className='mb-4 w-8' />
            <h5 className='service-title'>Desktop App Development</h5>
            <p className='service-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non culpa, accusamus repudiandae ipsa ea id.</p>
          </div>
          <div className='service-wrapper'>
            <PuzzleIcon className='mb-4 w-8' />
            <h5 className='service-title'>Game Development</h5>
            <p className='service-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non culpa, accusamus repudiandae ipsa ea id.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
