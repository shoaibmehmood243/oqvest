import { Button } from "primereact/button";
import { useState } from "react";
import { bankloan1, bankloan2, bankloan3, bankloan4, bankloan5, bankloan6, bankloan7, bankloan8, bankloanhero, rectangleLeft, rectangleRight } from "../../assets";
import Apply from "../../components/common/Apply";
import HeroSectionTwo from "../../components/common/HeroSectionTwo";
import Video from "../../components/common/Video";
import Welcome from "../../components/Home/Welcome";
import styles from '../../styles/layouttwo.module.css'
import VideoDialog from "../../components/common/VideoDialog";

const BankStatement = ()=> {
    const [video, setVideo] = useState(false);
    const onShow = ()=> {
        setVideo(true)
    }
    const onHide = ()=> {
        setVideo(false)
    }
    return (<>
        <VideoDialog
            videoId="lG4NBGQxDzA"
            visible={video}
            onHide={onHide}
        />
        <HeroSectionTwo handleClick={()=> setVideo(true)} image={bankloanhero} 
            heading={<>Bank Statement Home <strong>Loans</strong></>}
            subheading="Designed to finance your home purchase with no questions asked, no due dates and no hassle." />
        <div className={styles.gridSection}>
            <div>
                <h6 className="m-0">Bank Statement Home Loans</h6>
                <p className={styles.subheading}>To qualify for a home loan instead of filing tax returns, use the deposit income from your business bank statements.</p>
                <div className="grid my-6">
                    <div className="col-12 md:col-6">
                        <div className={styles.imageSection1}>
                            <div className={styles.img1}>
                                <img src={bankloan1} />
                            </div>
                            <div className={styles.img2}>
                                <img src={bankloan2} />
                            </div>
                        </div>
                        <div className={styles.imageSection2}>
                            <div className={styles.img3}>
                                <img src={bankloan3} />
                            </div>
                            <div className={styles.img4}>
                                <img src={bankloan4} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 md:col-6">
                        <div>
                            <strong>The business owner's secret weapon is what we simply refer to as.</strong>
                            <p className={`${styles.para} mb-4`}>Do you have a minimum of two years of self-employment? You "didn't show enough income on your tax returns," so your bank or credit union has denied you for a traditional home loan</p>
                            <p className={styles.para}>It's not just you. Business owners from coast to coast experience this. The reason is because banks are required to calculate your income based on the taxable income reported on the tax returns of the business owner. Business owners have access to a set of guidelines that act as a tax defence strategy thanks to the US tax code. A whole sector of the tax profession is devoted to reducing business owners' tax obligations. When a business owner uses an aggressive tax strategy, their life is wonderful—until they go to apply for a mortgage, that is!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h6>The Paradox of Being Self-Employed... </h6>
                <div className="grid my-5 align-items-center">
                    <div className="col-12 md:col-6">
                        <p className={styles.para}>Banks and credit unions are subject to the same tax regulations as business owners. Only your tax returns may be used by banks and mortgage lenders to assess your ability to pay the monthly mortgage payments on a "traditional" home loan (such as a Conventional, FHA, VA, or USDA programme).</p>
                        <p className={styles.para}>In other words, if you claim on your tax returns that you are "broke," your bank or credit union will take the same stance. And a lot of business owners have their applications rejected in this way.</p>
                    </div>
                    <div className="col-12 md:col-6">
                        <div className={styles.imageSection1}>
                            <div className={styles.img1}>
                                <img src={bankloan5} />
                            </div>
                            <div className={styles.img2}>
                                <img src={bankloan6} />
                            </div>
                        </div>
                        <div className={styles.imageSection2}>
                            <div className={styles.img3}>
                                <img src={bankloan7} />
                            </div>
                            <div className={styles.img4}>
                                <img src={bankloan8} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.left}>
                    <img src={rectangleLeft} />
                </div>
            </div>
        </div>
        <div className={styles.section}>
            <div className={styles.headers}>
                <h6 className="mt-5 mb-2"><strong>The Solution:</strong> The Bank Statement Loan  </h6>
                <p className="text-center">This issue is resolved by our bank statement loan programme. We give the business owner the option of using the regular business deposit income in their bank statements as the income on the new loan instead of tax returns. It frequently paints a more accurate picture of the applicant's actual income profile and business profitability, according to our research.</p>
            </div>
        </div>
        <div className={styles.detailsSection}>
            <div className={styles.bank}>
                <h3 className="m-0">How does it Work? </h3>
                <p className="mt-1">The calculation process is simple and straight-forward.</p>
                <div>
                    <h6>Here's how we calculate the qualifying income on a Bank Statement Loan:</h6>
                    <ul>
                        <li>We examine your business's bank statements from the previous 12 to 24 months, taking note of all regular business deposits.</li>
                        <li>Divide the figure ($) by the number of total bank statements being reviewed.</li>
                        <li>Multiply this figure X your ownership percentage (%) in the business.</li>
                        <li>Multiply this number X 50% (this is a default business expense ratio that is applied to the income)</li>
                    </ul>
                    <h6>And the resultant figure becomes the monthly income for your new loan.</h6>
                </div>
            </div>
            <div className="mt-6">
                <Button label="Get your Quote" />
            </div>
        </div>
        <div className={styles.right}>
            <img src={rectangleRight} />
        </div>
        <div className={styles.happensSection}>
            <h1>So you might be asking, <strong>"What happens if my business is operating with expense ratio lower than 50%?"</strong></h1>
            <div className="m-auto mt-5 w-full md:w-11 lg:w-10">
                <p>Great inquiry. With an expense ratio much below 50%, many businesses are able to operate. If that's the case, just present a letter from a certified tax advisor stating your company's precise expense ratio. For instance, if your company operates at a 30% ratio, you would multiply the number in step 4 above by 70%. If it's 25%, multiply that number by 75%, and so on.</p>
                <p>Owner-occupied and second houses are exempt from prepayment penalties, thus the loan can be refinanced if needed as soon as the applicant is approved for a conventional home loan. Many of our clients use this technique to purchase their ideal home, then once they and their tax advisors deem the best moment, they choose to refinance it into a conventional loan. It gives the business owner the power to decide for themselves how and when to buy a house.</p>
                <p>Check out our Bank Statement Loan Video Workshop to learn more about this interesting service and access free tools to help you rapidly become familiar with it.</p>
                <p>Although some lenders might provide this kind of programme, very few do it with the expertise and educational tools that set us apart as Florida's go-to experts in Bank Statement Home Loan funding.</p>
            </div>
        </div>
        <Apply />
        <Welcome />
    </>)
}

export default BankStatement;