import { Button } from "primereact/button";
import {  conventionalloan1, conventionalloan2, conventionalloan3, conventionalloan4, conventionalloan5, conventionalloan6, conventionalloan7, conventionalloan8, conventionalLoanHero } from "../../assets";
import HeroSectionTwo from "../../components/common/HeroSectionTwo";
import Welcome from "../../components/Home/Welcome";
import styles from '../../styles/layouttwo.module.css'

const Conventional = ()=> {
    return (<>
        <HeroSectionTwo image={conventionalLoanHero} 
            heading={<>Take charge of your financial future with <strong>Conventional Home Loan</strong>.</>}
            subheading="The most popular and versatile home loan in America" />
        <div className={styles.gridSection}>
            <div>
                <h6 className="m-0">Conventional Home Loans</h6>
                <p className={styles.subheading}>The most popular and versatile home loan in America</p>
                <div className="grid my-6">
                    <div className="col-12 md:col-6">
                        <div className={styles.imageSection1}>
                            <div>
                                <img src={conventionalloan1} />
                            </div>
                            <div>
                                <img src={conventionalloan2} />
                            </div>
                        </div>
                        <div className={styles.imageSection2}>
                            <div>
                                <img src={conventionalloan3} />
                            </div>
                            <div>
                                <img src={conventionalloan4} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 md:col-6">
                        <div>
                            <p className={`${styles.para} text-sm mt-0 mb-2`}>One of the most popular loan forms is the conventional loan. Most other lending programmes are built around them as the benchmark. They 'conform' to a prescribed set of underwriting requirements established by the two government-sponsored entities Fannie Mae (FNMA) and Freddie Mac, and are referred to as "conforming" loans (FHLMC).</p>
                            <p className={`${styles.para} text-sm mt-0 mb-2`}>Since this is a full-doc loan, the lender must verify each borrower's income and assets in order for the loan to be approved. The borrower must have sufficient taxable income as shown by their tax filings in order to prove their ability to repay the new loan.</p>
                            <p className={`${styles.para} text-sm mt-0 mb-2`}>Although qualifying is typically simple, it can be difficult if your situation doesn't adhere to certain underwriting guidelines.</p>
                            <p className={`${styles.para} text-sm mt-0 mb-2`}>When your situation doesn't meet conforming underwriting requirements, qualifying can be difficult but is typically straightforward.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="grid my-5 align-items-center">
                    <div className="col-12 md:col-6">
                        <p className={`${styles.para} mt-0 mb-3 text-sm`}>They can be applied to the financing of homes for principal residence, second homes or holiday homes, and even properties for investment.</p>
                        <p className={`${styles.para} mt-0 mb-3 text-sm`}>As long as the applicant hasn't owned a property in the previous five years, the required down payment is just 3% of the purchase price. The required minimum down payment for seasoned homeowners is 5% of the buying price. The applicant may be able to self-manage their property tax and homeowners insurance costs if they have a 20% or higher down payment and are exempt from paying Private Mortgage Insurance (PMI).</p>
                        <p className={`${styles.para} mt-0 mb-2 text-sm`}>In some cases, if the down payment is at least 10%, conventional financing can be combined with a home equity line of credit (HELOC) to accomplish specific objectives, such as avoiding PMI, simplifying the acquisition of a condominium, or avoiding the headache of jumbo financing. The term for this is "COMBO Financing."</p>
                    </div>
                    <div className="col-12 md:col-6">
                        <div className={styles.imageSection1}>
                            <div>
                                <img src={conventionalloan5} />
                            </div>
                            <div>
                                <img src={conventionalloan6} />
                            </div>
                        </div>
                        <div className={styles.imageSection2}>
                            <div>
                                <img src={conventionalloan7} />
                            </div>
                            <div>
                                <img src={conventionalloan8} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <p>If you are thinking about conventional financing, give us a call so we can go through your options, address all of your concerns, and determine whether this is the best lending programme for you.</p>
                <div className="text-center mt-6">
                    <Button className="px-5" label="Get your Quote" />
                </div>
            </div>
        </div>
        <Welcome />
    </>)
}

export default Conventional;