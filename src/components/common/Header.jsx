import { logo } from '../../assets'
import styles from "../../styles/header.module.css"
import { Link } from 'react-router-dom';
import {Button} from 'primereact/button'
import { Sidebar } from 'primereact/sidebar'
import { useState } from 'react';
import { RxCross2} from 'react-icons/rx'
import {HiBars3CenterLeft} from 'react-icons/hi2'
import { BsChevronDown, BsChevronUp} from 'react-icons/bs'
import { useRef } from 'react';
import { useEffect } from 'react';

const Header = ()=> {
    const navItems = [
        {
            name: 'Home',
            link: '/',
            items: []
        },
        {
            name: 'Calender Booking',
            link: '/',
            items: []
        },
        {
            name: 'Calculators',
            link: '/',
            items: []
        },
        {
            name: 'Loans',
            items: [
                {
                    name: 'Contruction',
                    link: '/construction-loan'
                },
                {
                    name: 'Self Employed',
                    link: '/self-employed-loan'
                },
                {
                    name: 'Bank Statement',
                    link: '/bank-statement-loan'
                },
                {
                    name: 'Bridge',
                    link: '/bridge-loan'
                },
                {
                    name: 'Conventional',
                    link: '/conventional-loan'
                },
                {
                    name: 'Combo Home',
                    link: '/combo-home-loan'
                },
            ]
        },
        {
            name: 'Contacts',
            link: '/',
            items: []
        }
    ]
    const [visible, setVisible] = useState(false);
    const [show, setShow] = useState(false);
    const dropdownRef = useRef(null);
    const chevronRef = useRef(null);
    useEffect(() => {
        // Function to handle clicks outside of the dropdown
        const handleClickOutside = (event) => {
          if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target) &&
            !chevronRef.current.contains(event.target)
          ) {
            setShow(false);
          }
        };
    
        // Attach event listener
        window.addEventListener('click', handleClickOutside);
    
        // Clean up
        return () => {
          window.removeEventListener('click', handleClickOutside);
        };
      }, []);
    return(<>
        <div className={styles.header}>
            <div className='flex justify-content-between lg:justify-content-around gap-4 align-items-center py-2 px-3 md:px-0'>
                <img src={logo} />
                <div className={styles.navItems}>
                    <ul ref={dropdownRef} className='flex gap-4 align-items-center justify-content-center'>
                        {
                            navItems.map((item, i)=> (
                                <li key={i} className='flex align-items-center gap-2'>
                                    <Link to='/'>{item.name}</Link>
                                    {
                                        item.items.length > 0 && (<>
                                            {
                                                show ? 
                                                    <BsChevronUp ref={chevronRef} onClick={()=> setShow(!show)} /> : 
                                                    <BsChevronDown ref={chevronRef} onClick={()=> setShow(!show)} />
                                            }
                                        </>)
                                    }
                                    
                                    {
                                        (show && item.items.length > 0) &&
                                            <div className={styles.dropdown}>
                                                <ul>
                                                    {
                                                        item.items.map((i, index)=> (
                                                            <li key={index}>
                                                                <Link to={i.link}>{i.name}</Link>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='hidden lg:block'>
                    <Button label='Sign In'/>
                </div>
                <div className='block lg:hidden'>
                    <span className='cursor-pointer text-2xl' onClick={()=> setVisible(!visible)}>
                        {
                            visible ? <RxCross2 /> : <HiBars3CenterLeft />
                        }
                    </span>
                </div>
            </div>
        </div>
        <Sidebar visible={visible} onHide={()=> setVisible(false)} blockScroll={true} showCloseIcon={false}>
            <div className='text-right'>
                <span className='cursor-pointer text-2xl' onClick={()=> setVisible(false)}>
                    <RxCross2 />
                </span>
            </div>
            <div className={styles.mobileNavItems}>
                <ul>
                    {
                        navItems.map((item, i)=> (
                            <li key={i}>
                                <Link to='/'>{item.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </Sidebar>
    </>)
}

export default Header;