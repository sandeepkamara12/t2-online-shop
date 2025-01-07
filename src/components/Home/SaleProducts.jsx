import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from "swiper/modules";   
import Product from "../Products/Product";

const SaleProducts = () => {
  return (
    <div className="container pt-6 pb-6">
        <div className="heading heading-center mb-3">
            <h2 className="title-lg">Sale Products</h2>
            <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h6>
        </div>
    <Swiper
    className="my-swiper-container"
    modules={[Navigation, Autoplay]}
    navigation
    spaceBetween={0}
    slidesPerView={4}
>
{
  Array(8).fill(null).map((_,index)=>{
    return (
      <SwiperSlide key={index}>
        <div className="item product product-11 text-center">
          <Product swiper={true} />
        </div>
      </SwiperSlide>
    )
  })
}
</Swiper>
</div>
  )
}

export default SaleProducts