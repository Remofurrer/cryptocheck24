import React, {useState} from 'react'
import { Link} from 'react-router-dom'
import data from "./data";

function Hero() {

  const result = data.length;

//1. flatten array
  const filter = data.flatMap(obj => {
    return obj.currencies.map(currency => currency.name)
  })
//2. avoid duplication
  const set = [...new Set(filter)]
//3. getting the length of the new flattened array without duplications
  const newResult = set.length



    return (
<div className="container mt-5 col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="../images/hero.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3">Easy shopping mit Kryptowährungen</h1>
        <p className="lead">Dass Kryptowährungen für den Finanzmarkt der Zukunft mehr sein werden als ein reines Anlageobjekt, zeigt die stetig wachsende Zahl der Anbieter, die sie als alternatives Zahlungsmittel akzeptieren. Wir zeigen euch welche Unternehmen diese bereits als Zahlungsmittel akzeptieren und somit zu den innovativen Vorreitern gehören.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <Link to="/explore"><button type="button" className="btn btn-hero btn-lg px-4 me-md-2">Unternehmen finden</button></Link>
        </div>
        <div className="statistics-container col-lg-6">
          <div className="statistics-leftside">
            <h3 className="statistics-title">{result}</h3>
            <p className="statistics-subtitle">aktive Unternehmen</p>
          </div>
          <div className="statistics-rightside">
          <h3 className="statistics-title">{newResult}</h3>
            <p className="statistics-subtitle">verfügbare Kryptowährungen</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Hero
