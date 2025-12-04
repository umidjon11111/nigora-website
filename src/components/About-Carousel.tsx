import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { useTranslation } from "react-i18next";

const VideoCarousel = () => {
  const videos = [1, 2, 3, 4, 5, 6, 7];
  const { t } = useTranslation();
  return (
    <div className="space-y-8 mt-24 mb-10">
      <h2 className="font-display text-3xl font-bold text-foreground text-center">
        {t("Video.video")}
      </h2>

      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 0, // to‘xtamasdan yuradi
          disableOnInteraction: false,
        }}
        speed={3500} // silliq harakat tezligi
        className="w-full px-2"
      >
        {videos.map((num) => (
          <SwiperSlide
            key={num}
            className="!w-[300px] sm:!w-[380px] lg:!w-[420px]"
          >
            <div className="rounded-2xl overflow-hidden shadow-card hover-lift">
              <video controls className="w-full h-[400px] object-cover">
                <source src={`/${num}-video.mp4`} type="video/mp4" />
              </video>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VideoCarousel;
