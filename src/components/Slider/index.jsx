import { A11y, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper } from 'swiper/react';


export function Slider({ settings, children }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      {...settings}
    >
      {children}
    </Swiper>
  )
}