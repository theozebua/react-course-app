export default function Wrapper({ children, title, text }) {
  return (
    <div className='service-wrapper'>
      {children}
      <h5 className='service-title'>{title}</h5>
      <p className='service-text'>{text}</p>
    </div>
  )
}
