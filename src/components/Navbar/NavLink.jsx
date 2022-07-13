export default function NavLink({ href, text }) {
  return (
    <li className='nav-link'>
      <a href={href}>{text}</a>
    </li>
  )
}
