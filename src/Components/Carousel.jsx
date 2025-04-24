import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Carousel = ({ cards }) => {
  return (
    <div className="w-full max-w-4xl mx-auto  ">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        loop={true}
        className="rounded-2xl shadow-lg"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id} className="flex justify-center">
            <div className="bg-black p-5 rounded-lg shadow-md w-full text-center">
              <img src={card.image} alt={card.title} className="w-full h-[50%] object-cover rounded-lg mb-4" />
              <h2 className="text-lg font-bold">{card.title}</h2>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
