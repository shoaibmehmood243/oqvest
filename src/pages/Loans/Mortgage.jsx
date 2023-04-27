import { Button } from "primereact/button";
import { useState } from "react";
import { rectangleLeft, mortgageloanhero, mortgageloan1, mortgageloan2, mortgageloan3, mortgageloan4, mortgageloan7, mortgageloan8, mortgageloan9, mortgageloan10, rectangleRight, mortgageloan6, mortgageloan5 } from "../../assets";
import HeroSectionTwo from "../../components/common/HeroSectionTwo";
import Welcome from "../../components/Home/Welcome";
import styles from '../../styles/layouttwo.module.css'
import VideoDialog from "../../components/common/VideoDialog";

const Mortgage = () => {
    const [video, setVideo] = useState(false);
    const onShow = ()=> {
        setVideo(true)
    }
    const onHide = ()=> {
        setVideo(false)
    }
    const data = [
        {
            image: mortgageloan5,
            title: 'Investment Home Loans for Landlords',
            text: "Use the rental income's monthly cash flow to qualify without filing tax returns. A debt service coverage ratio programme is what this is known as. With the exception of residential properties, it operates similarly to a commercial loan.",
            btn: 'Learrn more about DSCR Loans',
            type: 'DSCR'
        },
        {
            image: mortgageloan6,
            title: 'Bridge Loan & Cross-Collateralization',
            text: "We can leverage one loan against the equity of two residential properties thanks to a bridge loan and cross collateralization. Taking into account any outstanding mortgages, we will finance up to 60% of the combined appraised value of the two residences. This programme performs best when one of the two residences is owned completely free of debt or has a low mortgage balance.",
            btn: 'Learn more about Bridge Loans',
            type: 'Bridge'
        },
    ]
    return (<>
        <VideoDialog
            videoId="WuLX2o5tt2Q"
            visible={video}
            onHide={onHide}
        />

        <HeroSectionTwo handleClick={()=> setVideo(true)} image={mortgageloanhero}
            heading={<>The FLEX Mortgage Program </>}
            subheading="the group of mortgage products created with adaptability and second chances in mind." />
        <div className={styles.mortgage}>
            <h1>The FLEX Mortgage Program </h1>
            <p>Our FLEX Mortgage Programs are created for situations that don't fit the mould of conventional mortgage underwriting standards. We offer options whether you're a business owner who doesn't disclose much revenue on tax forms, whether you have a sizable amount of liquid assets but no income, or if you've just experienced a negative credit event like a bankruptcy, foreclosure, short sale, or deed-in-lieu of foreclosure.</p>
        </div>
        <div>
            <div className={styles.left}>
                <img src={rectangleLeft} />
            </div>
            <div className={styles.detailsSection}>
                <h2 className="m-0">Self-Employed Business Owner, Independent Contractor or Entrepreneur? </h2>
                <ul style={{listStyle: 'none', padding: '0', fontStyle: 'normal'}}>
                    <li style={{fontStyle: 'normal'}}>We provide lending solutions that allow us to look beyond the tax returns to gain a clearer picture of your organization's genuine profitability if you are a successful business owner but your tax returns don't accurately reflect your company.</li>
                    <li style={{fontStyle: 'normal'}}>We have the EXPERIENCE of working with business owners and independent contractors every day, which is equally crucial to the loan programmes. rely on our knowledge</li>
                </ul>
                <div className="mt-6">
                    <div className={styles.pills}>
                        <div>
                            <p>Bank Statement Loan</p>
                        </div>
                        <div>
                            <p>Private Cloud Client</p>
                        </div>
                        <div>
                            <p>P & L Loan</p>
                        </div>
                        <div>
                            <p>1099 Prgram</p>
                        </div>
                        <div>
                            <p>Asset Based Loan</p>
                        </div>
                        <div>
                            <p>Cannabis Home Loan</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${styles.detailsSection} ${styles.mortgageSection}`}>
            <div className={styles.section2}>
                <h2>Have a significant liquid wealth, but not enough "Tax Return" income? </h2>
                <ul style={{listStyle: 'none', padding: '0', fontStyle: 'normal'}}>
                    <li style={{fontStyle: 'normal', margin: '0'}}>Many house buyers have a sizeable amount of wealth—either in checking, savings, money market, stocks, or retirement accounts—but their tax returns don't show enough income for them to be approved for a mortgage.</li>
                    <li style={{fontStyle: 'normal', margin: '10px 0px'}}> We provide a number of asset-based lending programmes that enable us to use your liquid reserves as the income when determining whether to approve a loan. You may relax and maintain your important banking and financial relationships since we won't make you move your money around just to get a mortgage.</li>
                </ul>
            </div>
            <div className={styles.mortgageDetails}>
                <div className={styles.mortgageItems}>
                    <div>Private Cloud Client</div>
                    <li style={{listStyle: 'none',fontStyle: 'normal', margin: '0'}}>One of the best combinations of substantial Asset Based Income and loan terms available today is our <strong>PRIVATE CLIENT PORTFOLIO PROGRAM.</strong> It is intended for eligible customers who have sizable liquid reserves. 20% down is the required minimum, and we will finance up to $20 MILLION.</li>
                    <Button label="Learn More" />
                </div>
                <div className={styles.mortgageItems}>
                    <div>Flex Home Loans</div>
                    <li style={{listStyle: 'none',fontStyle: 'normal', margin: '0'}}>For clients with intermediate wealth, our <strong>FLEX ASSET BASED INCOME PROGRAM</strong> offers a generous asset-based income approach (84 Month amortisation). The programme is accommodating of past credit issues, even with a middle FICO score of 620. 10% down is the required minimum, and we will finance up to $3 MILLION.</li>
                    <Button label="Learn More" />
                </div>
                <div className={styles.mortgageItems}>
                    <div>Flex Asset Machine Program</div>
                    <li style={{listStyle: 'none',fontStyle: 'normal', margin: '0'}}>Clients with wealth equal to or more than the new loan amount are eligible for our FLEX ASSET-MATCHING PROGRAM (after down payment and settlement charges). The programme is accommodating of past credit issues, even with a middle FICO score of 600. 10% down is the required minimum, and we will finance up to $4 MILLION.</li>
                    <Button label="Learn More" />
                </div>
            </div>
        </div>
        <div className={styles.gridSection}>
            <div className={styles.right}>
                <img src={rectangleRight} />
            </div>
            <div>
                <h6 className="m-0">Want to close in the name of a trust or LLC?</h6>
                <div className="grid my-6 align-items-center">
                    <div className="col-12 md:col-5">
                        <div className={styles.imageSection1}>
                            <div className={styles.img1}>
                                <img src={mortgageloan1} />
                            </div>
                            <div className={styles.img2}>
                                <img src={mortgageloan2} />
                            </div>
                        </div>
                        <div className={styles.imageSection2}>
                            <div className={styles.img3}>
                                <img src={mortgageloan3} />
                            </div>
                            <div className={styles.img4}>
                                <img src={mortgageloan4} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 md:col-7">
                        <div>
                            <p className={`${styles.para} mb-4`}>The applicant may close in the name of their privately held trust or LLC under our own portfolio loan programme, the PRIVATE CLIENT PORTFOLIO LOAN PROGRAM.</p>
                            <p className={`${styles.para} mb-4`}>20% is the required minimum down payment for this programme. The price of a legal evaluation of the Trust or LLC paperwork is covered by a small fee.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="pt-2 pb-4" style={{ background: 'rgba(153, 153, 153, 0.04)' }}>
        <div className={styles.cardLayout}>
            <h1>2 Jumbo Loan Programs to Choose From:</h1>
            <div className={styles.cardGrid}>
                {
                    data.map((data, i) => (
                        <div key={i} className={styles.mortgageCard}>
                            <div className={styles.image}>
                                <img src={data.image} />
                                <div className="text-right flex justify-content-end mr-2">
                                    <div className={styles.type}><span>{data.type}</span></div>
                                </div>
                            </div>
                            <div className={styles.text}>
                                <div>
                                    <h3>{data.title}</h3>
                                    <p>{data.text}</p>
                                </div>
                                <div>
                                    <button>{data.btn}</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </div>
        <div className={styles.gridSection}>
            <div className={styles.left}>
                <img src={rectangleLeft} />
            </div>
            <div>
                <h6>No waiting periods after a recent derogatory credit event </h6>
                <div className="grid my-5 align-items-center">
                    <div className="col-12 md:col-7">
                        <p className={`mb-4 ${styles.para}`}>If you're one of the millions of Americans who have experienced bankruptcy, a short sale, or a foreclosure, you probably already know that you have to wait a certain amount of time before you can apply for a conventional house loan once more.</p>
                        <p className={`mb-0 ${styles.para}`}>With the help of our FLEX Home Loan, you can resume home ownership without the need for these customary waiting periods as soon as ONE DAY following the incident.</p>
                        <p className={`mt-0 ${styles.para}`}>If the housing event is less than 4 years old, the minimum down payment is 20%, and if it is more than 4 years old, it is 25%.</p>
                    </div>
                    <div className="col-12 md:col-5">
                        <div className={styles.imageSection1}>
                            <div className={styles.img1}>
                                <img src={mortgageloan7} />
                            </div>
                            <div style={{height: 'auto'}} className={styles.img2}>
                                <img src={mortgageloan8} />
                            </div>
                        </div>
                        <div className={styles.imageSection2}>
                            <div className={styles.img3}>
                                <img src={mortgageloan9} />
                            </div>
                            <div className={styles.img4}>
                                <img src={mortgageloan10} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Welcome />
    </>)
}

export default Mortgage;