import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
  return (
    <section className='w-screen'>
      <div className='hover:cursor-pointer w-full max-sm:flex-wrap flex-between gradient_blue text-white'>

        
            <div className='sm:w-1/5 flex-between' >

              <div className="w-52 h-52 flex-between bg-[url('/assets/images/logo.png')] contain"></div>
                  {/* <Image className='image rounded-sm' src="/assets/images/logo.png" width={500} height={500} alt='logo'/> */}
            </div>


            <div className='sm:w-4/5'>
                <h1 className=' head_text mx-10 mb-10 text-white'>CLOUDS FANTASY | HUMAN RESOURCES MAN POWER CONSULTINCY TOURS AND TRAVEL</h1>
            </div>


      </div>
    </section>
  )
}

export default Nav