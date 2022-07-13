export default function Wrapper({ children, text }) {
  return (
    <div className='flex gap-2'>
      {children}
      <span className='tracking-wide'>{text}</span>
    </div>
  )
}
