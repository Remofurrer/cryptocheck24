import React from 'react';

function Contact() {
    return (
<div className="container col-xl-10 col-xxl-8 px-4 py-5">
    <div className="row align-items-center g-lg-5 py-5">
      <div className="col-lg-7 text-center text-lg-start">
        <h1 className="display-4 fw-bold lh-1 mb-3">Bereit Mitglied zu werden?</h1>
        <p className="col-lg-10 fs-4">Eröffnen Sie Ihren Kunden einen weiteren Zahlungskanal und präsentieren Sie sich auf unserer Plattform.</p>
      </div>
      <div className="col-md-10 mx-auto col-lg-5">
        <form className="p-4 p-md-5 border rounded-3 bg-light">
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
            <label className="label" for="floatingInput">E-mail Adresse</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingName" placeholder="namePrivat" required />
            <label for="floatingPassword">Vollständiger Name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingName" placeholder="nameCompany" required />
            <label for="floatingPassword">Firma</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" required /> 
              <small className="text-muted"> Ich akzeptiere hiermit die Bedingungen von Cryptocheck24.</small>
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary btn-contact" type="submit">Anfrage senden</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Contact
