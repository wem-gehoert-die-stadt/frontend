import SwiperCore, { Keyboard, Mousewheel, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';

import 'swiper/swiper-bundle.css';

SwiperCore.use([Keyboard, Mousewheel, Controller]);

const CustomSwiper = ({ children, ...props }) => (
  <Swiper {...props}>
    {React.Children.map(children, (child) => (
      <SwiperSlide>{child}</SwiperSlide>
    ))}
  </Swiper>
);

export default CustomSwiper;
