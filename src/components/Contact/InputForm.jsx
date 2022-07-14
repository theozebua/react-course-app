export default function InputForm({ type, name, id }) {
  return <input className='w-full rounded border border-white bg-primary py-1 px-2 tracking-wide text-white transition duration-300 focus:bg-white focus:text-black focus:outline-primary' type={type} name={name} id={id} />
}
