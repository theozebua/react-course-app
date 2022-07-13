import { GlobeAltIcon, DeviceMobileIcon, DesktopComputerIcon, PuzzleIcon } from '@heroicons/react/outline'
import Wrapper from './Wrapper'

export default function Service() {
  return (
    <section className='mb-16' id='services'>
      <div className='container mx-auto p-4 md:px-8'>
        <h3 className='mb-4 text-center text-2xl font-semibold tracking-wider md:mb-8 md:text-3xl'>Services</h3>
        <div className='grid gap-8 md:grid-cols-2 md:gap-6'>
          <Wrapper title={'Web Development'} text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non culpa, accusamus repudiandae ipsa ea id.'}>
            <GlobeAltIcon className='mb-4 w-8' />
          </Wrapper>
          <Wrapper title={'Mobile App Development'} text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non culpa, accusamus repudiandae ipsa ea id.'}>
            <DeviceMobileIcon className='mb-4 w-8' />
          </Wrapper>
          <Wrapper title={'Desktop App Development'} text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non culpa, accusamus repudiandae ipsa ea id.'}>
            <DesktopComputerIcon className='mb-4 w-8' />
          </Wrapper>
          <Wrapper title={'Game Development'} text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non culpa, accusamus repudiandae ipsa ea id.'}>
            <PuzzleIcon className='mb-4 w-8' />
          </Wrapper>
        </div>
      </div>
    </section>
  )
}
