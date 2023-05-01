import { logo } from '../../assets'
import styles from "../../styles/header.module.css"
import { Link } from 'react-router-dom';
import { Sidebar } from 'primereact/sidebar'
import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx'
import { HiBars3CenterLeft } from 'react-icons/hi2'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { useRef } from 'react';
import { useEffect } from 'react';

const Header = () => {
    const handleCalendly = ()=> {
        window.Calendly.initPopupWidget({url: 'https://calendly.com/oqvest/meeting'});
    }
    const navItems = [
        {
            name: 'Home',
            link: '/',
            click: '',
            items: []
        },
        {
            name: 'Calendly Booking',
            link: '',
            click: handleCalendly,
            items: []
        },
        {
            name: 'Loans',
            click: '',
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
                {
                    name: 'Profit & Loss',
                    link: '/profit-loss-loan'
                },
                {
                    name: 'Private',
                    link: '/private-loan'
                },
                {
                    name: 'DSCR',
                    link: '/dscr-loan'
                },
                {
                    name: 'Flex Mortgage',
                    link: '/flex-mortgage-loan'
                },
                {
                    name: 'Jumbo Home',
                    link: '/jumbo-home-loan'
                },
            ]
        }
    ]
    const [visible, setVisible] = useState(false);
    const [show, setShow] = useState(false);
    const ref = useRef(null);
    const handleClick = () => {
        setShow(false);
        window.scrollTo(0, 0);
      };

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setShow(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
    return (<>
        <div className={styles.navbar}>
            <div className={styles.header}>
                <div className='flex justify-content-between lg:justify-content-around gap-4 align-items-center py-2 px-3 md:px-0'>
                    <Link to='/'>
                        <img className={styles.logo} src={logo} />
                    </Link>
                    <div className={styles.navItems}>
                        <ul className='flex gap-4 align-items-center justify-content-center'>
                            {
                                navItems.map((item, i) => (
                                    <li key={i} onClick={item.click} className='flex align-items-center gap-2'>
                                        {
                                            item.items.length > 0 ?
                                                <span onClick={() => setShow(!show)} className={styles.span}>{item.name}</span>
                                                :
                                            <Link to='/'>{item.name}</Link>
                                        }
                                        {
                                            item.items.length > 0 && (<>
                                                {
                                                    show ?
                                                        <BsChevronUp onClick={() => setShow(!show)} /> :
                                                        <BsChevronDown onClick={() => setShow(!show)} />
                                                }
                                            </>)
                                        }

                                        {
                                            (show && item.items.length > 0) &&
                                            <div className={`${styles.dropdown}`} ref={ref}>
                                                <ul>
                                                    {
                                                        item.items.map((i, index) => (
                                                            <li key={index} onClick={handleClick}>
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
                        <a target='_blank' href={'https://lead.oqvest.com/'}>
                            <button className='h-full dark-btn'>Apply Now</button>
                        </a>
                    </div>
                    <div className='block lg:hidden'>
                        <span className='cursor-pointer text-2xl' onClick={() => setVisible(!visible)}>
                            {
                                visible ? <RxCross2 /> : <HiBars3CenterLeft />
                            }
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <Sidebar visible={visible} onHide={() => setVisible(false)} blockScroll={true} showCloseIcon={false}>
            <div className='text-right'>
                <span className='cursor-pointer text-2xl' onClick={() => setVisible(false)}>
                    <RxCross2 />
                </span>
            </div>
            <div className={styles.mobileNavItems}>
                <ul>
                    {
                        navItems.map((item, i) => (
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