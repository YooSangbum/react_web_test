import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';

function MainEvent(props) {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <section className="main_sec1 mw">
            <div className="main_slide1">
              <div className="main_sec1_wrap">
                <p>Gold big hoops</p>
                <p>$ 68,00</p>
                <button>View Product</button>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="main_sec1 mw">
            <div className="main_slide2">
              <div className="main_sec1_wrap">
                <p>Gold big hoops</p>
                <p>$ 68,00</p>
                <button>View Product</button>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="main_sec1 mw">
            <div className="main_slide3">
              <div className="main_sec1_wrap">
                <p>Gold big hoops</p>
                <p>$ 68,00</p>
                <button>View Product</button>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default MainEvent;
