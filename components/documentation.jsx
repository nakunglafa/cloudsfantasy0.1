import React, { useState,useEffect } from 'react'
import Image from 'next/image';

const Documentation = ({
    title,body,image
}) => {
  return (
    <div className="max-sm:flex-wrap flex-between gap-5 my-10" >

        {/** image */}


        <div className='sm:w-1/2'>
            <Image alt="featured image" src={image} width={600} height={600} key={Math.random()} className='rounded-md shadow-xl animate-fade-down animate-once animate-ease-in-out' />
        </div>


        {/** for the text */}
        <div className='sm:w-1/2'>
                    <h1 className='head_text'> {title}</h1>
                    <br />
                    <p key={Math.random()} className='animate-fade-down animate-once animate-ease-in-out'>
                    {body}
                    </p>
        </div>
    </div>
  )
}

export default Documentation