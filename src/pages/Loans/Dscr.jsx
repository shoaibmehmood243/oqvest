import {  dscrloan1, dscrloan2, dscrloan3, dscrloan4, dscrloanhero, privateloan1, privateloan2, privateloan3, privateloan4, privateloanhero, rectangleLeft } from "../../assets";
import Apply from "../../components/common/Apply";
import HeroSectionTwo from "../../components/common/HeroSectionTwo";
import Welcome from "../../components/Home/Welcome";
import styles from '../../styles/layouttwo.module.css'
import {Button} from 'primereact/button'

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
            <div className={styles.left}>
                <img src={rectangleLeft} />
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
                <h1>The loan terms for a DSCR Loan are determined by the following criteria:</h1>
                <ul style={{fontStyle: 'italic'}} className={`mb-5 ${styles.list}`}>
                    <li className="mb-3">
                    DSCR Ratio - (how well the property cash-flows) - We will finance properties with a ratio of 0.75 and higher.
                    </li>
                    <li className="mb-3">
                    The applicant's middle FICO score
                    </li>
                    <li className="mb-3">
                    Size of the down payment.
                    </li>
                    <li className="mb-3">
                    Prepayment Penalty (optional) - Options include: no prepayment penalty, 1 year, 2 year, or 3 year (ask your Loan Originator for details)
                    </li>
                </ul>
                <p className="text-sm">For experienced investors, 20% down payment is the required minimum. The required down payment for first-time investors is 30%. (A candidate is considered a seasoned investor if they have 12 months of recent landlord experience.) The applicant's credit history must show 3 active credit tradelines from the past 12 months, *OR* 2 active tradelines from the past 24 months. The most recent three years of prior homeownership experience and a spotless, verifiable 12-month payment history for residency are requirements for applicants.</p>
                <h1 className="text-left">If the DSCR Ratio is ≥ 1.00...</h1>
                <ul style={{fontStyle: 'italic'}} className={`mb-5 ${styles.list}`}>
                    <li className="mb-3">
                    The maximum LTV is 80% for applicants with a middle FICO of 700 or higher for purchase and rate & term refinance transactions. (max LTV of 75% for cash-out transactions)
                    </li>
                    <li className="mb-3">
                    The maximum LTV is 80% for applicants with a middle FICO of 700 or higher for purchase and rate & term refinance transactions. (max LTV of 75% for cash-out transactions)
                    </li>
                    <li className="mb-3">
                    The maximum LTV is 80% for applicants with a middle FICO of 700 or higher for purchase and rate & term refinance transactions. (max LTV of 75% for cash-out transactions)
                    </li>
                </ul>
                <h1 className="mb-0 text-left">If the DSCR Ratio is {"<"} 1.00...</h1>
                <span className={styles.span}>*NOTE: The minimum acceptable DSCR ratio is 0.75 *</span>
                <ul style={{fontStyle: 'italic'}} className={`mb-5 ${styles.list}`}>
                    <li className="mb-3">
                    The maximum LTV is 80% for applicants with a middle FICO of 700 or higher for purchase and rate & term refinance transactions. (max LTV of 75% for cash-out transactions)
                    </li>
                    <li className="mb-3">
                    The maximum LTV is 80% for applicants with a middle FICO of 700 or higher for purchase and rate & term refinance transactions. (max LTV of 75% for cash-out transactions)
                    </li>
                    <li className="mb-3">
                    The maximum LTV is 80% for applicants with a middle FICO of 700 or higher for purchase and rate & term refinance transactions. (max LTV of 75% for cash-out transactions)
                    </li>
                </ul>
                <Button label="Get your Quote" />
            </div>
        </div>
        <Apply />
        <Welcome />
    </>)
}

export default Dscr;