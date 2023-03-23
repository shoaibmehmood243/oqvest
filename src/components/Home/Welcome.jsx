import { welcome } from "../../assets";
import styles from '../../styles/welcome.module.css'
import { InputMask} from 'primereact/inputmask'
import {Button} from 'primereact/button'
import { useState } from "react";

const Welcome = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };
    return (
        <div className="w-full md:w-10 lg:w-9 m-auto my-7">
            <div className="grid max-w-full">
                <div className="col-12 lg:col-6 ml-3 lg:ml-0">
                    <div className="mt-5">
                        <h1 className="text-4xl mb-1 mt-0">Ready to buy your dream house??</h1>
                    </div>
                    <div className="custom-tab-shift my-4">
                        <div className={styles.tabButton}>
                            <button className={activeTab === 0 ? styles.active : ''} onClick={() => handleTabClick(0)}>Get Pre-approved</button>
                            <button className={activeTab === 1 ? styles.active : ''} onClick={() => handleTabClick(1)}>Purchase</button>
                            <button className={activeTab === 2 ? styles.active : ''} onClick={() => handleTabClick(2)}>Refinnace</button>
                        </div>
                        <div className={`w-full md:w-10 lg:w-8 ${styles.tabContent}`}>
                            {activeTab === 0 &&
                                <div className={`mb-4 mt-0 w-full ${styles.inputZip}`}>
                                    <InputMask mask="999999" placeholder="Enter your zip code here" />
                                    <Button label='Search' />
                                </div>
                            }
                            {activeTab === 1 && <div className={`mb-4 mt-0 w-full ${styles.inputZip}`}>
                                <InputMask mask="999999" placeholder="Enter your zip code here" />
                                <Button label='Search' />
                            </div>}
                            {activeTab === 2 && <div className={`mb-4 mt-0 w-full ${styles.inputZip}`}>
                                <InputMask mask="999999" placeholder="Enter your zip code here" />
                                <Button label='Search' />
                            </div>}
                        </div>
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