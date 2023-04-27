import styles from '../../styles/apply.module.css';
import { Button } from 'primereact/button'

const Apply = ()=> {
    return(
        <div className={styles.section}>
            <div className='flex flex-column md:flex-row align-items-center justify-content-around'>
                <p>Call us today at <strong>(813) 928-9610</strong> for more information </p>
                <Button label='Apply Today' />
            </div>
        </div>
    )
}

export default Apply;