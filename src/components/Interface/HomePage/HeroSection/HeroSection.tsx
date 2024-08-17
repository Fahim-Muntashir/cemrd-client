'use client'

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import Container from "@/components/Shared/Container"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';

export default function HeroSection() {
    return (


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
            <SwiperSlide>

                <section className="w-full bg-gradient-to-r from-primary to-secondary py-20 md:py-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-6">
                                <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground">
                                    Unlock Your Potential with Our Solutions
                                </h1>
                                <p className="text-lg md:text-xl text-secondary-foreground">
                                    Discover how our innovative products can transform your business and take it to new heights.
                                </p>
                                <Link
                                    href="#"
                                    className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                    prefetch={false}
                                >
                                    Get Started
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <img
                                    src="/placeholder.svg"
                                    width="600"
                                    height="400"
                                    alt="Hero Banner"
                                    className="mx-auto rounded-lg shadow-lg"
                                    style={{ aspectRatio: "600/400", objectFit: "cover" }}
                                />
                            </div>
                        </div>
                    </div>
                </section>                    </SwiperSlide>
            <SwiperSlide>

                <section className="w-full bg-gradient-to-r from-primary to-secondary py-20 md:py-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-6">
                                <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground">
                                    Unlock Your Potential with Our Solutions
                                </h1>
                                <p className="text-lg md:text-xl text-secondary-foreground">
                                    Discover how our innovative products can transform your business and take it to new heights.
                                </p>
                                <Link
                                    href="#"
                                    className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                    prefetch={false}
                                >
                                    Get Started
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <img
                                    src="/placeholder.svg"
                                    width="600"
                                    height="400"
                                    alt="Hero Banner"
                                    className="mx-auto rounded-lg shadow-lg"
                                    style={{ aspectRatio: "600/400", objectFit: "cover" }}
                                />
                            </div>
                        </div>
                    </div>
                </section>                    </SwiperSlide>
            <SwiperSlide>

                <section className="w-full bg-gradient-to-r from-primary to-secondary py-20 md:py-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-6">
                                <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground">
                                    Unlock Your Potential with Our Solutions
                                </h1>
                                <p className="text-lg md:text-xl text-secondary-foreground">
                                    Discover how our innovative products can transform your business and take it to new heights.
                                </p>
                                <Link
                                    href="#"
                                    className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                    prefetch={false}
                                >
                                    Get Started
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <img
                                    src="/placeholder.svg"
                                    width="600"
                                    height="400"
                                    alt="Hero Banner"
                                    className="mx-auto rounded-lg shadow-lg"
                                    style={{ aspectRatio: "600/400", objectFit: "cover" }}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </SwiperSlide>

        </Swiper>



    )
}