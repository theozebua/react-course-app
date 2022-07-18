import { GlobeAltIcon, DeviceMobileIcon, DesktopComputerIcon, PuzzleIcon } from '@heroicons/react/outline'
import Wrapper from './Wrapper'

export default function Service() {
  return (
    <section className='mb-16' name='services'>
      <div className='container mx-auto p-4 md:px-8'>
        <h3 className='mb-4 text-center text-2xl font-semibold tracking-wider md:mb-8 md:text-3xl' data-aos={'fade-up'} data-aos-duration={1000} data-aos-offset={300}>
          Services
        </h3>
        <div className='grid gap-8 md:grid-cols-2 md:gap-6'>
          <Wrapper title={'Web Development'} text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non culpa, accusamus repudiandae ipsa ea id.'} delayAos={500} data-aos-offset={300}>
            <GlobeAltIcon className='mb-4 w-8' />
          </Wrapper>
          <Wrapper title={'Mobile App Development'} text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non culpa, accusamus repudiandae ipsa ea id.'} delayAos={800} data-aos-offset={300}>
            <DeviceMobileIcon className='mb-4 w-8' />
          </Wrapper>
          <Wrapper title={'Desktop App Development'} text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non culpa, accusamus repudiandae ipsa ea id.'} delayAos={1100} data-aos-offset={300}>
            <DesktopComputerIcon className='mb-4 w-8' />
          </Wrapper>
          <Wrapper title={'Game Development'} text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non culpa, accusamus repudiandae ipsa ea id.'} delayAos={1400} data-aos-offset={300}>
            <PuzzleIcon className='mb-4 w-8' />
          </Wrapper>
        </div>
      </div>
    </section>
  )
}
