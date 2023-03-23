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
            <h2 className="w-full m-auto md:w-10 lg:w-8 text-center m-3">Find the right rate for you. Get a fast quote in 5 minutes or less.  We are always ready to serve you.</h2>
            <div className="grid mt-6">
                <div className={`col-12 lg:col-6 `}>
                    <div className={styles.cardDiv}>
                        {
                            data.map((data)=> (
                                <div className={styles.card}>
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
                <div className="col-12 lg:col-6 mt-0 lg:mt-6">
                    <h3>Get Your Price now with Oqvest</h3>
                    <p className="w-full md:w-10 lg:w-8">Get the best results with us. We offer personal quotes within 5 minutes and help you understand the process all the way. Let your dreams come true!</p>
                    <Button className="mt-5" label="Want a Quote?" />
                </div>
            </div>
        </div>
    )
}

export default Rate;