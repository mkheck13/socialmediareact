
import React from 'react'

const Header = ({ type, logo, arrow, percent, number, color, cardClass, text1, text2 }) => {
    return (
        <div className={cardClass + " pt-6 px-7 pb-3 min-h-28"}>
                <div className='grid grid-cols-2 mb-4'>
                    <div>
                        <h3 className={'heading interBold ' + text1}>{type}</h3>
                    </div>

                    <div className='flex justify-end'>
                        <img className='' src={logo} alt="social media logo" />
                    </div>
                </div>
                <div className='grid grid-cols-2'>
                    <div className='flex items-end'>
                        <h3 className={'title interBold ' + text2}>{number}</h3>
                    </div>

                    <div className='flex justify-end'>
                        <div className='flex items-end mb-[2px]'>
                            <img className='arrows mb-[0.45rem] mr-1' src={arrow} alt="arrow indicator" />
                            <p className={'interBold username ' + color}>{percent}</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Header