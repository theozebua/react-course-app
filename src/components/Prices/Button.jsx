export default function Button({ children, href }) {
  return (
    <button href={href} className='rounded-full border border-primary bg-primary px-10 py-2 font-semibold uppercase tracking-wider text-white shadow-lg shadow-primary/50'>
      {children}
    </button>
  )
}
