import React from 'react'

const Work = () => {
  return (
    <div className='bg-[#020202] h-[100vh] p-4 flex flex-col gap-4'>
        <section className='flex flex-col gap-5'>
        <h3 className='text-slate-50 text-base md:text-xl lg:text-2xl'>Proyectos</h3>
        <hr className='w-[20%]'/>
        <p className='text-slate-50'>Mi stack tecnológico se enfoca en el entorno web</p>
        </section>
        <section className='grid gap-2 grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))]'>
        <article className='custom-box'>
        <a 
        href='https://saltoinstalaciones.com'
        className='max-w-xs'>
            <img 
            className='object-contain'
            src="/imgs/salto-web.png" alt="" />
        </a>
        <p className='text-slate-50 text-xs md:text-sm lg:text-xl my-3 font-extrabold'>Página de contacto a empresa dedicada a instalaciones eléctricas</p>

        </article>
        </section>
    </div>
  )
}

export default Work