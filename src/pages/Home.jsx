import { Button } from "primereact/button";
import { calculator, card, card1, card2, forbes, inc, msn, shield, yahoo } from "../assets";
import Hero from "../components/Home/Hero";
import styles from '../styles/home.module.css'
import { Carousel } from 'primereact/carousel';

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
    return (<>
        <Hero />
        <div className={`my-6 ${styles.featured}`}>
            <div className="text-center mb-5">
                <Button label={` Featured In`} icon={<img height={18} src={shield} />} />
            </div>
            <div style={{maxWidth: '100vw'}} className="images">
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
        <div className={styles.price}>
            <h2 className="w-full m-auto md:w-10 lg:w-8 text-center m-3">Find the right rate for you. Get a fast quote in 5 minutes or less.  We are always ready to serve you.</h2>
            <div style={{display: 'flex'}} className="gird mt-6">
                <div className="col-6">
                    <div>
                        <img src={card} />
                        <img style={{marginTop: '-120px'}} src={card2} />
                        <img style={{marginTop: '-120px'}} src={card1} />
                    </div>
                    <div></div>
                </div>
                <div className="col-6 mt-6">
                    <h3>Get Your Price now with Oqvest</h3>
                    <p className="w-full md:w-10 lg:w-8">Get the best results with us. We offer personal quotes within 5 minutes and help you understand the process all the way. Let your dreams come true!</p>
                    <Button className="mt-5" label="Want a Quote?" />
                </div>
            </div>
        </div>
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
    </>)
}

export default Home;