import { CheckCircleIcon } from '@heroicons/react/outline'

export default function Wrapper({ title }) {
  return (
    <div className='why-us-wrapper'>
      <CheckCircleIcon className='why-us-icon' />
      <h5 className='why-us-title'>{title}</h5>
    </div>
  )
}
