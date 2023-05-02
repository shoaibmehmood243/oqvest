import styles from '../../styles/apply.module.css';
import { Button } from 'primereact/button'

const Apply = ()=> {
    return(
        <div className={styles.section}>
            <div className='flex flex-column md:flex-row align-items-center justify-content-around'>
                <p>Call us today at <strong>(551) 225-0733</strong> for more information </p>
                <a target='_blank' href={'https://lead.oqvest.com/'}>
                <Button label='Apply Today' />
                </a>
            </div>
        </div>
    )
}

export default Apply;