import React from 'react'

import SocialLink from './utils/SocialLink'
import Video from './utils/Video'

const Hero = ({ heroAPI }) => {
   const { title, subtitle, img, btntext, videos, socialLinks } = heroAPI

   return (
      <>
         <div className="relative h-auto w-auto flex flex-col mb-32 lg:mb-20 sm:mb-10">
            <div className="bg-theme clip-path h-[85vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0"></div>
            <div className="relative grid justify-items-center items-center nike-container">
               <div className="grid justify-items-center items-center mt-28 md:mt-14">
                  <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-extrabold text-slate-200">{title}</h1>
                  <h2 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-extrabold text-slate-200">{subtitle}</h2>
                  <button type="button" className="button-theme bg-slate-200 shadow-slate-200 rounded-xl my-5">{btntext}</button>
                  <div className="absolute top-[45%] left-0">
                     {videos && videos.map((video, i) => <Video key={i} video={video} />)}
                  </div>

                  <div className="absolute top-[45%] right-0">
                     {socialLinks && socialLinks.map((social, i) => <SocialLink key={i} social={social} />)}
                  </div>
               </div>
               <div className="mt-8 lg:mt-4">
                  <img
                     src={img}
                     alt="hero banner"
                     className="w-auto h-[45vh] lg:h-[35vh] md:h-[30vh] sm:h-[20vh] xsm:h-[18vh] transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill"
                  />
               </div>
            </div>
         </div>
      </>
   )
}

export default Hero