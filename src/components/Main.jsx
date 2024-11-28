import React, {useEffect, useState, useRef} from 'react'
import About from './About';

const Main = () => {
  const mainRef = useRef(null);
  const [ isOpacque, setOpacque ] = useState(false);
  const [ showAbout, setShowAbout ] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setOpacque(true);

      setShowAbout(true);
      document.body.style.overflow = 'auto';

    }, 3000);

    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <main ref={mainRef} className={`${isOpacque ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[-50%]'} custom h-[100vh] absolute top-0 z-50 w-full flex flex-col gap-5 items-center justify-center transition-all duration-700 ease-in-out`}>
        <h1 className='text-slate-50 custom-font text-2xl md:text-3xl lg:text-4xl'>Esteban Martínez</h1>
        <span className='custom-border'></span>
        <h2 className='text-slate-50 custom-font text-xl md:text-2xl lg:text-3xl'>Desarrollador de software</h2>
        <span className='custom-border sec'></span>
      <div className='text-slate-50 flex gap-3'>
        <a href="" target="_blank">
        <svg width="60px" height="60px" viewBox="0 0 48 48" 
            fill="currentColor" x="226" y="226" role="img"
            xmlns="http://www.w3.org/2000/svg"><g fill="currentColor">
            <circle cx="15.64" cy="13.46" r=".75" fill="currentColor"/>
            <path fill="none" stroke="currentColor" strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M15.64 16.93v14.98m17.47 0V22.3a5.83 5.83 0 0 0-5.82-5.82a5.83 5.83 0 0 0-5.83 5.82v9.61m0-9.61v-5.37"/>
            <path fill="none" stroke="#0e76a8" strokeLinecap="round" strokeLinejoin="round" d="M40.5 5.5h-33a2 2 0 0 0-2 2v33a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2v-33a2 2 0 0 0-2-2z"/>
            </g>
        </svg>

        </a>
        <a href="" target="_blank">
        <svg width="60px" height="60px" viewBox="0 0 48 48" 
            fill="currentColor" x="226" y="226" role="img" 
            xmlns="http://www.w3.org/2000/svg"><g fill="currentColor">
            <path fill="#f2fff2" stroke="currentColor" strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M24 2.5a21.5 21.5 0 0 0-6.8 41.9c1.08.2 1.47-.46 1.47-1v-3.65c-6 1.3-7.24-2.88-7.24-2.88A5.7 5.7 0 0 0 9 33.68c-1.95-1.33.15-1.31.15-1.31a4.52 4.52 0 0 1 3.29 2.22c1.92 3.29 5 2.34 6.26 1.79a4.61 4.61 0 0 1 1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29 8.29 0 0 1 2.22-5.77a7.68 7.68 0 0 1 .21-5.69s1.8-.58 5.91 2.2a20.46 20.46 0 0 1 10.76 0c4.11-2.78 5.91-2.2 5.91-2.2a7.74 7.74 0 0 1 .21 5.69a8.28 8.28 0 0 1 2.21 5.77c0 8.26-5 10.07-9.81 10.61a5.12 5.12 0 0 1 1.46 4v5.9c0 .71.39 1.24 1.48 1A21.5 21.5 0 0 0 24 2.5"/></g>
        </svg>
        </a>
    
    </div>
    <section className='text-slate-50 flex w-full justify-center gap-5'>
      <a 
      className="flex items-center text-sm md:text-base lg:text-lg"
      href="">
        Me
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 20 20">
          <g fill="currentColor" fillRule="evenodd" clipRule="evenodd"><g opacity="0.2">
          <path d="M12.206 5.848a1.5 1.5 0 0 1 2.113.192l3.333 4a1.5 1.5 0 1 1-2.304 1.92l-3.334-4a1.5 1.5 0 0 1 .192-2.112"/>
          <path d="M12.206 16.152a1.5 1.5 0 0 1-.192-2.112l3.334-4a1.5 1.5 0 0 1 2.304 1.92l-3.333 4a1.5 1.5 0 0 1-2.113.192"/>
          <path d="M16 11a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1 0-3h8A1.5 1.5 0 0 1 16 11"/></g>
          <path d="M11.347 5.616a.5.5 0 0 1 .704.064l3.333 4a.5.5 0 0 1-.768.64l-3.333-4a.5.5 0 0 1 .064-.704"/>
          <path d="M11.347 14.384a.5.5 0 0 1-.064-.704l3.333-4a.5.5 0 0 1 .768.64l-3.333 4a.5.5 0 0 1-.704.064"/>
          <path d="M15.5 10a.5.5 0 0 1-.5.5H5a.5.5 0 0 1 0-1h10a.5.5 0 0 1 .5.5"/></g></svg>
        </a>
      <a 
      className="flex items-center text-sm md:text-base lg:text-lg"
      href="">
        Proyectos
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 20 20">
          <g fill="currentColor" fillRule="evenodd" clipRule="evenodd"><g opacity="0.2">
          <path d="M12.206 5.848a1.5 1.5 0 0 1 2.113.192l3.333 4a1.5 1.5 0 1 1-2.304 1.92l-3.334-4a1.5 1.5 0 0 1 .192-2.112"/>
          <path d="M12.206 16.152a1.5 1.5 0 0 1-.192-2.112l3.334-4a1.5 1.5 0 0 1 2.304 1.92l-3.333 4a1.5 1.5 0 0 1-2.113.192"/>
          <path d="M16 11a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1 0-3h8A1.5 1.5 0 0 1 16 11"/></g>
          <path d="M11.347 5.616a.5.5 0 0 1 .704.064l3.333 4a.5.5 0 0 1-.768.64l-3.333-4a.5.5 0 0 1 .064-.704"/>
          <path d="M11.347 14.384a.5.5 0 0 1-.064-.704l3.333-4a.5.5 0 0 1 .768.64l-3.333 4a.5.5 0 0 1-.704.064"/>
          <path d="M15.5 10a.5.5 0 0 1-.5.5H5a.5.5 0 0 1 0-1h10a.5.5 0 0 1 .5.5"/></g></svg>
        </a>
      <a 
      className="flex items-center text-sm md:text-base lg:text-lg"
      href="">
        Contacto
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 20 20">
          <g fill="currentColor" fillRule="evenodd" clipRule="evenodd"><g opacity="0.2">
          <path d="M12.206 5.848a1.5 1.5 0 0 1 2.113.192l3.333 4a1.5 1.5 0 1 1-2.304 1.92l-3.334-4a1.5 1.5 0 0 1 .192-2.112"/>
          <path d="M12.206 16.152a1.5 1.5 0 0 1-.192-2.112l3.334-4a1.5 1.5 0 0 1 2.304 1.92l-3.333 4a1.5 1.5 0 0 1-2.113.192"/>
          <path d="M16 11a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1 0-3h8A1.5 1.5 0 0 1 16 11"/></g>
          <path d="M11.347 5.616a.5.5 0 0 1 .704.064l3.333 4a.5.5 0 0 1-.768.64l-3.333-4a.5.5 0 0 1 .064-.704"/>
          <path d="M11.347 14.384a.5.5 0 0 1-.064-.704l3.333-4a.5.5 0 0 1 .768.64l-3.333 4a.5.5 0 0 1-.704.064"/>
          <path d="M15.5 10a.5.5 0 0 1-.5.5H5a.5.5 0 0 1 0-1h10a.5.5 0 0 1 .5.5"/></g></svg>
      </a>
    </section>
    
    </main>
    {showAbout && <About></About>}
    </>
  )
}

export default Main