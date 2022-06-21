import React from 'react'

function Footer() {
    return (
        <div className="footer d-flex flex-column">
<div className="container">
  <footer className="row row-cols-7 py-5 border-top">
    <div className="col">
      <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
      </a>
      <p className="text-muted">Cryptocheck24 ©2022</p>
    </div>

    <div className="col">

    </div>

    <div className="col">
      <h5>Über uns</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="./" className="nav-link p-0 text-muted">Kontakt</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Unternehmen</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Release history</a></li>
      </ul>
    </div>

    <div className="col">
      <h5>Hilfe</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="./terms" className="nav-link p-0 text-muted">AGB</a></li>
        <li className="nav-item mb-2"><a href="./privacy" className="nav-link p-0 text-muted">Datenschutzrichtlinien</a></li>

      </ul>
    </div>
  </footer>
</div>
</div>
    )
}

export default Footer
