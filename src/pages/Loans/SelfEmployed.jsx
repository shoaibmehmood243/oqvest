import { Button } from "primereact/button";
import { calculator, client1, client2, client3, closing, forbes, guarantee, hidden, inc, msn, privacy, rectangleLeft, rectangleRight, selfEmployedHero, service, shield, yahoo } from "../../assets";
import Hero from "../../components/common/Hero";
import styles from '../../styles/home.module.css'
import { Carousel } from 'primereact/carousel';
import Welcome from "../../components/Home/Welcome";
import Blog from "../../components/Home/Blog";
import Rate from "../../components/common/Rate";
import ProductSlider from "../../components/common/ProductSlider";

const SelfEmployed = ()=> {
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
    const chooseData = [
        {
            img: guarantee,
            title: 'Low rate Guarantee',
            text: 'Oqvest offers the lowest rates in the market, thanks to our commitment to transparency and honesty. We negotiate the most competitive rates on your behalf, so you can save money and achieve your homeownership goals.'
        },
        {
            img: service,
            title: 'Personalized Service',
            text: 'Oqvest takes a personalized approach to mortgage lending, taking the time to understand your unique needs and goals. We offer customized solutions to help you achieve your homeownership dreams.'
        },
        {
            img: closing,
            title: 'On-time Closing',
            text: 'At Oqvest, we understand the importance of closing on time. We have a proven track record of success in the market and are committed to meeting your closing date. With our efficient and effective service, you can count on a timely closing for your mortgage.'
        },
        {
            img: hidden,
            title: 'No Hidden/Junk Fees',
            text: 'Oqvest is committed to transparency and honesty. We never charge hidden or junk fees and always provide clear and accurate breakdowns of all costs and fees, ensuring a fair and straightforward deal every time.'
        },
        {
            img: privacy,
            title: 'Privacy Pledge',
            text: 'Oqvest is committed to transparency and honesty. We never charge hidden or junk fees and always provide clear and accurate breakdowns of all costs and fees, ensuring a fair and straightforward deal every time.'
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
        <Hero image={selfEmployedHero} heading={<>Mortgages for <strong>Self-Employed</strong> Borrowers</>} subheading="Are you self-employed and would like to get approved for a home loan? We can help with all of your needs, including rate comparisons and legal tips." />
        <div className={`mt-7 mb-6 md:my-6 ${styles.featured}`}>
            <div className="text-center mb-5">
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
        <div className={styles.calculateSection}>
        <div className={styles.calculate}>
            <div>
                <div className="text-center">
                    <img src={calculator} />
                    <h4 className="w-full m-auto my-3 md:w-10 lg:w-8">Make <strong className="st-1">informed decision</strong>, calculate your affordability with Oqvest' s <strong className="st-2">mortgage calculator</strong></h4>
                    <Button label="Get Started Now" />
                </div>
                <h1>Mortage Calculator</h1>
            </div>
        </div>
        </div>
        <ProductSlider />
        <div style={{ background: 'rgba(153, 153, 153, 0.04)' }} className="choose pt-2 pb-6">
        <div className={styles.right}>
                <img src={rectangleRight} />
            </div>
            <h1 className="text-center mb-7 mt-0"><strong className="st-1">Your Mortgage</strong>, <strong className="st-2">Your Choice</strong>: Choose Oqvest</h1>
            <div className={`w-full md:w-10 lg:w-9 mt-3 ${styles.grid}`}>
                {
                    chooseData.map((data, i)=> (
                        <div key={i} className={styles.gridItems}>
                            <div>
                                <img height={60} className='mb-3' src={data.img} />
                            </div>
                            <div>
                                <h4 className="m-0">{data.title}</h4>
                                <p className="m-0 text-sm">{data.text}</p>
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
            <div className="w-11 md:w-10 lg:w-8 m-auto">
                <div className="grid max-w-full">
                    <div className="col-12 lg:col-6 mt-5 mb-3 ml-2 lg:ml-0">
                    <h1 className="mb-1">Oqvest: <strong className="st-1">Adored</strong> by <strong className="st-2">Clients</strong></h1>
                        <p className="mt-0 mb-6" style={{color: '#395F99'}}>See what people are sayinng about us.Our happy customers</p>
                        <Button label="Read more Feedbacks" />
                    </div>
                    <div className="col-12 lg:col-6">
                        <div className={styles.feedback}>
                            {
                                clients.map((data, i)=> (
                                    <div key={i} className="flex align-items-center mb-5">
                                        <div>
                                            <p className="text-xs m-0">{data.feedback}</p>
                                            <h6 className="text-xs m-0">{data.name}</h6>
                                        </div>
                                        <div>
                                            <img src={data.img} />
                                        </div>
                                    </div>
                                ))
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

export default SelfEmployed;