import React, { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  Parallax,
  EffectFade,
} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../assets/scss/default/_mixins.scss";
import "../assets/scss/default/_variables.scss";
import "../assets/scss/component/mainSlider.scss";

import Slider from "./Slider";
import data from "../services/slides.json";

SwiperCore.use([Navigation, Pagination, A11y]);

const MainSlider = () => {
  return (
    <Swiper
      autoHeight={true}
      loop
      effect={"fade"}
      navigation={{
        nextEl: ".next",
      }}
      modules={[Parallax, Pagination, Navigation, EffectFade]}
      className="mySwiper"
    >
      {data.slides.map((slide, i) => (
        <SwiperSlide className="next" key={slide.id}>
          <Slider
            key={i + slide.id}
            id={slide.id}
            themeColor={'#'+slide.colorCode}
            category={slide.category}
            title={slide.title}
            description={slide.brief}
            imgUrl={slide.imgUrl}
            videoUrl={slide.videoUrl}
            scaleImg="true"
            slides={data.slides}
            index={i}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainSlider;
