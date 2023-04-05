import React from 'react'
import SectionTitle from './utils/SectionTitle'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { HashtagIcon, HeartIcon } from "@heroicons/react/24/solid"
import { ClockIcon } from "@heroicons/react/24/outline"
import { truncate } from "lodash"

const Stories = ({ title, news }) => {
   return (
      <div className="nike-container mt-10">
         <SectionTitle title={title} />

         <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
               100: {
                  slidesPerView: 1,
               },
               500: {
                  slidesPerView: 2,
               },
               767: {
                  slidesPerView: 3,
               },
               1200: {
                  slidesPerView: 4,
               },
               1700: {
                  slidesPerView: 5,
               },
            }}
         >
            {news.map((el, i) => (
               <SwiperSlide key={i} className="mb-0.5">
                  <div className="flex flex-col gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200">
                     <div>
                        <img
                           src={el.img}
                           alt={el.title}
                           className="w-full h-auto object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg"
                        />
                     </div>
                     <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between w-full px-4">
                           <div className="flex flex-col gap-1">
                              <div className="flex items-center gap-0.5">
                                 <HeartIcon className="icon-style text-red-500 w-5 h-5" />
                                 <span className="text-xs font-bold">{el.like}</span>
                              </div>
                              <div className="flex items-center gap-0.5">
                                 <ClockIcon className="icon-style w-4 h-4 text-black" />
                                 <span className="text-xs font-bold">{el.time}</span>
                              </div>
                           </div>
                           <div className="flex items-center gap-0.5 self-center">
                              <HashtagIcon className="icon-style text-blue-600" />
                              <span className="text-xs font-bold text-blue-600">{el.by}</span>
                           </div>
                        </div>
                        <div className="px-4">
                           <h1 className="text-base font-semibold lg:text-sm mb-2">{el.title}</h1>
                           <p className="text-sm text-justify lg:text-xs h-18">{truncate(el.text, { length: 135 })}</p>
                        </div>
                        <div className="flex items-center justify-center px-4 w-full">
                           <a href={el.url} target="_blank" role={"button"} className="w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 py-1.5 button-theme">{el.btn}</a>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </div >
   )
}

export default Stories