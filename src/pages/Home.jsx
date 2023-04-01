import { Button } from "primereact/button";
import { calculator, client1, client2, client3, closing, construction, conventional, dpa, dscr, fhaloan, forbes, guarantee, hidden, inc, msn, privacy, rectangleLeft, rectangleRight, service, shield, welcome, yahoo } from "../assets";
import Hero from "../components/Home/Hero";
import styles from '../styles/home.module.css'
import { Carousel } from 'primereact/carousel';
import Welcome from "../components/Home/Welcome";
import Blog from "../components/Home/Blog";
import Rate from "../components/common/Rate";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { Link } from "react-router-dom";

const Home = ()=> {
    const images = [
        {src: yahoo},
        {src: forbes},
        {src: inc},
        {src: msn},
    ]
    const template = (image) => {
        return (
            <div className="text-center">
                <img src={image.src} alt="carousel-image" />
            </div>
        );
    }
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];
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
      const productSettings = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    const productTemplate = (product)=> {
        return (
            <Link to={product.link}>
                <div className={` text-center mx-4 ${styles.productCard}`}>
                    <div className="mb-3">
                        <img height={60} src={product.img} alt={product.title} className="w-6" />
                    </div>
                    <div>
                        <h4 className="mb-1">{product.title}</h4>
                        <p className="mt-0 mb-3 text-sm">{product.text}</p>
                    </div>
                </div>
            </Link>
        )
    }
    const chooseData = [
        {
            img: guarantee,
            title: 'Low rate Guarantee',
            text: 'A home can be a great place to live and to raise a family, but it can also be overwhelmingly expensive. We offer low-interest loan deals to our customers who are going to purchase a home. It helps them to chase their dream of new home.'
        },
        {
            img: service,
            title: 'Personalized Service',
            text: 'We consider our customers as our family. So we take everyone’s case like our own case. Our personalized services help our clients to get the best of best for them in market competetive rates.'
        },
        {
            img: closing,
            title: 'On-time Closing',
            text: 'We make sure you close on your loan on time. We’re so confident in our process that we’ve backed it with our $1,000 On-Time Closing Guarantee which no one guarentee.'
        },
        {
            img: hidden,
            title: 'No Hidden/Junk Fees',
            text: 'We respect customer values. So, we don’t do any diplomacy which hurts our customers. Our mentioned pricing is all and we don’t charge any hidden or junk fee.'
        },
        {
            img: privacy,
            title: 'Privacy Pledge',
            text: 'We know the importance of privacy. So we give privacy top priority. We do not share any sensitive information of our clients to any third party. All the information you put on our website is safe and secure.'
        },
    ]
    const clients = [
        {
            img: client1,
            name: 'Jenia K.',
            feedback: 'I knew from the beginning that I was in capable and caring hands with Oqvest. I was never alone throughout the process while purchasing my first home. I am so grateful to my team at Oqvest for all that they have done for me. I love the way they handle my application. Thank you OQVEST.'
        },
        {
            img: client2,
            name: 'Raj kumar Agrawal',
            feedback: 'When I started shopping to refinance my house. I reached out to a couple of banks and mortgage brokers but as soon as I talked to OQVEST, I stayed with them. Not only their rates were so much better, the service and communication were amazing, they would work with me in every step and would inform me of everything on daily basis. Guidance and assistance from them helped me a lot.'
        },
        {
            img: client3,
            name: 'Anju A.',
            feedback: 'I was looking for an investment loan to close in the name of my LLC. After talking to several banks all of whom said it’s not possible, I came across Oqvest, they guided me very well toward the best product that suits my demand. Thumbs up for them. Their team was always helpful and professional, closed on time and with no hiccups.'
        },
    ]
    return (<>
        <Hero />
        <div className={`mt-7 mb-6 md:my-6 ${styles.featured}`}>
            <div className="text-center mb-7">
                <Button className="gap-2" label={` Featured In`} icon={<img height={18} src={shield} />} />
            </div>
            <div style={{maxWidth: '100vw'}} className={styles.images}>
                <Carousel
                    value={images}
                    itemTemplate={template}
                    responsiveOptions={responsiveOptions}
                    circular={true}
                    autoplayInterval={3000}
                    numVisible={4}
                    numScroll={1}
                    orientation="horizontal"
                    verticalViewPortHeight="100%"
                    showIndicators={false}
                    showNavigators={false}
                />
            </div>
        </div>
        <Rate />
        <div className={styles.calculate}>
            <div>
                <div className="text-center">
                    <img src={calculator} />
                    <h4 className="w-full m-auto my-3 md:w-10 lg:w-8">We have one stop solution for you. Calculate your affordability and get the <strong>best Mortgage for you....</strong></h4>
                    <Button label="Calculate your affordability" />
                </div>
                <h1>Mortage Calculator</h1>
            </div>
        </div>
        <div className={` m-auto text-center my-4 ${styles.products}`}>
            <div className="w-full m-auto text-center md:w-10 lg:w-8 mb-8">
                <h1 className="m-0 mb-2">Our Products</h1>
                <p className="my-1 text">We care our customers. that’s why we provide best products and help them in chasing their dreams</p>
            </div>
            <div className={`my-4`}>
                <Carousel value={products} numVisible={3} numScroll={3} showIndicators={false} responsiveOptions={productSettings} itemTemplate={productTemplate} />
            </div>
        </div>
        <div className="choose">
            <div className={styles.right}>
                <img src={rectangleRight} />
            </div>
            <h1 className="text-center mb-7">Why Choose Us??</h1>
            <div className={` mt-3 ${styles.grid}`}>
                {
                    chooseData.map((data, i)=> (
                        <div key={i} className={styles.gridItems}>
                            <div>
                                <img height={60} className='mb-3' src={data.img} />
                            </div>
                            <div>
                                <h4 className="m-0 mt-1">{data.title}</h4>
                                <p className="m-0 mt-3 text-sm">{data.text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className={styles.left}>
                <img src={rectangleLeft} />
            </div>
        </div>
        <div className={`${styles.clients} mb-0 mt-6 md:my-6`}>
            <div className="w-11 md:w-10 lg:w-9 m-auto">
                <div className="grid max-w-full">
                    <div className="col-12 lg:col-6 mt-5 mb-3 ml-2 lg:ml-0">
                        <h1 className="mb-1">Our Clients love what we do</h1>
                        <p className="mt-0 mb-6" style={{color: '#395F99'}}>See what people are sayinng about us.Our happy customers</p>
                        <Button label="Paperless & Quick - Apply Now" />
                    </div>
                    <div className="col-12 lg:col-6">
                        <div className={styles.feedback}>
                            {
                                clients.map((data, i)=> (<>
                                    <div key={i}>
                                        <h2 className="text-6xl relative m-0" style={{top: '10px', fontFamily: 'auto'}}>“</h2>
                                        <div key={i} className="flex align-items-center mb-4">
                                            <div>
                                                <p className="text-xs m-0">{data.feedback}</p>
                                                <h6 className="text-sm m-0">{data.name}</h6>
                                            </div>
                                            <div>
                                                <img src={data.img} />
                                            </div>
                                        </div>
                                    </div>
                                </>))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className={`h-12rem bg-blue-50 ${styles.emptyContainer}`}>
            </div>
        </div>
        <Welcome />
        <Blog />
    </>)
}

export default Home;