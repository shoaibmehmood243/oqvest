import {  dscrloan1, dscrloan2, dscrloan3, dscrloan4, dscrloanhero, privateloan1, privateloan2, privateloan3, privateloan4, privateloanhero } from "../../assets";
import Apply from "../../components/common/Apply";
import HeroSectionTwo from "../../components/common/HeroSectionTwo";
import Welcome from "../../components/Home/Welcome";
import styles from '../../styles/layouttwo.module.css'

const Dscr = ()=> {
    return (<>
        <HeroSectionTwo image={dscrloanhero} 
            heading={<>Debt Servic Coverage Ratio <strong>(DSCR) Loans</strong></>}
            subheading="Based on the home's potential for cash flow, residential investment loans." />
        <div className={styles.gridSection}>
            <div>
                <h6 className="m-0">Debt Servic Coverage Ratio (DSCR) Loans </h6>
                <p className={styles.subheading}>designed for seasoned investors seeking a programme with little documentation but without the hard money interest rates and conditions.</p>
                <div className="grid my-6">
                    <div className="col-12 md:col-6">
                        <div className={styles.imageSection1}>
                            <div>
                                <img src={dscrloan1} />
                            </div>
                            <div>
                                <img src={dscrloan2} />
                            </div>
                        </div>
                        <div className={styles.imageSection2}>
                            <div>
                                <img src={dscrloan3} />
                            </div>
                            <div>
                                <img src={dscrloan4} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 md:col-6">
                        <div>
                            <p className={`${styles.para} mb-4`}><strong>A DSCR (Debt Service Coverage Ratio)</strong> programme is what this is known as. When an appraisal is requested, a qualified appraiser completes both the normal residential appraisal report and an addendum called a Market Rental Analysis, which offers the typical market rent for comparable homes in the neighbourhood.</p>
                            <p className={styles.para}>The total monthly payment for the new loan is then contrasted with this figure. (For instance, a ratio of 1.0 indicates that the rent will cover the entire additional payment.)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.dscr}>
            <h6>Here is the formula to determine DSCR ratio:</h6>
            <strong>GROSS RENTS <span>÷</span> TOTAL HOUSING PAYMENT</strong>
            <strong>Total Housing Payment <span>=</span> PITIA</strong>
            <p>(Principle + Interest + Property Taxes + Insurance + Association Dues)</p>
        </div>
        <div className={`my-8 ${styles.detailsSection2}`}>
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

export default Dscr;