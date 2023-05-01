import { useEffect, useState } from "react";
import {  jumboloan1, jumboloan2, jumboloanhero, jumboloan3,  rectangleLeft, jumboloan4, jumboloan5, jumboloan6, jumboloan7, jumboloan8, jumboloan9, jumboloan10 } from "../../assets";
import Apply from "../../components/common/Apply";
import HeroSectionTwo from "../../components/common/HeroSectionTwo";
import Welcome from "../../components/Home/Welcome";
import styles from '../../styles/layouttwo.module.css'
import VideoDialog from "../../components/common/VideoDialog";

const JumboHome = ()=> {
    const [video, setVideo] = useState(false);
    const onShow = ()=> {
        setVideo(true)
    }
    const onHide = ()=> {
        setVideo(false)
    }
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const data = [
        {
            image: jumboloan9,
            title: 'Jumbo Flex Program',
            text: "For candidates with a strong credit history and financial expertise who demand an extraordinarily competitive rate without the inconvenience of a conventional jumbo loan, we have created the Private Client Portfolio programme.Due to the fact that it is not based on credit scores, our Private Client Portfolio programme differs from the majority of other jumbo programmes. For most jumbo lenders, a minimum credit score of 720 or 740 is not necessary in order to qualify. Credit is assessed individually for each applicant rather than using the FICO score.No matter the applicant's FICO score, if accepted, every applicant receives the same interest rate for the chosen jumbo loan programme at the time our underwriters analyse the application.",
            btn: 'Request Private Client Quote Today',
            type: 'Conventional'
        },
        {
            image: jumboloan10,
            title: 'Private Client Portfolio ',
            text: "For applicants whose credit and/or income profiles don't fit the norm for acceptance, we have created the Jumbo Flex programme. Qualification is simpler and the underwriting criteria are more accommodating.For Full-Doc and Bank Statement Income, we can accept midrange FICO ratings as low as 600 and 640, respectively. If there are two applicants, our P&L Loan can be averaged based on the Transunion Score.For Self-Employed candidates who do not meet the requirements based on the standard tax return calculation, this programme is ideal.Learn more about our Bank Statement Program Learn more about our P&L Loan Program Additionally, this procedure is more accommodating in light of recent negative housing occurrences like foreclosure, bankruptcy, short sales, or deeds-in-lieu. An applicant who has been turned down for a standard loan because they did not adhere to the necessary waiting periods may be authorised under the Jumbo Flex programme as soon as one day after the event. (The down payment can be impacted. For specifics, speak with your loan originator.)",
            btn: 'Request Jumbo Flex Quote Today',
            type: 'P&L'
        },
    ]
    return (<>
        <VideoDialog
            videoId="kcicLM7tw3E"
            visible={video}
            onHide={onHide}
        />

        <HeroSectionTwo handleClick={()=> setVideo(true)} image={jumboloanhero} 
            heading={<>Jumbo Home <strong>Loans</strong></>}
            subheading="Jumbo Home Loans are ideal for borrowers who have a low FICO score, no large down payment, or poor credit history." />
        <div className={styles.gridSection}>
            <div>
                <h6 className="m-0">Jumbo Home Loans</h6>
                <p className={styles.subheading}>When you want to go BIG, we provide the funding you need without the headache and red tape of traditional jumbo loans. We are your go-to source for JUMBO loans, providing adaptable solutions to fit a variety of situations. Whether you are self-employed or have a large amount of liquid assets but exhibit little or no income on your tax return, we offer the JUMBO solutions you require up to $20MM and the expertise to deal with unusual situations.</p>
                <div className="grid my-6">
                    <div className="col-12 md:col-5">
                        <div className={styles.imageSection1}>
                            <div className={styles.img1}>
                                <img src={jumboloan1} />
                            </div>
                            <div className={styles.img2}>
                                <img src={jumboloan2} />
                            </div>
                        </div>
                        <div className={styles.imageSection2}>
                            <div className={styles.img3}>
                                <img src={jumboloan3} />
                            </div>
                            <div className={styles.img4}>
                                <img src={jumboloan4} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 md:col-7">
                        <div>
                            <strong>WHAT IS A JUMBO LOAN?</strong>
                            <p className={`${styles.para} mb-4`}>Any residential loan whose loan amount exceeds the region's conventional loan size restriction is referred to as a "jumbo house loan." That currently means any loan amount that exceeds $647,200 in the majority of Florida in 2022. When it comes to qualification, jumbo loans can frequently present the greatest difficulties. Due to the fact that Jumbo loans are not insured by Fannie Mae or Freddie Mac, many banks and credit unions that do provide Jumbo financing have a reputation for having extremely strict underwriting requirements. As a result, many otherwise qualified borrowers who would likely be approved for a Conventional loan may find themselves ineligible for a Jumbo loan. The requirements for income eligibility and credit history are stricter than those for a conventional house loan. In comparison to conventional loans, interest rates are frequently higher, and fixed rate terms are frequently unavailable.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h6>Our P&L Loan Program Solves this Problem </h6>
                <div className="grid my-5 align-items-center">
                    <div className="col-12 md:col-7">
                        <strong>WHAT IS A JUMBO LOAN?</strong>
                        <p className={`mb-4 ${styles.para}`}>Jumbo financing options, like our COMBO Loan, which combines a sizable conventional loan with a smaller second home equity line of credit, often exist depending on the sales price and the size of your down payment. Both loans concurrently close on the same day. For a side-by-side analysis to see which is a better option for you, speak with your loan originator.</p>
                        <strong>YOUR UNCONVENTIONAL JUMBO EXPERTS</strong>
                        <p className={styles.para}>Our Jumbo programmes are incredibly diverse and offer affordable pricing, unlike those of many banks, credit unions, and lenders, enabling us to take into account a wider range of loan eventualities.</p>
                        <p className={styles.para}>We would enjoy the chance to address all of your inquiries if you're thinking about buying a house, considering Jumbo financing, or just want to weigh your alternatives. You may rely on our knowledge because we fund a sizable quantity of jumbo financing.</p>
                    </div>
                    <div className="col-12 md:col-5">
                        <div className={styles.imageSection1}>
                            <div className={styles.img1}>
                                <img src={jumboloan5} />
                            </div>
                            <div className={styles.img2}>
                                <img src={jumboloan6} />
                            </div>
                        </div>
                        <div className={styles.imageSection2}>
                            <div className={styles.img3}>
                                <img src={jumboloan7} />
                            </div>
                            <div className={styles.img4}>
                                <img src={jumboloan8} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.left}>
                <img src={rectangleLeft} />
            </div>
        </div>
        <div className="pt-2 pb-4" style={{ background: 'rgba(153, 153, 153, 0.04)' }}>
        <div className={styles.cardLayout}>
            <h1 className="mt-0">2 Jumbo Loan Programs to Choose From:</h1>
            <div className={styles.cardGrid}>
                {
                    data.map((data, i)=> (
                        <div key={i} className={styles.card}>
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
                                <a target='_blank' href={'https://lead.oqvest.com/'}>
                                    <button>{data.btn}</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </div>
        <Apply />
        <Welcome />
    </>)
}

export default JumboHome;