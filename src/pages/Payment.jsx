import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import InputWrapper from '../components/Payments/InputWrapper'
import RadioButton from '../components/Payments/RadioButton'
import PaymentSVG from '../assets/svg/payment-svg.svg'

export default function Payment() {
  const [payments, setPayments] = useState([])
  const [price, setPrice] = useState({})
  const params = useParams()

  useEffect(() => {
    fetchPayments()
    fetchPrice()
  }, [])

  const fetchPayments = async () => {
    const res = await fetch('/payments.json')
    const data = await res.json()

    setPayments(data)
  }

  const fetchPrice = async () => {
    const res = await fetch('/prices.json')
    const data = await res.json()

    setPrice(data.filter((price) => price.type === params.type)[0])
  }

  return (
    <section className='my-16' id='payment'>
      <div className='container mx-auto p-4 md:px-8'>
        <h3 className='mb-4 text-center text-2xl font-semibold tracking-wider md:mb-8 md:text-3xl' data-aos={'fade-up'} data-aos-duration={1000} data-aos-offset={300}>
          Payment
        </h3>
        <div className='flex flex-col gap-4 md:gap-8 lg:flex-row'>
          <div className='flex w-full items-center justify-center lg:w-1/2' data-aos={'fade-right'} data-aos-duration={1000} data-aos-offset={300} data-aos-delay={500}>
            <object className='w-full md:w-1/2 lg:w-full' data={PaymentSVG} type='image/svg+xml'></object>
          </div>
          <form className='flex w-full flex-col rounded-lg bg-primary px-4 py-6 text-white' data-aos={'fade-left'} data-aos-duration={1000} data-aos-offset={300} data-aos-delay={500}>
            <div className='flex flex-col'>
              <h5 className='mb-4 text-center text-xl tracking-wider'>{price.title} Class</h5>
              <div className='mb-4 grid gap-4 md:grid-cols-2 md:gap-6'>
                <div>
                  <label className='mb-1 block font-semibold tracking-wide' htmlFor='name'>
                    Name
                  </label>
                  <input className='w-full rounded border border-white bg-primary py-1 px-2 tracking-wide text-white transition duration-300 focus:bg-white focus:text-black focus:outline-primary' type='text' name='name' id='name' />
                </div>
                <div>
                  <label className='mb-1 block font-semibold tracking-wide' htmlFor='email'>
                    Email
                  </label>
                  <input className='w-full rounded border border-white bg-primary py-1 px-2 tracking-wide text-white transition duration-300 focus:bg-white focus:text-black focus:outline-primary' type='email' name='email' id='email' />
                </div>
              </div>
              {price.price !== 'Free' && (
                <>
                  <h5 className='mb-1 font-semibold tracking-wide'>Payment Method</h5>
                  <div className='mb-8 grid gap-6 gap-x-6 md:grid-cols-2 lg:grid-cols-3'>
                    {payments.map((payment, i) => (
                      <InputWrapper htmlFor={payment.slug} src={payment.img} alt={payment.name} key={i}>
                        <RadioButton name={'payment'} id={payment.slug} />
                      </InputWrapper>
                    ))}
                  </div>
                </>
              )}
            </div>
            <button className='mt-auto block w-full rounded-lg border-2 border-white bg-primary px-6 py-2 text-white transition duration-300 hover:bg-white hover:text-primary'>
              Buy Now For <span>{`${price.price}`}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
