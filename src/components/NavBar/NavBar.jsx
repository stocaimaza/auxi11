import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
      <Link to={"/"}>
        <h1>Marolio Online</h1>
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to={`/categoria/2`}> Lácteos </NavLink>
          </li>

          <li>
            <NavLink to={`/categoria/3`}> Almacén </NavLink>
          </li>

        </ul>
      </nav>

      <CartWidget />

    </header>
  )
}

export default NavBar