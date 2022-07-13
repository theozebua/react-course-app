export default function Button({ className, href, text }) {
  return (
    <a className={`rounded-xl border-2 border-primary px-4 py-2 tracking-wide transition duration-300 hover:shadow-lg ${className}`} href={href}>
      {text}
    </a>
  )
}
