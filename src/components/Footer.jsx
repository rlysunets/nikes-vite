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
         <div className="mt-5 text-center text-sm sm:text-xs font-semibold">
            <span>developed by</span>
            <a href="https://www.linkedin.com/in/roman-lysunets-21b166225/" target="_blank" title="LinkedIn" className="underline px-1">Roman Lysunets</a>
            <span>{year}</span>
         </div>
      </footer>
   )
}

export default Footer