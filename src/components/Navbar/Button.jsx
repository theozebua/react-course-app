export default function Button({ className, href, text }) {
  return (
    <a className={`w-full rounded-lg border-2 border-primary p-2 text-center tracking-wide ${className}`} href={href}>
      {text}
    </a>
  )
}
