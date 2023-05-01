import { useEffect, useState } from "react";
import { comboloan1, comboloan2, comboloan3, comboloan4, comboloanhero, rectangleLeft, rectangleRight, vector } from "../../assets";
import HeroSectionTwo from "../../components/common/HeroSectionTwo";
import Welcome from "../../components/Home/Welcome";
import styles from '../../styles/layouttwo.module.css'
import VideoDialog from "../../components/common/VideoDialog";

const ComboHome = ()=> {
    const [video, setVideo] = useState(false);
    const onHide = ()=> {
        setVideo(false)
    }
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (<>
        <VideoDialog
            videoId="f3FP666KtNk"
            visible={video}
            onHide={onHide}
        />
        <HeroSectionTwo  handleClick={()=> setVideo(true)} image={comboloanhero} 
            heading="Combo Home Loans"
            subheading="A COMBO loan is the combination of TWO different home loans to purchase a home." />
        <div className={styles.gridSection}>
            <div>
                <h6 className="m-0">Combo Home Loans </h6>
                <p className={styles.subheading}>A COMBO loan combines TWO separate mortgages to pay for a house. The first loan we use is a regular CONVENTIONAL loan to pay the majority of the purchase price (between 75% and 80%), and the second loan we use is a Home Equity Line of Credit to cover the remaining 10% to 15%. Both loans close on the same day, and your down payment (10%) plus both loans equal 100% of the total purchase price.</p>
            </div>
            <div>
                <h6 className="my-6">About HELOC Financing </h6>
                <div className="grid my-5 align-items-center">
                    <div className="col-12 md:col-7">
                        <p className={`${styles.para} mt-0 mb-4`}>Open-end revolving credit with interest-only payments for the first ten years is the Home Equity Line of Credit (HELOC). Along with the Prime rate, the rate varies every month. To gradually lower interest payments, you may pay off this line of credit as rapidly as you choose.</p>
                        <p className={`${styles.para} mt-0 mb-4`}>For the first ten years, a HELOC works similarly to a credit card in that more money becomes accessible for use in emergencies as you reduce the balance.</p>
                    </div>
                    <div className="col-12 md:col-5">
                        <div className={styles.imageSection1}>
                            <div className={styles.img1}>
                                <img src={comboloan1} />
                            </div>
                            <div className={styles.img2}>
                                <img src={comboloan2} />
                            </div>
                        </div>
                        <div className={styles.imageSection2}>
                            <div className={styles.img3}>
                                <img src={comboloan3} />
                            </div>
                            <div className={styles.img4}>
                                <img src={comboloan4} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.left}>
                    <img src={rectangleLeft} />
                </div>
            </div>
        </div>
        <div className={`${styles.section} mt-6`}>
            <div className={styles.headers}>
                <h1 className="mb-0 text-center">Why Use COMBO Financing?</h1>
                <p className="mt-1 text-center">Look at some examples to understannd it more clearly.</p>
            </div>
        </div>
        <div className={styles.detailsSection2}>
            <h4 className="text-center my-0"><span>Example 1:</span> Avoid Jumbo Financing</h4>
            <p className="text-center mt-0">Easier to Qualify vs Jumbo.</p>
            <div className="grid align-items-center">
                <div className="col-12 md:col-7">
                    <p className={styles.para}>Jumbo financing's qualification requirements might be substantially more onerous than those for conventional lending.
                        For instance, depending on the recentness of the occurrence, you could not be eligible for a jumbo loan if you have a recent housing event like a foreclosure, bankruptcy, short sale, etc. in your background. We employ Conventional underwriting standards for our COMBO loan, which are laxer than Jumbo standards. Before submitting an application for a COMBO loan, be sure to review our Waiting Period Chart for Conventional Financing if you just experienced a housing incident.
                        Fixed rates and a lower down payment requirement. The minimum down payment for jumbo loans is frequently more than 10%. Additionally, the interest rate is often only fixed for 5–10 years with most Jumbo financing schemes. The majority of the financing for a COMBO is fixed for 30 years.
                    </p>
                </div>
                <div className="col-12 md:col-5">
                    <div>
                        <img src={vector} />
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.detailsSection2}>
            <h4 className="text-center my-0"><span className={styles.span}>Example 2:</span> Maximize Cash-Out</h4>
            <p className="text-center mt-0">Get more cash-out when refinancing</p>
            <div className="grid align-items-center">
                <div className="col-12 md:col-7">
                    <p className={`${styles.para} mt-1 mb-3`}>The maximum loan size for conventional financing of a home is capped at 80% of the home's appraised value.</p>
                    <h5>Here is where COMBO Financing is helpful.</h5>
                    <p className={`${styles.para} mt-1 mb-0`}>You can either:</p>
                    <p className={`${styles.para} mt-0 mb-3`}>Create a Home Equity Line of Credit for the remaining 10% of the first conventional loan and refinance it as a "cash-out" mortgage, giving you a combined equity leverage of 90% of the appraised value.</p>
                    <p className={`${styles.para} mt-1 mb-3`}>Create the Home Equity Line of Credit with the cashout funds and refinance your first loan as a "rate & term refinance" (only current mortgage and settlement costs are rolled into the new loan). This frequently enables the homeowner to obtain the initial fixed-rate conventional loan at a cheaper rate.</p>
                </div>
                <div className="col-12 md:col-5">
                    <div>
                        <img src={vector} />
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.right}>
                <img src={rectangleRight} />
            </div>
        <Welcome />
    </>)
}

export default ComboHome;