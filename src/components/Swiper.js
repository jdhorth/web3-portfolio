import crypto from '../assets/cryptobitpunk.jpg';
import funbay from '../assets/fun-bay-thumb.jpg';
import nonfun from '../assets/non-fun-thumb.jpg';
import liverse from '../assets/liverse.png';
import nonfungi from '../assets/non-fungi-thumb.jpg';
import tw33ter from '../assets/tw33ter.png';
import d3pp from '../assets/d3pp.png';
import lens from '../assets/lens-protocol-thumb.jpg';



// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

export default () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={10}
            slidesPerView={3}
            navigation
            autoplay={{ clickable: true }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >



            <SwiperSlide className='swiper'>

                <h3>Recipe CMS</h3>
                <img src={funbay} alt="Recipe Next.js" />

            </SwiperSlide>
            <SwiperSlide className='swiper'>

                <h3>Lens Protocol</h3>
                <img src={lens} alt="lens protocol" />

            </SwiperSlide>
            <SwiperSlide className='swiper'>

                <h3>Web3 Twitter</h3>
                <img src={tw33ter} alt="Web3 Twitter" />

            </SwiperSlide>
            <SwiperSlide>

                <h3>Crypto Dashboard</h3>
                <img src={crypto} alt="Crypto Dashboard" />

            </SwiperSlide>
            <SwiperSlide>

                <h3>NFT Mint</h3>
                <img src={d3pp} alt="NFT mint dapp" />

            </SwiperSlide>
            <SwiperSlide>

                <h3>Project Idea</h3>
                <img src={liverse} alt="Project ideas" />

            </SwiperSlide>
            <SwiperSlide>

                <h3>NFT Calendar Blog</h3>
                <img src={nonfungi} alt="Non-Fungi Blog" />

            </SwiperSlide>
            <SwiperSlide>

                <h3>HTML iframe</h3>
                <img src={nonfun} alt="OpenSea Collection" />

            </SwiperSlide>
            <SwiperSlide>

                <h3>Recipe CMS</h3>
                <img src={funbay} alt="Recipe Next.js" />

            </SwiperSlide>

        </Swiper>
    );
};

