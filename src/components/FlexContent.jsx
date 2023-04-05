import React from 'react'

const FlexContent = ({ isReverse, data }) => {
   const { heading, title, text, btn, url, img } = data
   return (
      <div className={`nike-container flex items-center justify-between gap-4 lg:flex-col lg:justify-center ${isReverse ? "flex-row-reverse" : ""}`}>
         <div className="max-w-lg lg:max-w-none md:text-center grid items-center lg:justify-items-center">
            <h2 className="text-4xl sm:text-3xl font-bold text-gradient">{heading}</h2>
            <h2 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-slate-900 drop-shadow-lg">{title}</h2>
            <p className="xl:text-sm my-4 text-slate-900">{text}</p>
            <a href={url} className="flex items-center mb-8" target={"_blank"} role={"button"}>
               <button type="button" className="button-theme bg-slate-900 shadow-slate-900 text-slate-100 py-1.5">{btn}</button>
            </a>
         </div>
         <div className="flex items-center justify-center max-w-xl lg:max-w-none w-full">
            <img src={img} alt={title} className={`w-auto object-contain transitions-theme ${isReverse ? 'h-60 lg:h-56 md:h-52 sm:h-44 xsm:h-36 rotate-6 hover:-rotate-12' : 'h-72 lg:h-64 md:h-60 sm:h-48 xsm:h-40 rotate-[19deg] hover:rotate-12'}`} />
         </div>
      </div>
   )
}

export default FlexContent