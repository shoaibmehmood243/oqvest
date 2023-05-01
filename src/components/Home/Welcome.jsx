import { welcome } from "../../assets";
import styles from '../../styles/welcome.module.css'
import { InputMask } from 'primereact/inputmask'
import { Button } from 'primereact/button'
import { useState } from "react";

const Welcome = () => {
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
        <div className="w-full md:w-10 lg:w-9 m-auto mb-2 md:mb-7 mt-2 md:my-7">
            <div className="grid max-w-full px-3 flex-column-reverse md:flex-row md:px-0">
                <div className="col-12 lg:col-6 ml-2 lg:ml-0">
                    <div className="mt-5">
                        <h1 className="text-2xl md:text-4xl mb-1 mt-0">Start <strong className="st-1">Saving</strong> with Oqvest' s Expert Help - <strong className="st-2"> Act Now!</strong></h1>
                    </div>
                    <div className="custom-tab-shift my-4">
                        <div className={styles.tabButton}>
                            <button className={activeTab === 0 ? styles.active : ''} onClick={() => handleTabClick(0)}>Get Pre-approved</button>
                            <button className={activeTab === 1 ? styles.active : ''} onClick={() => handleTabClick(1)}>Purchase</button>
                            <button className={activeTab === 2 ? styles.active : ''} onClick={() => handleTabClick(2)}>Refinnace</button>
                        </div>
                        <div className={` ${styles.tabContent}`}>
                            {activeTab === 0 &&
                                <form onSubmit={handleSubmit}>

                                    <div className={`mb-1 mt-0 ${styles.inputZip}`}>
                                        <InputMask value={zipCode}
                                            onChange={handleInputChange} mask="99999" placeholder="Enter your zip code here" />
                                        <Button label='Get my Quote' />
                                    </div>
                                    {!isValid && <small className='text-red-400'>Please enter a valid zip code.</small>}
                                </form>
                            }
                            {activeTab === 1 &&
                                <form onSubmit={handleSubmit}>

                                    <div className={`mb-1 mt-0 ${styles.inputZip}`}>
                                        <InputMask value={zipCode}
                                            onChange={handleInputChange} mask="99999" placeholder="Enter your zip code here" />
                                        <Button label='Get my Quote' />
                                    </div>
                                    {!isValid && <small className='text-red-400'>Please enter a valid zip code.</small>}
                                </form>
                            }
                            {activeTab === 2 &&
                                <form onSubmit={handleSubmit}>

                                    <div className={`mb-1 mt-0 ${styles.inputZip}`}>
                                        <InputMask value={zipCode}
                                            onChange={handleInputChange} mask="99999" placeholder="Enter your zip code here" />
                                        <Button label='Get my Quote' />
                                    </div>
                                    {!isValid && <small className='text-red-400'>Please enter a valid zip code.</small>}
                                </form>
                            }
                        </div>
                        <p className="welcome-text">Already got one ? <span>Get Your quotes back</span></p>
                    </div>
                </div>
                <div className="col-12 lg:col-6">
                    <div>
                        <img className="max-w-full" src={welcome} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;