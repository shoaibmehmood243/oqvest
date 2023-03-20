import { calender, phoneCall } from '../../assets'

const Banner = ()=> {
    return(
        <div className='surface-900 text-white text-sm py-2 pr-8 banner'>
            <div className='flex justify-content-end align-items-center gap-4'>
                <div className='flex align-items-center gap-2'>
                    <img src={calender} />
                    <span>Calender</span>
                </div>
                <div className='flex align-items-center gap-2'>
                    <img src={phoneCall} />
                    <span><a href="tel:+551 225 0733">+551 225 0733</a></span>
                </div>
            </div>
        </div>
    )
}

export default Banner;