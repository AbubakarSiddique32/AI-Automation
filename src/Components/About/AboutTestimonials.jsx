import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import image from "../../Images/img.png";

// Import Swiper styles
import "swiper/css";

const AboutTestimonials = () => {
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 0, // immediately continue sliding
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={3000} // 3 seconds to move from one slide to next
        allowTouchMove={false} // disable dragging with mouse/touch
        grabCursor={true} // Move grab cursor here
        breakpoints={{
          // Define breakpoints for different screen sizes
          320: {
            slidesPerView: 1, // 1 slide per view for small screens
          },
          768: {
            slidesPerView: 2, // 2 slides per view for medium screens
          },
          1024: {
            slidesPerView: 3, // 3 slides per view for large screens
          },
        }}
      >
        <SwiperSlide>
          <div className="slide1 border border-black rounded-[16px] p-[24px] flex flex-col gap-[16px]">
            <div className="slide-img-name flex gap-[16px]">
              <div className="slide-image w-[20%]">
                <img
                  src={image}
                  alt="Slide 1"
                  className=" rounded-full object-cover w-full"
                />
              </div>
              <div className="slide-name">
                <h4 className=" text-[15px] font-poppins font-[600]">
                  Zara Kline
                </h4>
                <p className="text-[15px] font-[300] text-[#00000099]">
                  Sales Director
                </p>
              </div>
            </div>
            <div className="data h-auto flex">
              <div className="line h-[auto] w-[1px] bg-black mx-[16px] "></div>
              <p className=" text-[16px] text-[#000000] font-[300]">
                The Setup Wizard transformed our sales process!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide2 border border-black rounded-[16px] p-[24px] flex flex-col gap-[16px]">
            <div className="slide-img-name flex gap-[16px]">
              <div className="slide-image w-[20%]">
                <img
                  src={image}
                  alt="Slide 1"
                  className=" rounded-full object-cover w-full"
                />
              </div>
              <div className="slide-name">
                <h4 className=" text-[15px] font-poppins font-[600]">
                  Zara Kline
                </h4>
                <p className="text-[15px] font-[300] text-[#00000099]">
                  Sales Director
                </p>
              </div>
            </div>
            <div className="data h-auto flex">
              <div className="line h-[auto] w-[1px] bg-black mx-[16px] "></div>
              <p className=" text-[16px] text-[#000000] font-[300]">
                The Setup Wizard transformed our sales process!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide3 border border-black rounded-[16px] p-[24px] flex flex-col gap-[16px]">
            <div className="slide-img-name flex gap-[16px]">
              <div className="slide-image w-[20%]">
                <img
                  src={image}
                  alt="Slide 1"
                  className=" rounded-full object-cover w-full"
                />
              </div>
              <div className="slide-name">
                <h4 className=" text-[15px] font-poppins font-[600]">
                  Zara Kline
                </h4>
                <p className="text-[15px] font-[300] text-[#00000099]">
                  Sales Director
                </p>
              </div>
            </div>
            <div className="data h-auto flex">
              <div className="line h-[auto] w-[1px] bg-black mx-[16px] "></div>
              <p className=" text-[16px] text-[#000000] font-[300]">
                The Setup Wizard transformed our sales process!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide4 border border-black rounded-[16px] p-[24px] flex flex-col gap-[16px]">
            <div className="slide-img-name flex gap-[16px]">
              <div className="slide-image w-[20%]">
                <img
                  src={image}
                  alt="Slide 1"
                  className=" rounded-full object-cover w-full"
                />
              </div>
              <div className="slide-name">
                <h4 className=" text-[15px] font-poppins font-[600]">
                  Zara Kline
                </h4>
                <p className="text-[15px] font-[300] text-[#00000099]">
                  Sales Director
                </p>
              </div>
            </div>
            <div className="data h-auto flex">
              <div className="line h-[auto] w-[1px] bg-black mx-[16px] "></div>
              <p className=" text-[16px] text-[#000000] font-[300]">
                The Setup Wizard transformed our sales process!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide5 border border-black rounded-[16px] p-[24px] flex flex-col gap-[16px]">
            <div className="slide-img-name flex gap-[16px]">
              <div className="slide-image w-[20%]">
                <img
                  src={image}
                  alt="Slide 1"
                  className=" rounded-full object-cover w-full"
                />
              </div>
              <div className="slide-name">
                <h4 className=" text-[15px] font-poppins font-[600]">
                  Zara Kline
                </h4>
                <p className="text-[15px] font-[300] text-[#00000099]">
                  Sales Director
                </p>
              </div>
            </div>
            <div className="data h-auto flex">
              <div className="line h-[auto] w-[1px] bg-black mx-[16px] "></div>
              <p className=" text-[16px] text-[#000000] font-[300]">
                The Setup Wizard transformed our sales process!
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AboutTestimonials;
