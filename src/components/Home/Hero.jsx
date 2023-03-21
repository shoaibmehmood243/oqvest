import { useState } from 'react';
import { HeroImage } from '../../assets';
import styles from '../../styles/home.module.css'
import { InputMask} from 'primereact/inputmask'
import {Button} from 'primereact/button'

const Hero = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };
    return (
        <div className={`grid max-w-full m-0 md:relative ${styles.heroSection}`}>
            <div className={`col-12 md:col-6 px-4 md:px-8 ${styles.heroText}`}>
                <h1>{ activeTab === 1 ? 
                        `Want to purchase a property? Oqvest has your back` :
                        activeTab === 2 ? `Get ready to refinance your Mortgage with Oqvest.` :
                        `Find the right mortgage at Oqvest.`
                    }
                </h1>
                <p>Sort through thousands of options and find your perfect home loan today.</p>
                <div className="custom-tab-shift">
                    <div className={styles.tabButtons}>
                        <button className={activeTab === 0 ? styles.active : ''} onClick={() => handleTabClick(0)}>Tab 1</button>
                        <button className={activeTab === 1 ? styles.active : ''} onClick={() => handleTabClick(1)}>Tab 2</button>
                        <button className={activeTab === 2 ? styles.active : ''} onClick={() => handleTabClick(2)}>Tab 3</button>
                    </div>
                    <div className="tab-content">
                        {activeTab === 0 && 
                            <div className={`mb-4 mt-5 w-full ${styles.inputZip}`}>
                                <InputMask mask="999999" placeholder="Enter your zip code here" />
                                <Button label='Search' />
                            </div>
                        }
                        {activeTab === 1 && <div className={`mb-4 mt-5 w-full ${styles.inputZip}`}>
                                <InputMask mask="999999" placeholder="Enter your zip code here" />
                                <Button label='Search' />
                            </div>}
                        {activeTab === 2 && <div className={`mb-4 mt-5 w-full ${styles.inputZip}`}>
                                <InputMask mask="999999" placeholder="Enter your zip code here" />
                                <Button label='Search' />
                            </div>}
                    </div>
                </div>
            </div>
            <div className={`col-6 m-0 px-0 ${styles.imageDiv}`}>
                <img className="w-full" src={HeroImage} />
            </div>
        </div>
    )
}
export default Hero;