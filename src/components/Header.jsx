import React, { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from '../assets/logo.png'

function Header() {
  const navigator = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    const queryTerm = e.target.search.value;
    e.target.reset();
    if (collapseRef.current) {
      const bsCollapse = bootstrap.Collapse.getInstance(collapseRef.current);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    }

    return navigator(`/search?q=${queryTerm}`);
  };

  const collapseRef = useRef();
  const handleNavLinkClick = () => {
    if (collapseRef.current) {
      const bsCollapse = bootstrap.Collapse.getInstance(collapseRef.current);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
  };

  return (
<nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ 
  backgroundColor: '#18001b',
  padding: '0.5rem 1rem',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
  zIndex: 1030
}}>
      {" "}
      <div className="container-fluid container">
        <NavLink className="navbar-brand text-white" to={"/"}>
          <img src={logo} alt="" width={65} />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          ref={collapseRef}
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                aria-current="page"
                to={"/"}
                onClick={handleNavLinkClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                aria-current="page"
                to={"/movies/top"}
                onClick={handleNavLinkClick}
              >
                Top Rated
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                aria-current="page"
                to={"/movies/popular"}
                onClick={handleNavLinkClick}
              >
                Popular
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                aria-current="page"
                to={"/movies/upcoming"}
                onClick={handleNavLinkClick}
              >
                Upcoming
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to={"/"}>
                    Action
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to={"/"}>
                    Another action
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink className="dropdown-item" to={"/"}>
                    Something else here
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              name="search"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
