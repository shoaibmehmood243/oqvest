import { caliber, uwm, rocket, pennymac, girl } from "../../assets";
import { Button } from 'primereact/button'
import styles from '../../styles/rate.module.css'
import {BsStarFill, BsStarHalf} from 'react-icons/bs'
import {BiDollar} from 'react-icons/bi'

const Rate = ()=> {
    const data = [
        {
            img: caliber
        },
        {
            img: uwm
        },
        {
            img: rocket
        },
        {
            img: pennymac
        },
    ]
    return(
        <div className={styles.price}>
            <h2 className="w-full m-auto md:w-10 lg:w-11 text-center m-3">Don't settle for a <strong className="st-1">one-size-fits-all</strong> mortgage rate. Let <strong className="st-2">Oqvest</strong> help you find the perfect fit.</h2>
            <div className="grid mt-6">
                <div className={`col-12 lg:col-6 `}>
                    <div className={styles.cardDiv}>
                        {
                            data.map((data, i)=> (
                                <div key={i} className={styles.card}>
                                    <div className={styles.img}>
                                        <img src={data.img} />
                                    </div>
                                    <div className={`flex gap-2 ${styles.rating}`}>
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarHalf />
                                    </div>
                                    <div>
                                        <p className="m-0">Your Savings</p>
                                        <div className={`flex align-items-center justify-content-center gap-0 ${styles.dollar}`}>
                                            <BiDollar />
                                            <BiDollar />
                                            <BiDollar />
                                            <BiDollar />
                                            <BiDollar />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                        <div className={styles.girl}>
                            <img src={girl} />
                        </div>
                </div>
                <div className="col-12 lg:col-6 mt-0 lg:mt-1">
                    <h3>Smart technology <strong className="st-1">+</strong> lower rates = <strong className="st-2">Oqvest</strong></h3>
                    <p className={`${styles.subheading} w-full md:w-11 lg:w-10`}>If you're in the market for a mortgage, applying with Oqvest could be the smartest move you make. With our AI-powered technology, we're able to offer some of the lowest rates around, customized to fit your unique financial situation. And the best part? Our fast quote process takes just 5 minutes or less, so you can get a personalized rate and be on your way to your dream home in no time. Don't settle for a one-size-fits-all mortgage rate. Let Oqvest help you find the right rate for you.</p>
                    <Button className="mt-4" label="Want a Quote?" />
                </div>
            </div>
        </div>
    )
}

export default Rate;