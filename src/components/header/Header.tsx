import { Link } from 'wouter'
import { header, links } from './Header.css'

export const Header = () => {
  return (
    <header>
      <nav className={header}>
        <img src='./logo.svg' alt='logo de hacker news' />
        <Link href='/' className={links}>Hacker News</Link>
      </nav>
    </header>
  )
}
