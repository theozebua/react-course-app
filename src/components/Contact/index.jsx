import { PaperAirplaneIcon } from '@heroicons/react/outline'
import ContactSVG from '../../assets/svg/contact-svg.svg'
import WavesUp from '../../assets/svg/waves-up.svg'
import WavesDown from '../../assets/svg/waves-down.svg'
import InputForm from './InputForm'
import InputWrapper from './InputWrapper'
import TextareaForm from './TextareaForm'

export default function Contact() {
  return (
    <>
      <object data={WavesUp} type='image/svg+xml'></object>
      <section className='bg-primary text-white' name='contact'>
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
      <object data={WavesDown} type='image/svg+xml'></object>
    </>
  )
}
