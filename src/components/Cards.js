import React, { useState } from 'react'
import data from "./data"
import {Card} from "react-bootstrap"
import {Button} from "react-bootstrap"

function Cards() {

    const [searchTerm, setSearchTerm] = useState("")

    const renderCards = ((item, id) => {

    return (
      <Card key={id} className="card-item">
        <div className="row">
        <div className="col-md-12 col-l-12">
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            <div>
                <p>{item.categories}</p>
                {item.description}
            </div>
          </Card.Text>
          {Object.values(item.currencies).map((subItem, index) => (
        <div className="icons" key={index}>
            <img
            className="crypto__icons"
            alt="crypto icon"
            key={index}
            src={`../../images/icons/${subItem.coin}`}
            />
        </div>
        ))}
            <p className="pt-2">{item.address}</p>
        <div>
        <Button href={item.link} variant="btn btn-card">Anbieter ansehen</Button>
        </div>
        </Card.Body>
        </div>
        </div>
        <Card.Footer className="text-muted card-footer">
            <p>Mitglied seit: {item.memberDate}</p>
            {item.type}
        </Card.Footer>
      </Card>
    )
})
    return (
        <div className="container cards">
            <input placeholder="Suchbegriff..." className="searchbar" onChange={event => {setSearchTerm(event.target.value)}}/>
        {data.filter((val) => {
            if (searchTerm == "") {
                return val
            } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            }
        }).map(renderCards)}
        </div>
        )
    }

export default Cards
