import { CheckCircleIcon } from '@heroicons/react/outline'

export default function InputWrapper({ children, htmlFor, src, alt }) {
  return (
    <div>
      <label className='flex w-full cursor-pointer items-center rounded-lg border-2 border-white bg-white px-2' htmlFor={htmlFor}>
        {children}
        <img className='h-5 w-full object-contain' src={src} alt={alt} />
        <CheckCircleIcon className='invisible h-8 w-8 text-green-500 transition duration-300 peer-checked:visible' />
      </label>
    </div>
  )
}
