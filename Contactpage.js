import React from 'react'
import Navigation from '../components/Navigation';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contactpage() {
  return (
    <div>
      <Navigation />
      <Form className="container">
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Vollständiger Name</Form.Label>
        <Form.Control type="text" placeholder="Max Muster" required />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>E-mail Adresse</Form.Label>
        <Form.Control type="email" placeholder="max.muster@icloud.com" required />
        <Form.Text className="text-muted">
          Wir werden deine Daten niemals mit anderen teilen, versprochen.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Passwort</Form.Label>
        <Form.Control type="password" placeholder="Passwort" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Hiermit bestätige ich meine Angaben." required />
      </Form.Group>
      <Button variant="primary btn btn-card" type="submit">
        senden
      </Button>
    </Form>
    </div>
  )
}

export default Contactpage
