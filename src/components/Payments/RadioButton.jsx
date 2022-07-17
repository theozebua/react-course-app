export default function RadioButton({ name, id }) {
  return <input className='peer pointer-events-none invisible' type={'radio'} name={name} id={id} />
}
