import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { assets } from "../../assets/assets";

const HomeSlider = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 lg:px-8">
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={800}
        centeredSlides={true}
        slidesPerView={1.1}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1.1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1.1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 1.1,
            spaceBetween: 40,
          },
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper rounded-lg  shadow-sm"
        style={{
          '--swiper-navigation-color': '#ffffff',
          '--swiper-pagination-color': '#ffffff',
          '--swiper-navigation-size': '20px',
        }}
      >
        <SwiperSlide>
          <div className="relative w-full h-48 md:h-64 lg:h-80">
            <img 
              src={assets.HomeBannerOne} 
              alt="Home Banner One" 
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0   bg-opacity-20 rounded-lg"></div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="relative w-full h-48 md:h-64 lg:h-80">
            <img 
              src={assets.HomeBannerTwo} 
              alt="Home Banner Two" 
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0   bg-opacity-20 rounded-lg"></div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="relative w-full h-48 md:h-64 lg:h-80">
            <img 
              src={assets.HomeBannerThree} 
              alt="Home Banner Three" 
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0   bg-opacity-20 rounded-lg"></div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="relative w-full h-48 md:h-64 lg:h-80">
            <img 
              src={assets.HomeBannerFour} 
              alt="Home Banner Four" 
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0   bg-opacity-20 rounded-lg"></div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="relative w-full h-48 md:h-64 lg:h-80">
            <img 
              src={assets.HomeBannerFive} 
              alt="Home Banner Five" 
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0   bg-opacity-20 rounded-lg"></div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="relative w-full h-48 md:h-64 lg:h-80">
            <img 
              src={assets.HomeBannerSix} 
              alt="Home Banner Six" 
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0   bg-opacity-20 rounded-lg"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;