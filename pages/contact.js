import React from 'react';
import Link from 'next/link';


const contact = () => {
  return (
    <div className='pt-40 pb-28'>
        <div>
            <h2 className='text-center font-semibold text-4xl pb-4'>Kontaktieren Sie uns</h2>
        </div>
        <div className='px-10 space-y-4 lg:px-40'>

        <div className="mb-6">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vollständiger Name</label>
    <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Max Mustermann" required />
  </div>

            <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">E-Mail Adresse</label>
            <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
            </div>
                <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="beispiel@cryptocheck24.org" required />
            </div>

            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Was ist Ihr Anliegen?</label>
            <textarea id="message" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hinterlassen Sie uns eine Nachricht..." required></textarea>

            <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
                <input id="terms" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
            </div>
                <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ich akzeptiere die <Link href="/terms" className="text-blue-600 hover:underline dark:text-blue-500">AGB </Link> und <Link href="/privacy" className="text-blue-600 hover:underline dark:text-blue-500">Datenschutzrichtlinien</Link> </label>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">senden</button>
        </div>
    </div>
  )
}

export default contact