import { Button } from "primereact/button";
import { bankloan1, bankloan2, bankloan3, bankloan4, bankloan5, bankloan6, bankloan7, bankloan8, bankloanhero, profitloan1, profitloan10, profitloan11, profitloan12, profitloan2, profitloan3, profitloan4, profitloan5, profitloan6, profitloan7, profitloan8, profitloan9, profitloanhero } from "../../assets";
import Apply from "../../components/common/Apply";
import HeroSectionTwo from "../../components/common/HeroSectionTwo";
import Welcome from "../../components/Home/Welcome";
import styles from '../../styles/layouttwo.module.css'

const ProfitLoss = ()=> {
    return (<>
        <HeroSectionTwo image={profitloanhero} 
            heading={<>P & L Home loans</>}
            subheading="The quickest route to approval for self-employed house buyers is our P&L financing programme." />
        <div className={styles.gridSection}>
            <div>
                <h6 className="m-0">Profit & Loss Statement Home Loans</h6>
                <p className={styles.subheading}>The quickest route to approval for self-employed house buyers is our P&L financing programme.</p>
                <div className="grid my-6">
                    <div className="col-12 md:col-6">
                        <div className={styles.imageSection1}>
                            <div>
                                <img src={profitloan1} />
                            </div>
                            <div>
                                <img src={profitloan2} />
                            </div>
                        </div>
                        <div className={styles.imageSection2}>
                            <div>
                                <img src={profitloan3} />
                            </div>
                            <div>
                                <img src={profitloan4} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 md:col-6">
                        <div>
                            <p className={`${styles.para} mb-4`}>The US tax code offers business owners a special benefit by allowing them to use deductions to offset a sizable portion of their taxable income, so lowering their overall tax liability.</p>
                            <p className={styles.para}>While the business owner benefits tax-wise from this, the issue frequently comes when the business owner asks for a home loan and is turned down because of insufficient income or a high debt-to-income ratio.</p>
                            <p className={styles.para}>Why? Due to the fact that all conventional loan programmes (including Conventional, Jumbo, FHA, VA, and USDA) call for the lender to consider the applicant's taxable income from their income tax returns (personal and/or company). Due to the lender's restriction to using a small portion of the business owner's genuine income, the latter feels stuck and frustrated.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h6>Our P&L Loan Program Solves this Problem </h6>
                <div className="grid my-5 align-items-center">
                    <div className="col-12 md:col-6">
                        <p className={styles.para}>We allow the business owner to have their qualified tax preparer submit a 1-2 Year Profit and Loss (P&L) Statement as income instead of utilising tax returns, which frequently paints a more realistic picture of the applicant's genuine income profile.</p>
                        <p className={styles.para}> Owner-occupied and second houses are exempt from prepayment penalties, thus the loan can be refinanced if needed as soon as the applicant is approved for a conventional home loan. Many of our clients use this technique to purchase their ideal home, then once they and their tax advisors deem the best moment, they choose to refinance it into a conventional loan. It enables the business owner to assume control and make their own terms for property purchase.</p>
                        <p className={styles.para}>This loan program is similar to our Bank Statement Program, but the documentation requirements are much easier than providing 12-24 months of bank statements.</p>
                    </div>
                    <div className="col-12 md:col-6">
                        <div className={styles.imageSection1}>
                            <div>
                                <img src={profitloan5} />
                            </div>
                            <div>
                                <img src={profitloan6} />
                            </div>
                        </div>
                        <div className={styles.imageSection2}>
                            <div>
                                <img src={profitloan7} />
                            </div>
                            <div>
                                <img src={profitloan8} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h6 className="m-0">Have you been in business less than 2 years (but over 1 year)?  </h6>
                <div className="grid my-6">
                    <div className="col-12 md:col-6">
                        <div className={styles.imageSection1}>
                            <div>
                                <img src={profitloan9} />
                            </div>
                            <div>
                                <img src={profitloan10} />
                            </div>
                        </div>
                        <div className={styles.imageSection2}>
                            <div>
                                <img src={profitloan11} />
                            </div>
                            <div>
                                <img src={profitloan12} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 md:col-6">
                        <div>
                            <p className={`${styles.para} mb-4`}>With a supporting P&L and documentation proving you have at least two years of experience working in your present industry, we can approve this situation.</p>
                            <p className={styles.para}>There are a few lenders who provide this kind of programme, but very few of them have the same level of expertise and track record as we do, making us the reliable experts you need to make this programme work for you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Apply />
        <Welcome />
    </>)
}

export default ProfitLoss;