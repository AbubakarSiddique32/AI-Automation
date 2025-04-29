import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const AboutTestimonials = () => {
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 0, // immediately continue sliding
          disableOnInteraction: false,
          pauseOnMouseEnter: true, // PAUSE on hover
        }}
        speed={3000} // 3 seconds to move from one slide to next
        allowTouchMove={false} // disable dragging with mouse/touch
      >
        <SwiperSlide>
          <div>
            <div>
              <div className="slide-image">
                <img src="https://via.placeholder.com/600x300" alt="Slide 1" />
              </div>
              <div className="slide-name">
                <h4>Zara Kline</h4>
                <p>Sales Director</p>
              </div>
            </div>
            <div className="data">
              <div className="line"></div>
              <p>The Setup Wizard transformed our sales process!</p>
            </div>
          </div>
          <img src="https://via.placeholder.com/600x300" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/600x300" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/600x300" alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/600x300" alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/600x300" alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AboutTestimonials;
