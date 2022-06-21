import React from 'react'

function Customers() {
    return (
        <div className="container">
        <h1 className="customers d-flex justify-content-center">Für Kunden</h1>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 card-container">
      <div className="feature col card-element">
        <div className="feature-icon d-inline-flex bg-primary bg-gradient text-white fs-2 mb-3">
        </div>
        <img className="customers-card-img card-fair" src="../images/handshake.png" />
        <h2 className="customers-title">Fair</h2>
        <p className="customers-subtitle">Bezahlen Sie 1 zu 1 die angezeigten Kosten mit Ihrer Kryptowöhrung und der Händler erhält den Betrag in einer Fiat Währung.</p>

      </div>
      <div className="feature col card-element">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-primary bg-gradient text-white fs-2 mb-3">
        </div>
        <img className="customers-card-img card-transparent" src="../images/door.png" />
        <h2 className="customers-title">Transparent</h2>
        <p className="customers-subtitle">Zahlungen mit Kryptowährungen sind transparent und frei von versteckten Gebühren.</p>

      </div>
      <div className="feature col card-element">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-primary bg-gradient text-white fs-2 mb-3">
        </div>
        <img className="customers-card-img card-anonym" src="../images/anonymous.png" />
        <h2 className="customers-title">Anonym</h2>
        <p className="customers-subtitle">In der heutigen Zeit ist Datenschutz wichtiger den je. Ihr Name taucht in der Blockchain nicht auf.</p>

      </div>
    </div>
        </div>
    )
}

export default Customers
