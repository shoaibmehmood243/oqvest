import { logo } from '../../assets'
import styles from "../../styles/header.module.css"
import { Link } from 'react-router-dom';
import {Button} from 'primereact/button'

const Header = ()=> {
    const navItems = [
        'Home',
        'Calender Booking',
        'Calculators',
        'Loans',
        'Contacts'
    ]
    return(
        <div className={styles.header}>
            <div className='flex justify-content-around gap-4 align-items-center py-2 px-2 md:px-0'>
                <img src={logo} />
                <div className={styles.navItems}>
                    <ul className='flex gap-4 align-items-center justify-content-center'>
                        {
                            navItems.map((item)=> (
                                <li>
                                    <Link to='/'>{item}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <Button label='Sign In'/>
                </div>
            </div>
        </div>
    )
}

export default Header;