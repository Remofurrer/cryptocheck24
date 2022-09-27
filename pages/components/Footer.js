import Link from 'next/link'
import React from 'react'

const Footer = ({ref}) => {
  return (
<footer ref={ref} className="p-4 bg-white sm:p-6">
    <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
            <Link href='/'>
                <h2 className='font-semibold text-2xl text-blue-700 cursor-pointer'>Cryptocheck24</h2>            
            </Link>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Service</h2>
                <ul className="text-gray-600 dark:text-gray-400 space-y-4">
                    <li className=" cursor-pointer hover:underline">
                        <Link href="/donate">Spenden</Link>
                    </li>
                    <li className="text-gray-400">
                        Mitglied werden
                        <p className='text-gray-400 text-sm'>coming soon!</p>
                    </li>
                    <li className="text-gray-400">
                        Betrügerische Websites
                        <p className='text-gray-400 text-sm'>coming soon!</p>
                    </li>
                    <li className=" cursor-pointer hover:underline">
                        <Link href="/recommend">Wir empfehlen</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Über uns</h2>
                <ul className="text-gray-600 dark:text-gray-400 space-y-4">
                    <li>
                        <Link href="/about" className='hover:underline'>Über Cryptocheck24</Link>
                    </li>
                    <li>
                        <Link href="/news" className='hover:underline'>News</Link>
                    </li>
                    <li>
                        <Link href="/contact" className='hover:underline'>Kontakt</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Rechtliches</h2>
                <ul className="cursor-pointer space-y-4">
                    <li>
                        <Link href="/privacy" className='hover:underline'>Datenschutz</Link>
                    </li>
                    <li>
                        <Link href="/terms" className='hover:underline'>AGB</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>

  )
}

export default Footer