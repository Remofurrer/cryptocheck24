import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const recommend = () => {
  return (
    <div>
        {/* header */}
        <div className='pt-40 pb-28 px-4'>
            <h2 className='text-center text-4xl font-semibold'>Entecken Sie unsere Partner</h2>
            <p className='text-center py-4'>Es ist uns ein grosses Anliegen unseren Nutzern eine Auswahl an seriösen Partnern zu empfehlen.</p>
        </div>

        {/* partner card seection */}
        <div className='flex flex-col justify-center items-center md:px-10 lg:flex-row lg:space-x-4 pb-28'>
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Coinbase</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Coinbase ist die zweitgrösste Crypto Tradingplattform weltweit. Sicheres Kaufen und Handeln von diversen Kryptowährungen.</p>
                    <a href="https://www.coinbase.com/de/" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Partner besuchen
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                </div>
            </div>

            <div className="my-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div className="p-5">
                    <a href="">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ledger Live</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Die Cold Wallets von Ledger Live gehören zu den besten und sichersten weltweit. Bewahren Sie ihre Kryptowährungen sicher auf.</p>
                    <a href="https://shop.ledger.com?r=2aaf1e1eedba" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Partner besuchen
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                </div>
            </div>

            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Blockpit.io</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Die grösste schweizer Plattform zur automatischen Abhandlung deiner Cryptosteuer.</p>
                    <a href="https://blockpit.io/" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Partner besuchen
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default recommend