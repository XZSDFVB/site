import {NavLink} from "react-router-dom";
import s from './Header.module.css'
const Header = () => {
  return(
      <header>
          <nav>
              <NavLink to='/' className={`${s.link} + ${s.active}`}>Home</NavLink>
              <NavLink to='/' className={s.link}>About me</NavLink>
              <NavLink to='/' className={s.link}>Skills</NavLink>
              <NavLink to='/' className={s.link}>Portfolio</NavLink>
              <NavLink to='/' className={s.link}>Contacts</NavLink>
          </nav>
      </header>
  )
}
export default Header;