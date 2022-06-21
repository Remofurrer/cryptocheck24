import React from 'react'

function Companies() {
    return (
        <div className="container">
        <h1 className="companies d-flex justify-content-center">Für Unternehmen</h1>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 card-container">
      <div className="feature col card-element">
        <div className="feature-icon d-inline-flex bg-primary bg-gradient text-white fs-2 mb-3">
        </div>
        <img className="companies-card-img card-fast" src="../images/clock.png" />
        <h2 className="companies-title">Schnell</h2>
        <p className="companies-subtitle">Dank dem bezahlen mit Kryptowährungen erhalten Sie Ihr Geld innert wenigen Sekunden und nicht erst in Tagen.</p>

      </div>
      <div className="feature col card-element">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-primary bg-gradient text-white fs-2 mb-3">
        </div>
        <img className="companies-card-img card-profits" src="../images/profits.png" />
        <h2 className="companies-title">Kostensparend</h2>
        <p className="companies-subtitle">Vermeiden Sie hohe Transaktionsgebühren und erhalten Sie mehr Geld für Ihre Waren oder Dienstleistungen.</p>

      </div>
      <div className="feature col card-element">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-primary bg-gradient text-white fs-2 mb-3">
        </div>
        <img className="companies-card-img card-uptrend" src="../images/increase.png" />
        <h2 className="companies-title">Umsatzsteigernd</h2>
        <p className="companies-subtitle">Erreichen Sie eine grössere oder gar völlige neue Kundschaft und steigern Sie so ihren Umsatz und Profit.</p>

      </div>
    </div>
        </div>
    )
}

export default Companies
