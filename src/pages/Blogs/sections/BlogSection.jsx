import { useEffect, useState } from 'react';
import { blog1, blog2, blog3, blog4, blog5, blog6 } from '../../../assets';
import styles from '../../../styles/blog.module.css';
import { Link } from 'react-router-dom'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import Slider from 'react-slick';

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

const BlogSection = ({ id }) => {
    const [blogs, setBlogs] = useState([]);
    const data = [
        {
            id: 1,
            img: blog1,
            title: 'A Guide to First-Time Home Buyer Programs, Loans & Grants',
            views: '2.5',
            date: 'January,2021',
            link: '/blog/1'
        },
        {
            id: 2,
            img: blog2,
            title: 'How Much House can I Afford??',
            views: '1.7',
            date: 'February,2020',
            link: '/blog/2'
        },
        {
            id: 3,
            img: blog3,
            title: 'How to buy a Houuse with Student Loan Debt??',
            views: '3.5',
            date: 'March,2022',
            link: '/blog/3'
        },
        {
            id: 4,
            img: blog4,
            title: 'Buying an Investment Property:A Complete Guide',
            views: '3.5',
            date: 'March,2022',
            link: '/blog/4'
        },
        {
            id: 5,
            img: blog5,
            title: 'How to Finance an Airbnb Rental: A Guide for Iinvestors',
            views: '3.5',
            date: 'March,2022',
            link: '/blog/5'
        },
        {
            id: 6,
            img: blog6,
            title: 'Closing Costs: What are They and How Much??',
            views: '3.5',
            date: 'March,2022',
            link: '/blog/6'
        },
    ]
    useEffect(() => {
        const blogData = data.filter((data) => data.id !== id);
        setBlogs(blogData);
    }, [id]);
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
        <div className={styles.container2}>
            <div className='hidden md:block'>
                {
                    blogs.map((data, i) => (
                        <Link to={data.link} key={i} style={{ textDecoration: 'none' }} className='flex justify-content-center'>
                            <div className={styles.card}>
                                <div className={styles.blogImage2}>
                                    <img className='mb-1' src={data.img} />
                                </div>
                                <div className={`flex justify-content-between align-items-center ${styles.span1}`}>
                                    <span className='text-base'>{data.date}</span>
                                </div>
                                <h3 className='m-0'>{data.title}</h3>
                            </div>
                        </Link>
                    ))
                }
            </div>
            <div className={`mt-6 block md:hidden ${styles.slider2}`}>
                <Slider {...sliderSettings}>
                    {
                        blogs.map((data, i) => (
                            <Link to={data.link} key={i} style={{ textDecoration: 'none' }} className='flex justify-content-center'>
                                <div className={styles.card}>
                                    <div className={styles.blogImage2}>
                                        <img className='mb-1' src={data.img} />
                                    </div>
                                    <div className={`flex justify-content-between align-items-center ${styles.span1}`}>
                                        <span className='text-base'>{data.date}</span>
                                    </div>
                                    <h3 className='m-0'>{data.title}</h3>
                                </div>
                            </Link>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default BlogSection;