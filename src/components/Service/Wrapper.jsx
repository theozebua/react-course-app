export default function Wrapper({ children, title, text, delayAos }) {
  return (
    <div className='service-wrapper' data-aos={'flip-left'} data-aos-duration={1000} data-aos-delay={delayAos}>
      {children}
      <h5 className='service-title'>{title}</h5>
      <p className='service-text'>{text}</p>
    </div>
  )
}
