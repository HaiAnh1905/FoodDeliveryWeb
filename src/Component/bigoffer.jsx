import { useState } from "react";
import "../ComponentCSS/bigoffer.css";
import bigOffer1 from "../Image/image_bigOffer_1.png";
import bigOffer2 from "../Image/image_bigOffer_2.png";
import bigOffer3 from "../Image/image_bigOffer_3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const BigOffer = () => {
  return (
    <>
      <div className="bigoffer">
        <h1 className="title4">Bigg Offer</h1>
        <div className="heading4">
          For in this week, take your food, buy your best one.
        </div>
        {/* <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper> */}
        <div className="carousel1">
          <img src={bigOffer1} alt="" className="offer_advertise" />
          <img src={bigOffer2} alt="" className="offer_advertise" />
          <img src={bigOffer3} alt="" className="offer_advertise" />
        </div>
      </div>
    </>
  );
};

export default BigOffer;
