import { useState } from 'react';
import { HeroImage, hero1, hero2, hero3 } from '../../assets';
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
            <div className={`col-12 lg:col-6 px-2 md:pl-4 lg:pl-8 md:pr-1 ${styles.heroText}`}>
                <h1>
                    { activeTab === 1 ? <>
                        Looking for your <strong className='st-1'> dream home?</strong> Let <strong className='st-2'>Oqvest</strong> make a difference:
                         </> :
                        activeTab === 2 ? <>Need the <strong className='st-1'>extra cash</strong> or reduce your monthly Payment? See how <strong className='st-2'>Oqvest</strong> Rocks:</> :
                        <>Get <strong className='st-1'>Pre-approved</strong> today, See the <strong className='st-2'>Oqvest</strong> difference:</>
                    }
                </h1>
                <p>
                    <ul className="items">
                        {
                            activeTab === 1 ? <>
                                <li><img src={hero1} /> Enjoy more savings with our low rates.</li>
                                <li><img src={hero2} /> Choose from our multiple loan programs to fit your specific needs.</li>
                                <li><img src={hero3} /> On time closing & Expert support.</li>
                            </> : activeTab === 2 ? <>
                                <li><img src={hero1} /> Lowest rates in the industry</li>
                                <li><img src={hero2} /> Multiple options generally not available at big banks</li>
                                <li><img src={hero3} /> On time closing & Expert support.</li>
                            </> : <>
                                <li><img src={hero1} /> Our low rates helps you maximize your budget</li>
                                <li><img src={hero2} /> Bid with confidence & Negotiate like a pro</li>
                                <li><img src={hero3} /> Quick & Easy! Get Started now</li>
                            </>
                        }
                    </ul>
                </p>
                <p>“Low rates, <span className='st-2'>big savings</span> – Oqvest has you covered.”</p>
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
            <div className={`col-6 m-0 px-0 hidden md:hidden lg:block ${styles.imageDiv}`}>
                <img className="w-full" src={HeroImage} />
            </div>
        </div>
    )
}
export default Hero;