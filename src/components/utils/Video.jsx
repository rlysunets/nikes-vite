import React from 'react'

const Video = ({ video }) => {
   return (
      <>
         <div className="relative h-24 w-32 rounded-xl overflow-hidden cursor-pointer group mb-2 lg:h-20 lg:w-28 md:h-16 md:w-24 sm:h-12 sm:w-20">
            <img
               src={video.imgsrc}
               alt="clip image"
               className="h-full w-full object-cover absolute top-0 left-0 right-0 z-10"
            />
            <svg className="w-7 h-7 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] right-0 z-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff">
               <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
            </svg>
            <video
               autoPlay
               loop
               muted
               playsInline
               className="w-full h-full object-cover absolute top-0 left-0 right-0 z-0 group-hover:z-20"
            >
               <source src={video.clip} type="video/mp4" />
            </video>
         </div>

      </>
   )
}

export default Video