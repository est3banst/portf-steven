import React, { useState, useEffect, useRef } from 'react'
import Work from './Work';

const About = () => {
    const meAbout = useRef(null);

  return (
    <>
    <div 
    ref={meAbout}
    className='bg-[#020202] h-[100vh] w-full flex flex-col justify-evenly gap-3 md:gap-4 lg:gap-5 p-4'>
       <section className='flex flex-col gap-6 w-full'>
       <h3 className='text-slate-50 text-base md:text-xl lg:text-2xl'>
            About Me
        </h3>
        <hr className='w-[20%]'/>
        <p className='text-slate-50 text-base md:text-xl lg:text-2xl'>Apasionado por la ingenieria de software</p>
        <p className='text-slate-50 text-base md:text-xl lg:text-2xl'>Desde Uruguay</p>
        <p className='text-slate-50 text-base md:text-xl lg:text-2xl'>Siempre aprendiendo...</p>
        <p className='text-slate-50 text-base md:text-xl lg:text-2xl'>Dominio en tecnologías web</p>
        <p className='text-slate-50 text-xl md:text-2xl lg:text-3xl'>El software como trampolín para impulsar tus ideas</p>

       </section>
    <section>
    <a 
    className='text-slate-50 flex items-center w-4/5 py-2 md:py-4 justify-around border-solid border-2 border-sky-100'
    href="">
        <p className='text-slate-50 text-xs md:text-xl lg:text-2xl'>
            Podemos colaborar?
            </p>
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 50 50">
        <path fill="currentColor" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"/>
        <path fill="currentColor" d="m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z"/>
        <path fill="currentColor" d="M16 24h17v2H16z"/>
    </svg>
    </a>
    </section>
    </div>
    <Work></Work>
    </>
  
)
}

export default About