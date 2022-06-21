import React from 'react'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import Accordion from 'react-bootstrap/Accordion';

function Questions() {

    const featureQuestions = [
        {
          id: 1,
          question: "What is Cryptocheck24 and what are you doing?",
          answer: "CryptoCheck24 acts as an overview and brokerage platform and brings together companies that accept cryptocurrencies as a means of payment with customers who own cryptocurrencies."
        },
        {
          id: 2,
          question: "From which countries do you list companies that already accept cryptocurrencies?",
          answer: "CryptoCheck24 works with companies from all over the world that accept cryptocurrencies as a means of payment."
        },
        {
          id: 3,
          question: "I know a company that accepts cryptocurrencies but is not listed with you, what should I do?",
          answer: "We try to publish as many companies on our platform as possible. But of course we don't know every single one of them either and are therefore happy when we receive input from our customers who know the companies that we have so far missed. Please contact us at: cryptocheck24@icloud.com"
        },
        {
          id: 4,
          question: "How can I present my company on Cryptocheck24?",
          answer: "Do you already accept cryptocurrencies as a means of payment? Very good, then you have already taken the biggest step. Simply fill out our form under `Become a member` and we will contact you within 24 hours to activate your company."
        },
        {
          id: 5,
          question: "Is CryptoCheck24 free?",
          answer: "As of this writing, CryptoCheck24 is absolutely free. But we are honest and also say that it will not stay like this forever. We also have to pay for our work. However, we cannot say at this point in time when this will be the case. However, we will inform our customers of this in good time."
        },
        {
          id: 6,
          question: "I want to integrate cryptocurrencies as a means of payment, what to do?",
          answer: "We also offer a solution for this problem. Our partner BitcoinSuisse is the ideal contact and looks forward to discussing your concerns with you. We guarantee you a quick and easy integration with the best provider in Switzerland."
        },
        {
          id: 7,
          question: "When was CryptoCheck24 founded?",
          answer: "CryptoCheck24 was founded in 2022 and since then has strived to become the best overview platform for crypto payments."
        },
        {
          id: 8,
          question: "How did cryptoCheck24 come about?",
          answer: "CryptoCheck24 was born out of a simple desire to find companies that accept cryptocurrencies as a payment method. However, since there was no clean and uniform platform in this regard up to now, a separate platform was created."
        },
        {
          id: 9,
          question: "Is your platform also available as a mobile app version?",
          answer: "At the moment this is not the case. However, in the near future we will also launch a native iOS and Android version."
        },
      ];

      const supportQuestions = [
        {
          id: 1,
          question: "How can I buy Cryptocurrencies?",
          answer: "CryptoCheck24 itself does not offer the possibility to buy, sell or trade cryptocurrencies. But thanks to our cooperation with the largest online banking provider in Switzerland, Swisquote, we offer our customers an ideal opportunity to acquire cryptocurrencies quickly and easily."
        },
        {
          id: 2,
          question: "Do you offer any support?",
          answer: "Sure we do, don't hesitate to contact us if you have any qustions or unclarety. We're trying to get back to you in 24h after we receive your email."
        },
        {
          id: 3,
          question: "How can I contact you?",
          answer: "Just contact us by mail under: cryptocheck24@icloud.com"
        },
      ]

      const featureData = featureQuestions.map((item, id) => {
          return (
            <Accordion key={id} className="container">
            <Accordion.Item eventKey="1">
                <Accordion.Header>{item.question}</Accordion.Header>
                <Accordion.Body>{item.answer}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
          )
      })

      const supportData = supportQuestions.map((item, id) => {
        return (
          <Accordion key={id} className="container">
          <Accordion.Item eventKey="2">
              <Accordion.Header>{item.question}</Accordion.Header>
              <Accordion.Body>{item.answer}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
        )
      })

    return (
        <div className="container">
            <Navigation />
            <div className="questions__wrapper text-center">
                <h1 className="py-5 text-center">FAQ</h1>
                <h5>We hope to answer your questions right away.</h5>
            </div>
            <div className="question">
              <h2>Feature Questions</h2>
              {featureData}
            </div>
            <div className="question">
              <h2>Support Questions</h2>
              {supportData}
            </div>
            <Footer />
        </div>
    )
}

export default Questions