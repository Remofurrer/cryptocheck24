import React, {useState, useEffect} from 'react'
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import Image from 'next/image';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
	return builder.image(source);
};

{/* two different useState / one to hold the data for categories array and one to hold the data for currencies array */}
const Member = () => {
  const [allCategories, setAllCategories] = useState(null);
  const [allCurrencies, setAllCurrencies] = useState(null);

  {/* useEffect to fetch category data */}
  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "category"] {
        title
      }`
    )
    .then((data) => setAllCategories(data))
    .catch(console.error)
  }, [])

  {/* useEffect to fetch currency data */}
  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "currency"] {
        title,
        image
      }`
    )
    .then((data) => setAllCurrencies(data))
    .catch(console.error)
  }, [])

  {/* returning the datas and creating a form for new members */}
  return (
    <div className='pt-40 pb-28'>
          <div className='text-center pb-4'>
            <h2 className='font-semibold text-4xl pb-4'>Werden Sie Mitglied</h2>
            <p>Erweitern sie jetzt Ihre Reichweite und zeigen Sie welche Kryptowährungen Sie als Zahlungsmittel akzeptieren.</p>
        </div>

        <div className='px-10 lg:px-40'>
          <form className="mb-6 space-y-4">

          {/* company name */}
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Firmenname</label>
          <div className="relative">
                <input type="text" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mustermann AG" required />
            </div>

          {/* choose category */}
          <label htmlFor="small" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Kategorie wählen</label>
            <select id="small" className="block p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>        <option selected>Kategorie wählen</option>
            {allCategories &&
            allCategories?.map((category, id) => (
              <option key={id} value={category.title}>{category.title}</option>
            ))}
          </select>

          {/* choose currencies */}
          <div className='space-y-1'>
          <label htmlFor="small" className="form-check-label block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Kryptowährungen wählen</label>
            {allCurrencies &&
            allCurrencies.map((currency, id) => (
              <div key={id} className='flex items-center space-x-4 border rounded w-60 p-2 hover:bg-blue-300'>
                <img 
                  src={urlFor(currency.image).url()}
                  width='30'
                  height='30' 
                  alt="Cryptocurrency icons" />
                <input id="react-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label htmlFor="react-checkbox" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{currency.title}</label>
              </div>
            ))}
            </div>


          {/* email adress company */}
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">E-Mail Adresse</label>
            <div className="relative">
                <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="beispiel@cryptocheck24.org" required />
            </div>

          {/* url */}
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">URL zu Ihrer Homepage</label>
            <div className="relative">
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://www.mustermann.ch" required />
            </div>

          {/* text area for company description */}
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Beschreibung</label>
          <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Was macht Ihr Unternehmen...?" required></textarea>


          {/* Image */}
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="file_input">Bild hochladen</label>
          <input className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">PNG oder JPG</p>
          </form>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Formular senden</button>

        </div>
    </div>
  )
}

export default Member