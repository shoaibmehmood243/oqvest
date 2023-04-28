import { blog1, blog2, blog3, blog4, blog5, blog6, idea } from '../../assets';
import styles from '../../styles/blog.module.css';
import { AiOutlineEye, AiFillHeart, AiOutlineAlignLeft } from 'react-icons/ai'
import { TbMessageCircle2Filled } from 'react-icons/tb'
import { BiChevronsRight } from 'react-icons/bi'
import {Link} from 'react-router-dom'
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

const Blog = () => {
    const data = [
        {
            img: blog1,
            title: 'A Guide to First-Time Home Buyer Programs, Loans & Grants',
            views: '2.5',
            date: 'January,2021',
            link: '/blog/1'
        },
        {
            img: blog2,
            title: 'How Much House can I Afford??',
            views: '1.7',
            date: 'February,2020',
            link: '/blog/2'
        },
        {
            img: blog3,
            title: 'How to buy a Houuse with Student Loan Debt??',
            views: '3.5',
            date: 'March,2022',
            link: '/blog/3'
        },
        {
            img: blog4,
            title: 'Buying an Investment Property:A Complete Guide',
            views: '3.5',
            date: 'March,2022',
            link: '/blog/4'
        },
        {
            img: blog5,
            title: 'How to Finance an Airbnb Rental: A Guide for Iinvestors',
            views: '3.5',
            date: 'March,2022',
            link: '/blog/5'
        },
        {
            img: blog6,
            title: 'Closing Costs: What are They and How Much??',
            views: '3.5',
            date: 'March,2022',
            link: '/blog/6'
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
        <div className={styles.container}>
            <h1 className='m-0 px-2 md:px-0 text-center'>Knowledge Centre <img className="rotate" height={70} width={100} src={idea} /></h1>
            <div className={`mt-6 hidden md:grid ${styles.grid}`}>
                {
                    data.map((data, i) => (
                        <Link to={data.link} key={i} style={{textDecoration: 'none'}} className='flex justify-content-center'>
                            <div className={styles.card}>
                                <div className={styles.blogImage}>
                                    <img src={data.img} />
                                </div>
                                <div className={`flex justify-content-between align-items-center ${styles.span1}`}>
                                    <span className='text-base'>{data.date}</span>
                                    <span className='text-base'><AiOutlineEye /> {data.views} k</span>
                                </div>
                                <h3 className='m-0 mb-3'>{data.title}</h3>
                                <div className={`flex justify-content-start gap-4 align-items-center ${styles.widgets}`}>
                                    <span className={styles.heart}><AiFillHeart /> 31</span>
                                    <span className={styles.msg}><TbMessageCircle2Filled /> 18</span>
                                    <span className={styles.readMore}><AiOutlineAlignLeft /> Read More</span>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
            <div className={`mt-6 ${styles.slider}`}>
            <Slider {...sliderSettings}>
                {
                    data.map((data, i) => (
                        <Link to={data.link} key={i} style={{textDecoration: 'none'}} className='flex justify-content-center'>
                            <div className={styles.card}>
                                <div className={styles.blogImage}>
                                    <img src={data.img} />
                                </div>
                                <div className={`flex justify-content-between align-items-center ${styles.span1}`}>
                                    <span className='text-base'>{data.date}</span>
                                    <span className='text-base'><AiOutlineEye /> {data.views} k</span>
                                </div>
                                <h3 className='m-0 mb-3'>{data.title}</h3>
                                <div className={`flex justify-content-start gap-4 align-items-center ${styles.widgets}`}>
                                    <span className={styles.heart}><AiFillHeart /> 31</span>
                                    <span className={styles.msg}><TbMessageCircle2Filled /> 18</span>
                                    <span className={styles.readMore}><AiOutlineAlignLeft /> Read More</span>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </Slider>
            </div>
            <div className={styles.btn}>
                <p>View More <BiChevronsRight /></p>
            </div>
        </div>
    )
}

export default Blog;