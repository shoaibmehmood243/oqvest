import styles from '../../styles/hero.module.css'
import {Button} from 'primereact/button'
import { play } from '../../assets';

const HeroSectionTwo = ({image, heading, subheading, handleClick}) => {
    return (
        <div className={`grid max-w-full mb-5 m-0 md:m-0 md:relative ${styles.heroSection}`}>
            <div className={`col-12 md:col-6 px-2 md:pl-8 md:pr-0 ${styles.heroText}`}>
                <h1>{heading}</h1>
                <p>{subheading}</p>
                <div className={styles.sectionTwo}>
                    <div className='px-4 flex align-items-center gap-3 cursor-pointer mb-3'>
                        <img src={play} />
                        <span onClick={handleClick}>Watch Video</span>
                    </div>
                    <a target='_blank' href={'https://lead.oqvest.com/'}>
                    <Button label='Get Pre-approved' />
                    </a>
                    <p>Get pre-approved today. 3 easy steps. No cost/obligations</p>
                </div>
            </div>
            <div className={`col-6 m-0 px-0 hidden md:block ${styles.imageDiv}`}>
                <img className="w-full" src={image} />
            </div>
        </div>
    )
}
export default HeroSectionTwo;