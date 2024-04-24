
import React from "react";
import Slider from "react-slick";
import "../style/product.css"

const testimonialData = [
    {
        id: 1,
        name: "Victor",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 1,
        name: "Satya Narayan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 1,
        name: "Sachin Tendulkar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/103/103",
    },
];

const Testimonial = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        // slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <div data-aos="fade-up" data-aos-duration="300" className="py-10">
                <div className="container">
                    <div className="text-center mb-12 max-w-[600px] mx-auto">
                        <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            What our customers say
                        </p>
                        {/* <h1 className="text-3xl font-bold">Testimonial</h1> */}
                        {/* <p className="text-xs text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis delectus architecto error nesciunt,
            </p> */}
                    </div>
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="300"
                        className="grid grid-cols-1 max-w-[1200px] mx-auto gap-6"
                    >
                        <Slider {...settings}>
                            {testimonialData.map((data) => {
                                return (
                                    <div >
                                        <div
                                            key={data.id}
                                            className=" flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-dark  relative "
                                        >
                                            <div>
                                                <img
                                                    className="rounded-full w-20 h-20"
                                                    src={data.img}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="mt-5">
                                                    <p className="text-white text-sm">{data.text}</p>
                                                    <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                                        {data.name}
                                                    </h1>
                                                </div>
                                            </div>

                                            <p className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary text-9xl font-serif absolute top-0 right-0">
                                                ,,
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>
                        {/* <ul className="slick-dots" ><li className=""><button>1</button></li><li className=""><button>2</button></li><li className="slick-active"><button>3</button></li></ul> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonial;
