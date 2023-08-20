'use client'
import Image from 'next/image';
import { useState } from 'react';
import Documentation from '@components/documentation';
import data from '@utils/data';

export default function Home() {

const d=data();
  
const [title,setTitle]=useState(d.documentation.title)
const [body,setBody]=useState(d.documentation.body)
const [image,setImage]=useState("/assets/images/header/"+d.documentation.image)


  return (
    <section className='w-full gap-2 flex-row max-sm:flex-wrap'> 
       
        <div> 
            
           <div className='flex mb-4 max-sm:flex-wrap'>
            
                {
               

           Object.keys(d).map((key,index)=>{
            let title=d[key].title
            let body=d[key].body
            let image="/assets/images/header/"+d[key].image
              return (
                
                          <div key={Math.random()} className='tab' onClick={()=>{setTitle(title);setBody(body);setImage(image)}}>
                              <b> {title} </b>
                          </div>
                        )
                    })
                          
                /* */}
           </div>
            

        </div>
        <div>
        <Documentation title={title} body={body} image={image}/>
        </div>
    </section>
  )
}
