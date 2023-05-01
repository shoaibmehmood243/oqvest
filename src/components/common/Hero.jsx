import { useState } from 'react';
import styles from '../../styles/hero.module.css'
import { InputMask} from 'primereact/inputmask'
import {Button} from 'primereact/button'

const Hero = ({image, heading, subheading}) => {
    const [activeTab, setActiveTab] = useState(0);
    const [zipCode, setZipCode] = useState('');
    const [isValid, setIsValid] = useState(true);

    const handleInputChange = (event) => {
        setZipCode(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const zipCodeRegex = /^\d{5}$/
        setIsValid(zipCodeRegex.test(Number(zipCode)));
        if (isValid && zipCode.length > 0) {
            const url = `https://lead.oqvest.com`;
            window.open(url, '_blank');
        }
    };

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };
    return (
        <div className={`grid max-w-full mb-5 m-0 md:m-0 md:relative ${styles.heroSection}`}>
            <div className={`col-12 lg:col-6 px-2 md:pl-8 md:pr-1 ${styles.heroText}`}>
                <h1>{heading}</h1>
                <p>{subheading}</p>
                <div className={styles.tabShift}>
                    <div className={styles.tabButtons}>
                        <button className={activeTab === 0 ? styles.activeTab : ''} onClick={() => handleTabClick(0)}>Get Pre-approved</button>
                        <button className={activeTab === 1 ? styles.activeTab : ''} onClick={() => handleTabClick(1)}>Purchase</button>
                        <button className={activeTab === 2 ? styles.activeTab : ''} onClick={() => handleTabClick(2)}>Refinance</button>
                    </div>
                    <div className="tab-content">
                        {activeTab === 0 &&
                            <form onSubmit={handleSubmit}>
                                <div className={`mb-1 mt-5 w-full flex ${styles.inputZip}`}>
                                    <InputMask value={zipCode}
                                        onChange={handleInputChange}
                                         mask="99999" placeholder="Enter your zip code here" />

                                    <Button className='px-5' label='Search' />
                                </div>
                                {!isValid && <small className='text-red-400'>Please enter a valid zip code.</small>}
                            </form>
                        }
                        {activeTab === 1 &&
                            <form onSubmit={handleSubmit}>
                                <div className={`mb-1 mt-5 w-full flex ${styles.inputZip}`}>
                                    <InputMask value={zipCode}
                                        onChange={handleInputChange}
                                         mask="99999" placeholder="Enter your zip code here" />
                                    <Button className='px-5' label='Search' />
                                    {!isValid && <small className='text-red-400'>Please enter a valid zip code.</small>}

                                </div>
                            </form>
                        }
                        {activeTab === 2 &&
                            <form onSubmit={handleSubmit}>
                                <div className={`mb-1 mt-5 w-full flex ${styles.inputZip}`}>
                                    <InputMask value={zipCode}
                                        onChange={handleInputChange}
                                         mask="99999" placeholder="Enter your zip code here" />

                                    <Button className='px-5' label='Search' />
                                {!isValid && <small className='text-red-400'>Please enter a valid zip code.</small>}

                                </div>
                            </form>
                        }
                    </div>
                </div>
            </div>
            <div className={`col-6 m-0 px-0 hidden lg:block ${styles.imageDiv}`}>
                <img className="w-full" src={image} />
            </div>
        </div>
    )
}
export default Hero;