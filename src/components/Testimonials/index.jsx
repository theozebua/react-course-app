import { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/solid'

export default function Testimonials() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchUsers()
  }, [])

  const callback = (cb) => {
    return cb()
  }

  const fetchUsers = async () => {
    const res = await fetch('https://randomuser.me/api/?results=10')
    const data = await res.json()

    setUsers(data.results.map((user) => ({ ...user, stars: Math.floor(Math.random() * (5 - 4 + 1)) + 4 })))
  }

  return (
    <section name='testimonials'>
      <div className='container mx-auto p-4 md:px-8'>
        <h3 className='mb-4 text-center text-2xl font-semibold tracking-wider md:mb-8 md:text-3xl' data-aos={'fade-up'} data-aos-duration={1000} data-aos-offset={300}>
          Testimonials
        </h3>
        <div className='flex gap-4 overflow-auto pb-4 md:gap-6'>
          {users.map((user, i) => (
            <div className='flex min-w-[200px] flex-col items-center justify-center gap-4' key={user.login.uuid} data-aos={'fade-left'} data-aos-duration={1000} data-aos-delay={500 + i * 300} data-aos-offset={300}>
              <div className='w-24 overflow-hidden rounded-full'>
                <img src={user.picture.large} alt='Random Profile Picture' />
              </div>
              <span className='text-center font-semibold tracking-wider'>
                {user.name.first} {user.name.last}
              </span>
              <div className='flex gap-1'>
                {callback(() => {
                  const reviews = []
                  for (let i = 1; i <= user.stars; i++) {
                    reviews.push(<StarIcon className='h-4 w-4 text-yellow-500' key={i} />)
                  }
                  return reviews
                })}
              </div>
              <p className='text-center text-sm tracking-wide'>&ldquo; Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, quibusdam. &rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
