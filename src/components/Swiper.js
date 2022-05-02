import crypto from '../assets/cryptobitpunk.jpg';
import funbay from '../assets/fun-bay-thumb.jpg';
import bbandit from '../assets/bbandit.jpg';

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
            spaceBetween={5}
            slidesPerView={3}
            navigation
            autoplay={{ clickable: true }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >



            <SwiperSlide className="slide">

                <section className="projects">

                    <div className="projects__cards">

                        <div className="projects__card">
                            <h3>Recipe CMS</h3>
                            <img src={funbay} alt="Recipe Next.js" />
                            <p>A Next.js project Jamstack site with headless Contentful CMS, served on Vercel content delivery network.
                            </p>

                            <a href="https://fun-bay.com/" target="_blank" className="button">Site</a>
                            <a href="https://github.com/jdhorth/marmite-stack" target="_blank" className="button">Code</a>
                        </div>


                    </div>
                </section>

            </SwiperSlide>


            <SwiperSlide>

                <section className="projects">

                    <div className="projects__cards">

                        <div className="projects__card">
                            <h3>Crypto Dashboard</h3>
                            <img src={crypto} alt="Crypto Dashboard" />
                            <p>This is a Next.js Crypto Dashboard using the Coingecko API. Top 100 sortable coin list and exchange info.
                            </p>

                            <a href="https://coin-clone.vercel.app/" target="_blank" className="button">Site</a>
                            <a href="https://github.com/jdhorth/coin-clone" target="_blank" className="button">Code</a>
                        </div>

                    </div>
                </section>

            </SwiperSlide>


            <SwiperSlide>

                <section className="projects">


                    <div className="projects__cards">

                        <div className="projects__card">
                            <h3>Markdown Site</h3>
                            <img src={bbandit} alt="Non-fungi Gatsby" />
                            <p>A Gatsby site, React / GraphQL, builds Postings from Markdown, optimized, fast, customizable site on 'the edge'.
                            </p>

                            <a href="http://non-fungi.xyz" target="_blank" className="button">Site</a>
                            <a href="#" target="_blank" className="button">Code</a>
                        </div>
                    </div>
                </section>


            </SwiperSlide>



            <SwiperSlide>

                <section className="projects">

                    <div className="projects__cards">

                        <div className="projects__card">
                            <h3>Recipe CMS</h3>
                            <img src={funbay} alt="Recipe Next.js" />
                            <p>A Next.js project Jamstack site with headless Contentful CMS, served on Vercel content delivery network.
                            </p>

                            <a href="https://fun-bay.com/" target="_blank" className="button">Site</a>
                            <a href="https://github.com/jdhorth/marmite-stack" target="_blank" className="button">Code</a>
                        </div>


                    </div>
                </section>


            </SwiperSlide>

            <SwiperSlide>

                <section className="projects">


                    <div className="projects__cards">

                        <div className="projects__card">
                            <h3>Markdown Site</h3>
                            <img src={bbandit} alt="Non-fungi Gatsby" />
                            <p>A Gatsby site, React / GraphQL, builds Postings from Markdown, optimized, fast, customizable site on 'the edge'.
                            </p>

                            <a href="http://non-fungi.xyz" target="_blank" className="button">Site</a>
                            <a href="#" target="_blank" className="button">Code</a>
                        </div>
                    </div>
                </section>


            </SwiperSlide>

            <SwiperSlide>

                <section className="projects">

                    <div className="projects__cards">

                        <div className="projects__card">
                            <h3>Recipe CMS</h3>
                            <img src={funbay} alt="Recipe Next.js" />
                            <p>A Next.js project Jamstack site with headless Contentful CMS, served on Vercel content delivery network.
                            </p>

                            <a href="https://fun-bay.com/" target="_blank" className="button">Site</a>
                            <a href="https://github.com/jdhorth/marmite-stack" target="_blank" className="button">Code</a>
                        </div>


                    </div>
                </section>


            </SwiperSlide>

            <SwiperSlide>

                <section className="projects">


                    <div className="projects__cards">

                        <div className="projects__card">
                            <h3>Markdown Site</h3>
                            <img src={bbandit} alt="Non-fungi Gatsby" />
                            <p>A Gatsby site, React / GraphQL, builds Postings from Markdown, optimized, fast, customizable site on 'the edge'.
                            </p>

                            <a href="http://non-fungi.xyz" target="_blank" className="button">Site</a>
                            <a href="#" target="_blank" className="button">Code</a>
                        </div>
                    </div>
                </section>


            </SwiperSlide>
            ...
        </Swiper>
    );
};
