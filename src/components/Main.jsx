import React from 'react'

const Main = () => {
  return (
    <main className='h-[100vh] absolute top-0 z-50 w-full flex flex-col items-center justify-center'>
        <h1 className='text-slate-50 text-xl md:text-2xl lg:text-3xl'>Esteban Martínez</h1>
        <h2 className='text-slate-50 text-xl md:text-2xl lg:text-3xl'>Desarrollador de software</h2>
        <div className='text-slate-50'>
        <a href="" target="_blank">
        <svg width="60px" height="60px" viewBox="0 0 48 48" 
            fill="currentColor" x="226" y="226" role="img"
            xmlns="http://www.w3.org/2000/svg"><g fill="currentColor">
            <circle cx="15.64" cy="13.46" r=".75" fill="currentColor"/>
            <path fill="none" stroke="currentColor" strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M15.64 16.93v14.98m17.47 0V22.3a5.83 5.83 0 0 0-5.82-5.82a5.83 5.83 0 0 0-5.83 5.82v9.61m0-9.61v-5.37"/>
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M40.5 5.5h-33a2 2 0 0 0-2 2v33a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2v-33a2 2 0 0 0-2-2z"/>
            </g>
      </svg>

      </a>
      <a href="" target="_blank">
        <svg width="60px" height="60px" viewBox="0 0 48 48" 
            fill="currentColor" x="226" y="226" role="img" 
            xmlns="http://www.w3.org/2000/svg"><g fill="currentColor">
            <path fill="none" stroke="currentColor" strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M24 2.5a21.5 21.5 0 0 0-6.8 41.9c1.08.2 1.47-.46 1.47-1v-3.65c-6 1.3-7.24-2.88-7.24-2.88A5.7 5.7 0 0 0 9 33.68c-1.95-1.33.15-1.31.15-1.31a4.52 4.52 0 0 1 3.29 2.22c1.92 3.29 5 2.34 6.26 1.79a4.61 4.61 0 0 1 1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29 8.29 0 0 1 2.22-5.77a7.68 7.68 0 0 1 .21-5.69s1.8-.58 5.91 2.2a20.46 20.46 0 0 1 10.76 0c4.11-2.78 5.91-2.2 5.91-2.2a7.74 7.74 0 0 1 .21 5.69a8.28 8.28 0 0 1 2.21 5.77c0 8.26-5 10.07-9.81 10.61a5.12 5.12 0 0 1 1.46 4v5.9c0 .71.39 1.24 1.48 1A21.5 21.5 0 0 0 24 2.5"/></g>
        </svg>
      </a>
    
    </div>
    </main>
  )
}

export default Main