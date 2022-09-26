import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-2'>

        {/* Logo */}
        <Link href="/">
        <div>
            <h2 className='font-semibold text-2xl text-blue-700 cursor-pointer'>Cryptocheck24</h2>
        </div>
        </Link>
    </div>
  )
}

export default Navbar