import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="row bg-info bg-opacity-50">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/courses" className="nav-link">
                  Course
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Facilities
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/facilities">
                      Action
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/product" className="nav-link">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/products" className="nav-link">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/batches" className="nav-link">
                  Batches
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
