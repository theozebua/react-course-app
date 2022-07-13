import { PaperAirplaneIcon } from '@heroicons/react/outline'
import ContactSVG from '../../assets/svg/contact-svg.svg'

export default function Contact() {
  return (
    <section className='mb-16' id='contact'>
      <div className='container mx-auto p-4 md:px-8'>
        <h3 className='mb-4 text-center text-2xl font-semibold tracking-wider md:mb-8 md:text-3xl'>Contact</h3>

        <div className='flex flex-col gap-4 md:flex-row md:gap-8'>
          <div className='flex w-full items-center justify-center'>
            <img src={ContactSVG} alt='Contact SVG' />
          </div>
          <div className='w-full rounded-lg bg-primary p-4 text-white'>
            <form className='p-4'>
              <div className='mb-3'>
                <label className='mb-1 block font-semibold tracking-wide' htmlFor='name'>
                  Name
                </label>
                <input className='w-full rounded border border-white bg-primary py-1 px-2 tracking-wide text-white transition duration-300 focus:bg-white focus:text-black focus:outline-primary' type='text' name='name' id='name' />
              </div>
              <div className='mb-3'>
                <label className='font mb-1 block font-semibold tracking-wide' htmlFor='email'>
                  Email
                </label>
                <input className='w-full rounded border border-white bg-primary py-1 px-2 tracking-wide text-white transition duration-300 focus:bg-white focus:text-black focus:outline-primary' type='email' name='email' id='email' />
              </div>
              <div className='mb-3'>
                <label className='mb-1 block tracking-wide' htmlFor='message'>
                  Message
                </label>
                <textarea
                  className='w-full resize-none rounded border border-white bg-primary py-1 px-2 tracking-wide text-white transition duration-300 focus:bg-white focus:text-black focus:outline-primary'
                  name='message'
                  id='message'
                  rows='10'
                ></textarea>
              </div>
              <button className='ml-auto block rounded-lg border-2 border-white bg-primary px-6 py-2 text-white transition duration-300 hover:bg-white hover:text-primary' type='button'>
                <PaperAirplaneIcon className='h-6 w-6 rotate-90' />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
