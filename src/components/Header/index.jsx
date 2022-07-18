import HeaderSVG from '../../assets/svg/header-svg.svg'
import Button from './Button'

export default function Header() {
  return (
    <header className='my-16 lg:mt-20' name='home'>
      <div className='container mx-auto p-2 md:px-8'>
        <div className='flex flex-col gap-4 md:flex-row md:gap-8' data-aos={'fade-up'} data-aos-duration={1000}>
          <div className='flex w-full items-center justify-center md:order-1 md:w-1/2'>
            <img className='w-full' src={HeaderSVG} alt='Header SVG' />
          </div>
          <div className='flex flex-col gap-2 md:w-1/2'>
            <h1 className='text-center text-4xl leading-tight tracking-wider md:text-left'>
              Improve your skills with <span className='font-semibold text-primary'>Online Course.</span>
            </h1>
            <p className='text-center leading-relaxed tracking-wide md:text-left'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolorem dicta ad quis temporibus facere amet, eveniet nihil molestiae quos unde officiis optio necessitatibus, accusantium veniam, voluptate vel commodi
              dolore?
            </p>
            <div className='mt-2 flex items-center justify-center gap-4 md:justify-start'>
              <Button className={'bg-primary text-white hover:shadow-primary/50'} href={'#'} text={'Get Started'} />
              <Button className={'bg-white text-primary hover:shadow-gray-800/50'} href={'#'} text={'Learn More'} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
