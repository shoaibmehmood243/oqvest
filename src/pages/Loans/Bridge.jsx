import { Button } from "primereact/button";
import { useState } from "react";
import { bridgeloan1, bridgeloan2, bridgeloan3, bridgeloan4, bridgeloanhero, rectangleLeft, rectangleRight } from "../../assets";
import HeroSectionTwo from "../../components/common/HeroSectionTwo";
import Video from "../../components/common/Video";
import Welcome from "../../components/Home/Welcome";
import styles from '../../styles/layouttwo.module.css'
import VideoDialog from "../../components/common/VideoDialog";

const Bridge = ()=> {
    const [video, setVideo] = useState(false);
    const onShow = ()=> {
        setVideo(true)
    }
    const onHide = ()=> {
        setVideo(false)
    }
    return (<>
        <VideoDialog
            videoId="PudGpKWT8GE"
            visible={video}
            onHide={onHide}
        />
        <HeroSectionTwo image={bridgeloanhero}  handleClick={()=> setVideo(true)}
            heading={<>Get the keys to your new home with a mortgage from <strong>Bridge Finance</strong>.</>}
             subheading="Financing designed to let you move into your new dream home now." />
        <div className={styles.gridSection}>
            <div>
                <h6 className="m-0">Bridge Financing </h6>
                <p className={styles.subheading}>Are you prepared to close on your new home purchase but your old one has not yet sold? We can assist if your current home has been listed for a while but the closing date for your new home is approaching.</p>
                <div className="grid my-6 align-items-center">
                    <div className="col-12 md:col-5">
                        <div className={styles.imageSection1}>
                            <div className={styles.img1}>
                                <img src={bridgeloan1} />
                            </div>
                            <div className={styles.img2}>
                                <img src={bridgeloan2} />
                            </div>
                        </div>
                        <div className={styles.imageSection2}>
                            <div className={styles.img3}>
                                <img src={bridgeloan3} />
                            </div>
                            <div className={styles.img4}>
                                <img src={bridgeloan4} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 md:col-7">
                        <div>
                            <strong>Look How It Works</strong>
                            <p className={`${styles.para} mb-4`}>We will finance up to 60% of the combined appraised market value of the two properties through our bridge home loan programme, less any outstanding liens or mortgages on the sold property. When the older home is either owned free and clear or has a lot of equity, this method performs especially well. Even if their home isn't selling right away, many homeowners find that they have a sizable amount of equity when the real estate housing market is strong.</p>
                            <p className={styles.para}>Typically, the first lien position; nevertheless, each situation is examined individually. Although borrowers must have strong credit, credit scores are not taken into account for underwriting or setting prices.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.left}>
                <img src={rectangleLeft} />
            </div>
        </div>
        <div className={styles.section}>
            <div className={styles.headers}>
                <h1>Bridge Financing </h1>
                <p className="text-center">Are you prepared to close on your new home purchase but your old one has not yet sold? We can assist if your current home has been listed for a while but the closing date for your new home is approaching.</p>
            </div>
        </div>
        <div className={styles.detailsSection}>
            <div>
                <h1>Here are some key details</h1>
                <ul>
                    <li>Interest-Only term of 11 Months</li>
                    <li>Competitive rates</li>
                    <li>No prepayment penalties</li>
                </ul>
            </div>
            <div>
                <h1>The collateral for the new home loans can be:</h1>
                <ul>
                    <li>Current home that is for sale</li>
                    <li> New home being purchased</li>
                    <li>Both Properties</li>
                </ul>
                <div><strong>Note: </strong>(All homes being included must be located in the state of Florida)</div>
            </div>
            <div>
                <h1>Other Details:</h1>
                <ul>
                    <li>
                        <strong>Appraisal(s)</strong>
                        If two properties are being mortgaged, then one residential appraisal will be required for each home.
                    </li>
                    <li>
                        <strong> The new mortgage will assume first lien position</strong>
                    </li>
                    <li>
                        <strong>Reserves of 20 months of all debts</strong>
                        (after closing) must be documented
                    </li>
                    <li>
                        <strong>Full-Doc qualification only</strong>
                        (Tax Returns and Asset-based income are used to calculate income)
                    </li>
                    <li>
                        <strong>Borrower must have clean credit;</strong>
                        however credit scores are NOT considered for underwriting qualification or pricing purposes.
                    </li>
                </ul>
            </div>
            <div className="text-center mt-6">
                <Button label="Get your Quote" />
            </div>
        </div>
        <div className={styles.right}>
            <img src={rectangleRight} />
        </div>
        <Welcome />
    </>)
}

export default Bridge;