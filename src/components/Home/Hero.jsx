import { useState } from 'react';
import { HeroImage } from '../../assets';
import styles from '../../styles/hero.module.css'
import { InputMask} from 'primereact/inputmask'
import {Button} from 'primereact/button'

const Hero = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };
    return (
        <div className={`grid max-w-full mb-5 m-0 md:m-0 md:relative ${styles.heroSection}`}>
            <div className={`col-12 md:col-6 px-2 md:px-7 ${styles.heroText}`}>
                <h1>{ activeTab === 1 ? 
                        `Want to purchase a property? Oqvest has your back` :
                        activeTab === 2 ? `Get ready to refinance your Mortgage with Oqvest.` :
                        `Find the right mortgage at Oqvest.`
                    }
                </h1>
                <p>Sort through thousands of options and find your perfect home loan today.</p>
                <div className={styles.tabShift}>
                    <div className={styles.tabButtons}>
                        <button className={activeTab === 0 ? styles.activeTab : ''} onClick={() => handleTabClick(0)}>Get Pre-approved</button>
                        <button className={activeTab === 1 ? styles.activeTab : ''} onClick={() => handleTabClick(1)}>Purchase</button>
                        <button className={activeTab === 2 ? styles.activeTab : ''} onClick={() => handleTabClick(2)}>Refinance</button>
                    </div>
                    <div className="tab-content">
                        {activeTab === 0 && 
                            <div className={`mb-4 mt-5 w-full flex ${styles.inputZip}`}>
                                <InputMask mask="999999" placeholder="Enter your zip code here" />
                                <Button className='px-5' label='Search' />
                            </div>
                        }
                        {activeTab === 1 && <div className={`mb-4 mt-5 w-full flex ${styles.inputZip}`}>
                                <InputMask mask="999999" placeholder="Enter your zip code here" />
                                <Button className='px-5' label='Search' />
                            </div>}
                        {activeTab === 2 && <div className={`mb-4 mt-5 w-full flex ${styles.inputZip}`}>
                                <InputMask mask="999999" placeholder="Enter your zip code here" />
                                <Button className='px-5' label='Search' />
                            </div>}
                    </div>
                </div>
            </div>
            <div className={`col-6 m-0 px-0 hidden md:block ${styles.imageDiv}`}>
                <img className="w-full" src={HeroImage} />
            </div>
        </div>
    )
}
export default Hero;