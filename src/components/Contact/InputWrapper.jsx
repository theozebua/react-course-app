export default function InputWrapper({ children, htmlFor, text }) {
  return (
    <div className='mb-3'>
      <label className='mb-1 block font-semibold tracking-wide' htmlFor={htmlFor}>
        {text}
      </label>
      {children}
    </div>
  )
}
