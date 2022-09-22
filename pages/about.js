import React from 'react'

const about = () => {
  return (
    <div className='pt-40 pb-28 px-4 text-center lg:p-40'>

        <div>
            <h2 className='text-4xl font-semibold pb-4'>Was ist Cryptocheck24</h2>
            <p>Der Zahlungsbereich rund um Kryptowährungen wächst rasant. Deshalb finden wir es wichtig den Nutzern weltweit eine einfache und übersichtliche Möglichkeit zu bieten
                Unternehmen zu finden welche Crypto als Zahlungskanal anbieten. Cryptocheck24 fungiert dabei als Suchplattform für Unternehmen, Organisationen, Vereine und Individuelle Personen in diesem Bereich.
            </p>
        </div>

        <div>
            <h2 className='text-3xl font-semibold text-center pt-10 pb-10'>Dafür stehen wir</h2>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <h2 className='text-xl font-semibold'>Sicherheit</h2>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                    </svg>
                    <h2 className='text-xl font-semibold'>Transparenz</h2>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
                    </svg>
                    <h2 className='text-xl font-semibold'>Einfachheit</h2>
                </div>
            </div>

        </div>

    </div>
  )
}

export default about