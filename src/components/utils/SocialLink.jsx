import React from 'react'

const SocialLink = ({ social }) => {

   return (
      <div className="w-8 h-8 lg:w-6 lg:h-6 sm:w-4 sm:h-4 mb-4">
         <a href={social.link} target="_blank">
            <img src={social.icon} alt="icon" className="cursor-pointer transition-all duration-200 hover:scale-110" />
         </a>
      </div>
   )
}

export default SocialLink