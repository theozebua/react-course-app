import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import WavesUp from '../../assets/svg/waves-up.svg'
import WavesDown from '../../assets/svg/waves-down.svg'
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
      <object data={WavesUp} type='image/svg+xml'></object>
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
      <object data={WavesDown} type='image/svg+xml'></object>
    </>
  )
}
