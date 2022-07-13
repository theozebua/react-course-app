import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/outline'
import Button from './Button'
import Card from './Card'
import Title from './Title'
import Wrapper from './Wrapper'

export default function Prices() {
  return (
    <>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#312e81'
          fillOpacity='1'
          d='M0,32L48,42.7C96,53,192,75,288,96C384,117,480,139,576,138.7C672,139,768,117,864,106.7C960,96,1056,96,1152,122.7C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg>
      <section className='bg-primary text-white' id='prices'>
        <div className='container mx-auto p-4 md:px-8'>
          <h3 className='mb-4 text-center text-2xl font-semibold tracking-wider md:mb-8 md:text-3xl'>Prices</h3>
          <div className='grid gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-4'>
            <Card href={'#'}>
              <Title>Beginner</Title>
              <div className='flex flex-col gap-2 py-8'>
                <Wrapper text={'Support Available 24/7'}>
                  <CheckCircleIcon className='w-6 text-green-500' />
                </Wrapper>
                <Wrapper text={'1 Real World Project'}>
                  <CheckCircleIcon className='w-6 text-green-500' />
                </Wrapper>
                <Wrapper text={'All Beginner Lessons'}>
                  <CheckCircleIcon className='w-6 text-green-500' />
                </Wrapper>
                <Wrapper text={'All Junior Lessons'}>
                  <XCircleIcon className='w-6 text-red-500' />
                </Wrapper>
                <Wrapper text={'All Senior Lessons'}>
                  <XCircleIcon className='w-6 text-red-500' />
                </Wrapper>
                <Wrapper text={'All Expert Lessons'}>
                  <XCircleIcon className='w-6 text-red-500' />
                </Wrapper>
                <Wrapper text={'Tips & Tricks'}>
                  <XCircleIcon className='w-6 text-red-500' />
                </Wrapper>
                <Wrapper text={'Get Online Course T-Shirt'}>
                  <XCircleIcon className='w-6 text-red-500' />
                </Wrapper>
                <Wrapper text={'Get Certificate'}>
                  <XCircleIcon className='w-6 text-red-500' />
                </Wrapper>
              </div>
              <div className='mt-4 flex items-center justify-center'>
                <Button href={'#'}>Free</Button>
              </div>
            </Card>
            <Card href={'#'}>
              <Title>Junior</Title>
              <div className='flex flex-col gap-2 py-8'>
                <Wrapper text={'Support Available 24/7'}>
                  <CheckCircleIcon className='w-6 text-green-500' />
                </Wrapper>
                <Wrapper text={'5 Real World Project'}>
                  <CheckCircleIcon className='w-6 text-green-500' />
                </Wrapper>
                <Wrapper text={'All Beginner Lessons'}>
                  <CheckCircleIcon className='w-6 text-green-500' />
                </Wrapper>
                <Wrapper text={'All Junior Lessons'}>
                  <CheckCircleIcon className='w-6 text-green-500' />
                </Wrapper>
                <Wrapper text={'All Senior Lessons'}>
                  <XCircleIcon className='w-6 text-red-500' />
                </Wrapper>
                <Wrapper text={'All Expert Lessons'}>
                  <XCircleIcon className='w-6 text-red-500' />
                </Wrapper>
                <Wrapper text={'Tips & Tricks'}>
                  <XCircleIcon className='w-6 text-red-500' />
                </Wrapper>
                <Wrapper text={'Get Online Course T-Shirt'}>
                  <CheckCircleIcon className='w-6 text-green-500' />
                </Wrapper>
                <Wrapper text={'Get Certificate'}>
                  <CheckCircleIcon className='w-6 text-green-500' />
                </Wrapper>
              </div>
              <div className='mt-4 flex items-center justify-center'>
                <Button href={'#'}>$9</Button>
              </div>
            </Card>
            <Card href={'#'}>
              <div className='absolute -top-3 -right-3 flex h-16 w-16 animate-bounce items-center justify-center rounded-full border-2 border-white bg-primary p-2'>
                <span className='rotate-12 text-center text-sm tracking-wide text-white'>Best Seller</span>
              </div>
              <Title>Senior</Title>
              <div className='flex flex-col gap-2 py-8'>
                <Wrapper text={'Support Available 24/7'}>
                  <CheckCircleIcon className='w-6 text-green-500' />
                </Wrapper>
                <Wrapper text={'15 Real World Project'}>
                  <CheckCircleIcon className='w-6 text-green-500' />
                </Wrapper>
                <Wrapper text={'All Beginner Lessons'}>
                  <CheckCircleIcon className='w-6 text-green-500' />
                </Wrapper>
                <Wrapper text={'All Junior Lessons'}>
                  <CheckCircleIcon className='w-6 text-green-500' />
                </Wrapper>
                <Wrapper text={'All Senior Lessons'}>
                  <CheckCircleIcon className='w-6 text-green-500' />
                </Wrapper>
                <Wrapper text={'All Expert Lessons'}>
                  <XCircleIcon className='w-6 text-red-500' />
                </Wrapper>
                <Wrapper text={'Tips & Tricks'}>
                  <CheckCircleIcon className='w-6 text-green-500' />
                </Wrapper>
                <Wrapper text={'Get Online Course T-Shirt'}>
                  <CheckCircleIcon className='w-6 text-green-500' />
                </Wrapper>
                <Wrapper text={'Get Certificate'}>
                  <CheckCircleIcon className='w-6 text-green-500' />
                </Wrapper>
              </div>
              <div className='mt-4 flex items-center justify-center'>
                <Button href={'#'}>$99</Button>
              </div>
            </Card>
            <Card href={'#'}>
              <Title>Expert</Title>
              <div className='flex flex-col gap-2 py-8'>
                <Wrapper text={'Support Available 24/7'}>
                  <CheckCircleIcon className='w-6 text-green-500' />
                </Wrapper>
                <Wrapper text={'50 Real World Project'}>
                  <CheckCircleIcon className='w-6 text-green-500' />
                </Wrapper>
                <Wrapper text={'All Beginner Lessons'}>
                  <CheckCircleIcon className='w-6 text-green-500' />
                </Wrapper>
                <Wrapper text={'All Junior Lessons'}>
                  <CheckCircleIcon className='w-6 text-green-500' />
                </Wrapper>
                <Wrapper text={'All Senior Lessons'}>
                  <CheckCircleIcon className='w-6 text-green-500' />
                </Wrapper>
                <Wrapper text={'All Expert Lessons'}>
                  <CheckCircleIcon className='w-6 text-green-500' />
                </Wrapper>
                <Wrapper text={'Tips & Tricks'}>
                  <CheckCircleIcon className='w-6 text-green-500' />
                </Wrapper>
                <Wrapper text={'Get Online Course T-Shirt'}>
                  <CheckCircleIcon className='w-6 text-green-500' />
                </Wrapper>
                <Wrapper text={'Get Certificate'}>
                  <CheckCircleIcon className='w-6 text-green-500' />
                </Wrapper>
              </div>
              <div className='mt-4 flex items-center justify-center'>
                <Button href={'#'}>$499</Button>
              </div>
            </Card>
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
