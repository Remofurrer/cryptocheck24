import React from 'react'
import Navigation from '../components/Navigation'

function Releasehistory() {
    return (
        <div>
            <Navigation />
            <section className="release-section container">
                <div className="title text-center">
                    <h3>Release Historie</h3>
                </div>
                <div className="release-section-title">
                    <subtitle>24 Juni 2022</subtitle>
                    <h4 title="version 0.1.0">Version 0.1.0</h4>
                </div>
                <div className="release-section-body">
                    <ul>
                        <li>Implementierung der benötigten Funktionen</li>
                        <li>Crypto Icons implementierung</li>
                        <li>Einfügen von Analyse Tools</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Releasehistory
