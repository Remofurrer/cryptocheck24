import Link from 'next/link'
import React from 'react'

import { CakeIcon, PlusCircleIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  return (
    <div className='flex justify-between p-2'>

        {/* Logo */}
        <Link href="/">
        <div>
            <h2 className='font-semibold text-2xl text-blue-700 cursor-pointer'>Cryptocheck24</h2>
        </div>
        </Link>

        {/* right side navbar */}
        {/*         <div className='flex space-x-4 items-center'>
            <PlusCircleIcon className='w-8 h-8 hover:text-blue-700 cursor-pointer'/>
            <CakeIcon className='w-8 h-8 hover:text-blue-700 cursor-pointer'/>
        </div> */}

    </div>
  )
}

export default Navbar