export default function TextareaForm({ name, id }) {
  return (
    <textarea className='w-full resize-none rounded border border-white bg-primary py-1 px-2 tracking-wide text-white transition duration-300 focus:bg-white focus:text-black focus:outline-primary' name={name} id={id} rows='10'></textarea>
  )
}
