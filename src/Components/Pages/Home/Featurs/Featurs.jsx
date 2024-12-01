import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Mousewheel, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Featurs.css';

export const Featurs = () => {
  return (
    <div>
      <div className="feturs-container">
        <div className="side-info text-center">
          <span>discover</span>
          <h1>Test Dalicious Food</h1>
          <hr />
          <center>
            <img
              src="https://th.bing.com/th/id/OIP.LyGXM23WPYZdpj5k3lNs8wAAAA?w=154&h=180&c=7&r=0&o=5&pid=1.7"
              alt="Music Icon"
              width="30%"
              height="30%"
              style={{ borderRadius: '10px', filter: 'drop-shadow(10px 5px 4px gray)' }}
            />
          </center>
          <br />
        
          <button className="border-2 border-[#3586FF] px-3 py-1 lg:px-4 lg:py-2 bg-[#3586FF] text-white text-sm lg:text-base font-semibold shadow-md hover:bg-[#3586FF] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#3586FF] focus:ring-offset-2 transition-all duration-200">
            Join Now
          </button>

        </div>

        <Swiper
          className="swiper"
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true,
          }}
          keyboard={{ enabled: true }}
          mousewheel={{ thresholdDelta: 70 }}
          loop={true}
          autoplay={{
            delay: 6000 * Math.random(),
            disableOnInteraction: true,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1560: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Keyboard, Mousewheel, Pagination, EffectCoverflow]}
        >
          <SwiperSlide className="-Featurs-swiper-slide slide-one">
            <div>
              <h2>Wind and Brass</h2>
              <p>Discover and tune into live, smooth jazz!</p>
              <a href="#">Tune In</a>
            </div>
          </SwiperSlide>

          <SwiperSlide className="-Featurs-swiper-slide slide-two">
            <div>
              <h2>Saxophone</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
                nemo eveniet delectus obcaecati dolorem at, cumque deleniti sint
                laborum adipisci quis aut consequuntur eum?
              </p>
              <a href="#">View Detail</a>
            </div>
          </SwiperSlide>

          <SwiperSlide className="-Featurs-swiper-slide slide-three">
            <div>
              <h2>Genre</h2>
              <p>Description</p>
              <a href="#">View Detail</a>
            </div>
          </SwiperSlide>

          <SwiperSlide className="-Featurs-swiper-slide slide-four">
            <div>
              <h2>Genre</h2>
              <p>Description</p>
              <a href="#">View Detail</a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
