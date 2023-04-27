import React from 'react';
import { construction, conventional, dpa, dscr, fhaloan } from "../../assets";
import styles from '../../styles/home.module.css'
import { Carousel } from 'primereact/carousel';
import { Link } from "react-router-dom";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        ><BsChevronRight /></div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        ><BsChevronLeft /></div>
    );
}

const ProductSlider = () => {
    const products = [
        {
            img: conventional,
            link: '/conventional-loan',
            title: 'Conventional',
            text: 'Full-Doc Loan. Designed for borrowers who can must show enough taxable income to demonstrate the ability to repay the new loan ',
        },
        {
            img: dscr,
            link: '/dscr-loan',
            title: 'DSCR',
            text: 'Designed for seasoned investors looking for a low-documentation program, but without the hard money interest rates and terms. ',
        },
        {
            img: construction,
            link: '/construction-loan',
            title: 'Construction',
            text: 'Suitable for those who have a landpiece and want to construct their mortgage there. It helps people to get their dream home if they have land and need financial support',
        },
        {
            img: fhaloan,
            link: '/profit-loss-loan',
            title: 'FHA Loan',
            text: 'For most first-time home buyers and for those whose employment or credit history does not meet the standard conventional loan guidelines.',
        },
        {
            img: dpa,
            link: '/bank-statement-loan',
            title: 'DPA',
            text: 'Down payment assistance (DPA) programs offer loans and grants that can cover part or all of a home buyer’s down payment and closing costs.',
        },
    ]
    const sliderSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }
    return (
        <div style={{ background: 'rgba(153, 153, 153, 0.04)' }}>
            <div className={` m-auto text-center py-4 ${styles.products}`}>
                <div className="w-full m-auto text-center md:w-10 lg:w-8 mb-8">
                    <h1 className="m-0 mb-2"><strong className="st-1">Flexible</strong> <strong className="st-2">Mortgage</strong> Solutions</h1>
                    <p className="my-1 text">Discover the wide range of mortgage products available at Oqvest and find the one that suits you best.</p>
                </div>
                <div className={`my-4`}>
                    <Slider {...sliderSettings}>
                        {
                            products.map((product, i) => (
                                <Link className='flex justify-content-center' key={i} to={product.link}>
                                    <div className={` text-center ml-4 mr-3 ${styles.productCard}`}>
                                        <div className="mb-3">
                                            <img height={60} src={product.img} alt={product.title} className="w-6 m-auto" />
                                        </div>
                                        <div>
                                            <h4 className="mb-1">{product.title}</h4>
                                            <p className="mt-0 mb-3 text-sm">{product.text}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default ProductSlider;