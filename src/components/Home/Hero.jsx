import { Button } from 'primereact/button'
import {Link} from 'react-router-dom';
import { HeroImage } from '../../assets';
import styles from '../../styles/home.module.css'

const Hero = ()=> {
    return(
        <div className={`grid max-w-full m-0 md:relative ${styles.heroSection}`}>
            <div className={`col-12 md:col-6 px-4 md:px-8 ${styles.heroText}`}>
                <h1>In just <strong className="st-1">two weeks</strong>, real estate investors can get funded without providing <strong className="st-2">pay stubs, W-2s, tax returns, or income verification.</strong></h1>
                <p>"Our technology offers hassle-free options to help you find the best rates quickly and easily."</p>
                <Link style={{textDecoration: 'none'}} to="lead">
                    <Button label="Paperless & Quick - Apply Now!" />
                </Link>
            </div>
            <div className={`col-6 m-0 px-0 ${styles.imageDiv}`}>
                <img className="w-full" src={HeroImage} />
            </div>
        </div>
    )
}
export default Hero;