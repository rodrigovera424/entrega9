"use client"
import React, { Component } from "react";
import Slider from "react-slick";

// IMAGES DATA FOR CAROUSEL
interface Data {
    imgSrc: string;
}

const data: Data[] = [
    {
        imgSrc: "/assets/slickCompany/3ds.svg"
    },
    {
        imgSrc: "/assets/slickCompany/autodesk.svg"
    },
    {
        imgSrc: "/assets/slickCompany/c3tech.svg"
    },
    {
        imgSrc: "/assets/slickCompany/shopbot.svg"
    },
    {
        imgSrc: "/assets/slickCompany/irobot.svg"
    },
    {
        imgSrc: "/assets/slickCompany/slavia.svg"
    },
]
{data.map((item, i) =>
  <div key={i} className="logo-container">
      <img className="slider-logo" src={item.imgSrc} alt={item.imgSrc} />
  </div>
)}
console.log("NamesList se está renderizando");


// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 2000,
             
            autoplaySpeed: 2000,
            
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (

            <div className='text-center bg-lightpink' >
                <div className="mx-auto max-w-2xl py-16 px-4s sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-lg my-10 text-lightgrey">Con la confianza de empresas de todos los tamaños</h2>
                    <div>
                        <Slider {...settings}>
                            {data.map((item, i) =>
                                <div key={i}>
                                    <img src={item.imgSrc} alt={item.imgSrc} />
                                </div>
                            )}
                        </Slider>
                    </div>
                </div>
            </div>

        )
    }
}
