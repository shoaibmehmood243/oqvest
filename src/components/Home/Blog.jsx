import { blog1, blog2, blog3, idea } from '../../assets';
import styles from '../../styles/blog.module.css';
import {AiOutlineEye, AiFillHeart, AiOutlineAlignLeft} from 'react-icons/ai'
import {TbMessageCircle2Filled} from 'react-icons/tb'

const Blog = ()=> {
    const data = [
        {
            img: blog1,
            title: 'A Guide to First-Time Home Buyer Programs, Loans & Grants',
            views: '2.5',
            date: 'January,2021'
        },
        {
            img: blog2,
            title: 'How Much House can I Afford??',
            views: '1.7',
            date: 'February,2020'
        },
        {
            img: blog3,
            title: 'How to buy a Houuse with Student Loan Debt??',
            views: '3.5',
            date: 'March,2022'
        },
    ]
    return (
        <div className={styles.container}>
            <h1 className='m-0 text-center'>Knowledge Centre <img height={50} src={idea} /></h1>
            <div className={`mt-6 ${styles.grid}`}>
                {
                    data.map((data, i)=> (
                        <div key={i} className={styles.card}>
                            <div>
                                <img src={data.img} />
                            </div>
                            <div className={`flex justify-content-between align-items-center ${styles.span1}`}>
                                <span>{data.date}</span>
                                <span><AiOutlineEye /> {data.views} k</span>
                            </div>
                            <h3 className='m-0 mb-3'>{data.title}</h3>
                            <div className={`flex justify-content-start gap-4 align-items-center ${styles.widgets}`}>
                                <span className={styles.heart}><AiFillHeart /> 31</span>
                                <span className={styles.msg}><TbMessageCircle2Filled /> 18</span>
                                <span className={styles.readMore}><AiOutlineAlignLeft /> Read More</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Blog;