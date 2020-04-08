import React, { Component } from 'react';
import './header.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <img src={logo} width={250} />
        <nav>
          <ul>
            <li>
              <Link exact to="/" activeClassName="is-selected">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/videos" activeClassName="is-selected">
                Videos
              </Link>
            </li>
            <li>
              <Link to="/contacto" activeClassName="is-selected">
                Contacto
              </Link>
            </li>
            <li>
              <Link to="/perfil" activeClassName="is-selected">
                Perfil
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
