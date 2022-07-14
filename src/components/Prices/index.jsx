import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import Button from './Button'
import Card from './Card'
import Title from './Title'
import Wrapper from './Wrapper'

export default function Prices() {
  const [prices, setPrices] = useState([])

  useEffect(() => {
    fetchPrices()
  }, [])

  const fetchPrices = async () => {
    const res = await fetch('prices.json')
    const data = await res.json()

    setPrices(data)
  }

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
            {prices.map((price, i) => (
              <Card href={'#'} key={i}>
                {price.bestSeller && (
                  <div className='absolute -top-3 -right-3 flex h-16 w-16 animate-bounce items-center justify-center rounded-full border-2 border-white bg-primary p-2'>
                    <span className='rotate-12 text-center text-sm tracking-wide text-white'>Best Seller</span>
                  </div>
                )}
                <Title>{price.title}</Title>
                <div className='flex flex-col gap-2 py-8'>
                  {price.benefits.map((benefit, i) => (
                    <Wrapper text={benefit.name} key={i}>
                      {benefit.available ? <CheckCircleIcon className='w-6 text-green-500' /> : <XCircleIcon className='w-6 text-green-500' />}
                    </Wrapper>
                  ))}
                </div>
                <div className='mt-4 flex items-center justify-center'>
                  <Button href={'#'}>{price.price}</Button>
                </div>
              </Card>
            ))}
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
