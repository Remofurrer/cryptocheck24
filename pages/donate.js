import React from 'react';
import Image from 'next/image';
import btc from '../public/btc.png';
import eth from '../public/eth.png';
import xrp from '../public/xrp.png';

const donate = () => {
  return (
    <div className='pt-40'>
        <div className='lg:flex items-center px-10 lg:space-x-10'>
        {/* leftside */}
        <div className='px-4 lg:w-3/5'>
            <h2 className='text-center text-4xl font-semibold'>Hilf uns dabei Crypto als Zahlungsmittel noch weiter zu verbreiten.</h2>
            <p className='text-center py-4'>Ihre Spende hilft uns Cryptocheck24 weiter auszubauen und neue Features zu implementieren.</p>
        </div>
        {/* rightside */}
        <div className='px-4 pt-5 lg:w-3/4'>
            {/* bitcoin adress */}
            <div className='flex items-center space-x-2 pb-2'>
            <Image 
                src={btc}
                width='28'
                height='28'
                alt="bitcoin icon"
                />
            <label className='font-semibold text-gray-600'>Bitcoin (BTC):</label>
            </div>
            <input type="text" id="disabled" aria-label="disabled" className="focus:outline-none bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3" value="bc1qseaew3xcxrhqtdxv4j26zjth68djkfyx7at0el" disabled="" readOnly="" />

            {/* ethereum adress */}
            <div className='py-4'>
                <div className='flex items-center space-x-2 pb-2'>
                <img
                    src={eth}
                    width='28'
                    height='28'
                    alt="ethereum icon"
                    />
                <label className='font-semibold text-gray-600'>Ethereum (ETH):</label>
                </div>
                <input type="text" id="disabled" aria-label="disabled" className="focus:outline-none bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3" value="0x850C2EED5Af243D693d9F9e3E84827d82D1f6589" disabled="" readOnly="" />
            </div>

            {/* xrp adress */}
            <div className='flex items-center space-x-2 pb-2'>
            <img
                src={xrp}
                width='28'
                height='28'
                alt="xrp icon"
                />
            <label className='font-semibold text-gray-600'>Ripple (XRP):</label>
            </div>
            <input type="text" id="disabled" aria-label="disabled" className="focus:outline-none bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3" value="rNS9WeGnucGZyNNwnjwQAaxo3bFKf5eXoN" disabled="" readOnly="" />
        </div>
        </div>

        <div className=''>
            <h2 className='text-center font-semibold text-3xl pb-4 pt-28'>Wie verwenden wir Ihre Spende?</h2>
            <p className='px-10 text-center lg:px-40 pb-28'>Wir fühlen uns dazu verpflichtet die Nutzung von Cryptocheck24 für all unsere Nutzer kostenlos zu halten. Da der Betrieb sowie die Weiterentwicklung einer solchen Plattform mit sehr viel Aufwand und hohen Kosten verbunden ist, steht jedoch ausser Frage.
                Aus diesem Grund freuen wir uns über jede Spende von unseren Nutzern und / oder Mitgliedern. Ihr seit der Grund das ein solch tolles Projekt bestehen kann und dabei hilft die Crypto Branche noch weiter auszubauen.
            </p>
        </div>

    </div>
  )
}

export default donate