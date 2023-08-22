'use client'
import React from 'react'


const Footer = () => {
  return (
    <section className="bottom-0 w-screen shadow-xl p-10 mt-10 mb-10 text-white max-sm:flex-wrap flex gradient_blue gap-2 flex-between">
            <div className='sm:w-1/4'>
                <h1 className='text-2xl'><b>Contact</b></h1>
                <p><b>+351 920 527 602 </b></p>
                <p><b>+91 9495153333 </b></p>
                <p onClick={()=>window.location='mailto:bijuncp@gmail.com'} className='hover:cursor-pointer hover:underline'><b>bijunarayan2022@gmail.com</b></p>
            </div>
            <div className='sm:w-1/4'>
            <h2 className='text-2xl'><b>Address:</b></h2>
                <p>
                    <b>Rua Rosa Damasceno, No: 10 - Arroios <br />Lisboa 1900-396, Portugal</b>
                </p>
            </div>
            <div className='sm:w-2/4 '>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d778.0527946506502!2d-9.132895006683645!3d38.735915946360215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1933bda04fec9d%3A0xab6507148304de8e!2sR.%20Rosa%20Damasceno%2010%2C%201900-180%20Lisboa!5e0!3m2!1sen!2spt!4v1692471090656!5m2!1sen!2spt" 
                    className='mx-2 w-full shadow-lg border-spacing-2' style={{border:1}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    
            </div>
      
    </section>
  )
}

export default Footer