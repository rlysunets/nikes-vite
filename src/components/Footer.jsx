import React from 'react'

const Footer = ({ data: { titles, links } }) => {
   const year = new Date().getFullYear()

   return (
      <footer className="bg-theme pt-7 pb-5">
         <div className="nike-container text-slate-200">
            <div className="grid grid-cols-3 gap-5">
               {titles.map(el => (
                  <h3 key={el.title} className="text-lg lg:text-base md:text-xs uppercase font-semibold">{el.title}</h3>
               ))}
               {links.map((list, i) => (
                  <ul key={i} className="grid items-center gap-1">
                     {list.map(li => (
                        <li key={li.link} className="text-sm sm:text-xs">{li.link}</li>
                     ))}
                  </ul>
               ))}
            </div>
         </div>
         <div className='mt-5 text-center'>
            <p className='text-sm md:text-center'>
               Copyright
               <sup className='text-base font-bold'>&copy;</sup>
               All Reserved Rights
               <span className='font-semibold mx-1'>Roman Lysunets</span>
               {year}
            </p>
         </div>
      </footer>
   )
}

export default Footer