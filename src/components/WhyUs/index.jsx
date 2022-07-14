import WhyUsSVG from '../../assets/svg/whyus-svg.svg'
import WavesUp from '../../assets/svg/waves-up.svg'
import WavesDown from '../../assets/svg/waves-down.svg'
import Wrapper from './Wrapper'

export default function WhyUs() {
  return (
    <>
      <object data={WavesUp} type='image/svg+xml'></object>
      <section className='bg-primary text-white' id='why-us'>
        <div className='container mx-auto p-4 md:px-8'>
          <h3 className='mb-4 text-center text-2xl font-semibold tracking-wider md:mb-8 md:text-3xl'>Why Us?</h3>
          <div className='flex flex-col gap-4 md:flex-row md:gap-8'>
            <div className='flex w-full items-center justify-center'>
              <img className='w-full' src={WhyUsSVG} alt='Why Us SVG' />
            </div>
            <div className='w-full rounded-lg'>
              <Wrapper title={'Case Study Method'} />
              <Wrapper title={'Practice > Theory'} />
              <Wrapper title={'Up to date Lessons'} />
              <Wrapper title={'Expert Tutor'} />
              <Wrapper title={'Learn Anywhere & Anytime'} />
              <Wrapper title={'Support Available 24/7'} />
              <Wrapper title={'Big Community'} />
              <Wrapper title={'Get Certificate'} />
            </div>
          </div>
        </div>
      </section>
      <object data={WavesDown} type='image/svg+xml'></object>
    </>
  )
}
