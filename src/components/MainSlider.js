import React from "react";

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

import GeneralBtn from "./GeneralBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Slider from "./Slider";

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
      <SwiperSlide className="next">
        <Slider
          themeColor="#F215B6"
          category="MARKING"
          title={["25 Years of", <br/>,  "Business Growth"]}
          description="Link Development, the global technology solutions provider and an
            A15 company, unveiled today that it has recently marked its Silver
            Jubilee anniversary."
          videoUrl="./"
          scaleImg="true"
          index={1}
        />
      </SwiperSlide>
      <SwiperSlide className="next">
        <Slider
          themeColor="#A6E51C"
          category="TRENDY INSIDE-OUT"
          title={["Crafty Minds", <br/>,  "Reshaping"]}
          description="Link Development,Our people, processes, and technologies thrive
            on digital breakthroughs."
          videoUrl="./"
          scaleImg="false"
          index={2}
        />
      </SwiperSlide>
      <SwiperSlide className="next">
        <Slider
          themeColor="#FF7C16"
          category="OUTSOURCE"
          title={["Global IT", <br/>,  "Experts"]}
          description="On-shore, offshore, nearshore and hybrid models for dedicated development, product building and staff augmentation."
          videoUrl="./"
          scaleImg="false"
          index={3}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default MainSlider;
