import './ServicesCard.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/pagination';
const ServicesCard = ({data}) => {
    return (
        <div className='cards'>
            <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
        clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
    >
        {data.map((item, index)=>{
            return(
                
                <SwiperSlide>
                    <div className="card">
                    <img src={item.logo} alt="" />
                    <h2>{item.title}</h2>
                    <p>{item.subtitle}</p>
                </div>
                </SwiperSlide>
            )
        })}
        </Swiper>
        </div>
    )
}

export default ServicesCard
