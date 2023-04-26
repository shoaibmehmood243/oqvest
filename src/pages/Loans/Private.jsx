import { useState } from "react";
import {  privateloan1, privateloan2, privateloan3, privateloan4, privateloanhero, rectangleLeft } from "../../assets";
import Apply from "../../components/common/Apply";
import HeroSectionTwo from "../../components/common/HeroSectionTwo";
import Video from "../../components/common/Video";
import Welcome from "../../components/Home/Welcome";
import styles from '../../styles/layouttwo.module.css'
import VideoDialog from "../../components/common/VideoDialog";

const Private = ()=> {
    const [video, setVideo] = useState(false);
    const onShow = ()=> {
        setVideo(true)
    }
    const onHide = ()=> {
        setVideo(false)
    }
    return (<>
        <VideoDialog
            videoId="E9iFA9VWOCk"
            visible={video}
            onHide={onHide}
        />

        <HeroSectionTwo handleClick={()=> setVideo(true)} image={privateloanhero} 
            heading={<>Private Client <strong>Portfolio</strong></>}
            subheading="The quickest route to approval for self-employed house buyers is our P&L financing programme." />
        <div className={styles.gridSection}>
            <div>
                <h6 className="m-0">Private Client Portfolio</h6>
                <p className={styles.subheading}>Our Private Client Portfolio Loan Program is our personalized loan solution designed for the unique lending needs of well-qualified high net-worth individuals.</p>
                <div className="grid my-6">
                    <div className="col-12 md:col-5">
                        <div className={styles.imageSection1}>
                            <div className={styles.img1}>
                                <img src={privateloan1} />
                            </div>
                            <div className={styles.img2}>
                                <img src={privateloan2} />
                            </div>
                        </div>
                        <div className={styles.imageSection2}>
                            <div className={styles.img3}>
                                <img src={privateloan3} />
                            </div>
                            <div className={styles.img4}>
                                <img src={privateloan4} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 md:col-7">
                        <div>
                            <p className={`${styles.para} mb-4`}>Many constraints on conventional bank loans are burdensome and frequently do not apply to borrowers with a high level of financial sophistication. These strict restrictions can lead to an unnecessary loan denial.</p>
                            <p className={`${styles.para} mb-4`}>This initiative is not a typical bank loan that a computer underwrites. Machines are not designed to take into consideration the subtleties of an expertly crafted financial portfolio.</p>
                            <p className={styles.para}>Our most knowledgeable underwriters carefully hand-underwrite this loan while taking into account the applicant's overall financial profile.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.left}>
                <img src={rectangleLeft} />
            </div>
        <div className={`my-8 ${styles.detailsSection}`}>
            <div>
                <h1>Features & Benefits:</h1>
                <ul className={styles.list}>
                    <li>
                        <strong>Larger loan amounts:</strong>
                        We can lend from $100,000 loan amounts up to $20MM. This is our most flexible full-doc Jumbo home loan as well.
                    </li>
                    <li>
                        <strong> Close in the name of a Trust or LLC:</strong>
                        Yes, we allow you to close the home in the name of your trust or LLC, subject to conditions. Consult loan originator for details.
                    </li>
                    <li>
                        <strong>No Credit Score Requirements:</strong>
                        We do not use the applicant's credit scores for the purposes of pricing or qualification. We perform our own evaluation of the applicant's entire credit profile and background.
                    </li>
                    <li>
                        <strong>Common Sense Underwriting:</strong>
                        Our loan originators and underwriting team proactively seek ways to make an application work, using the applicant's strengths to balance potential shortfalls
                    </li>
                    <li>
                        <strong>Income calculation:</strong>
                        This is where high net-worth individuals often run into trouble on a traditional bank loan program. The good news is that this is where we shine. Unlike the typical bank or credit union, we are very experienced with scenarios like this to ensure that all available income is used to qualify.
                    </li>
                    <li>
                        <strong>Flexible Asset-Based Income Calculation:</strong>
                        Many of our clients have substantial wealth, but sometimes lack the necessary income on their tax returns to qualify for a traditional Conventional or Jumbo home loan. Our unique formulation of income allows us to calculate over 33% more income for qualification purposes than a Conventional loan, and can open more possibilities for applicants buying bigger homes.
                    </li>
                    <li>
                    We DO NOT require you to move your money around in exchange for a home loan, enabling you to keep your trusted financial advisors and investment relationships in place as you see fit.                        
                    </li>
                    <li>
                        <strong>No Escrow Account Requirement:</strong>
                        We do not manage escrows for property taxes or homeowners insurance. Only homes located in FEMA-designated Flood Zones are required to escrow.
                    </li>
                    <li>
                        <strong>Non-typical income types accepted on a case-by-case basis:</strong>
                        Newly Self-Employed • Newly- 1099'd • High-Dollar Employment Contract Work (Entertainers, Professional Athlete, Law Firm Partner, etc.)
                    </li>
                </ul>
            </div>
        </div>
        <Apply />
        <Welcome />

    </>)
}

export default Private;