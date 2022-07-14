import { PaperAirplaneIcon } from '@heroicons/react/outline'
import ContactSVG from '../../assets/svg/contact-svg.svg'
import InputForm from './InputForm'
import InputWrapper from './InputWrapper'
import TextareaForm from './TextareaForm'

export default function Contact() {
  return (
    <>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#312e81'
          fillOpacity='1'
          d='M0,32L48,42.7C96,53,192,75,288,96C384,117,480,139,576,138.7C672,139,768,117,864,106.7C960,96,1056,96,1152,122.7C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg>
      <section className='bg-primary text-white' id='contact'>
        <div className='container mx-auto p-4 md:px-8'>
          <h3 className='mb-4 text-center text-2xl font-semibold tracking-wider md:mb-8 md:text-3xl'>Contact</h3>
          <div className='flex flex-col gap-4 md:flex-row md:gap-8'>
            <div className='flex w-full items-center justify-center'>
              <img src={ContactSVG} alt='Contact SVG' />
            </div>
            <div className='w-full rounded-lg'>
              <form className='p-4'>
                <InputWrapper htmlFor={'name'} text={'Name'}>
                  <InputForm type={'text'} name={'name'} id={'name'} />
                </InputWrapper>
                <InputWrapper htmlFor={'email'} text={'Email'}>
                  <InputForm type={'email'} name={'email'} id={'email'} />
                </InputWrapper>
                <InputWrapper htmlFor={'message'} text={'Message'}>
                  <TextareaForm name={'message'} id={'message'} />
                </InputWrapper>
                <button className='ml-auto block rounded-lg border-2 border-white bg-primary px-6 py-2 text-white transition duration-300 hover:bg-white hover:text-primary' type='button'>
                  <PaperAirplaneIcon className='h-6 w-6 rotate-90' />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#312e81'
          fillOpacity='1'
          d='M0,32L48,42.7C96,53,192,75,288,96C384,117,480,139,576,138.7C672,139,768,117,864,106.7C960,96,1056,96,1152,122.7C1248,149,1344,203,1392,229.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
        ></path>
      </svg>
    </>
  )
}
