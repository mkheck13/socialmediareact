
import instagram from '../assets/icon-instagram.svg'
import facebook from '../assets/icon-facebook.svg'
import twitter from '../assets/icon-twitter.svg'
import youtube from '../assets/icon-youtube.svg'
import upArrow from '../assets/icon-up.svg'
import downArrow from '../assets/icon-down.svg'

import Header from "./Header"
import Overview from "./Overview"
import { useState, useEffect } from 'react'
import socialMediaData from '../data/socialMediaData.json'

const Main = () => {
    const [bg, setBg] = useState('bgLight');
    const [rectangle, setRectangle] = useState('bgRectangleLight');
    const [cardClass, setCardClass] = useState('boxLight');
    const [text1, setText1] = useState('lightTxt1');
    const [text3, setText3] = useState('lightTxt1');
    const [text2, setText2] = useState('lightTxt2');
    const [hrLine, setHrLine] = useState('hrLine');

    // Fix overflow issue on component mount and window resize
    useEffect(() => {
        // Add overflow-x: hidden to both html and body
        document.documentElement.style.overflowX = 'hidden';
        document.body.style.overflowX = 'hidden';
        document.documentElement.style.width = '100%';
        document.body.style.width = '100%';
        
        return () => {
            // Clean up when component unmounts
            document.documentElement.style.overflowX = '';
            document.body.style.overflowX = '';
            document.documentElement.style.width = '';
            document.body.style.width = '';
        };
    }, []);

    // Map platform names to actual imported logo variables
    const logoMap = {
        'facebook': facebook,
        'twitter': twitter,
        'instagram': instagram,
        'youtube': youtube
    };
    
    // Map arrow directions to actual imported arrow variables
    const arrowMap = {
        'up': upArrow,
        'down': downArrow
    };

    const handleClick = () => {
        if (bg === 'bgLight') {
            setBg('bgDark');
            setRectangle('bgRectangleDark');
            setCardClass('boxDark');
            setText1('darkTxt1');
            setText3('darkTxt2');
            setText2('darkTxt2');
            setHrLine('darkHrLine');
        } else {
            setBg('bgLight');
            setRectangle('bgRectangleLight');
            setCardClass('boxLight');
            setText1('lightTxt1');
            setText3('lightTxt1');
            setText2('lightTxt2');
            setHrLine('hrLine');
        }
    }

  return (
    <div className={`w-full max-w-screen overflow-hidden ${bg}`}>
      <div className="mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-44">
        <div className={rectangle}>
        </div>
        <div className='grid md:grid-cols-2 sm:mb-5 mb-10 relative'>
            <div className='mt-6 sm:mb-7 mb-5'>
                <h1 className={'interBold sm:text-[27px] text-[23.5px] ' + text2}>Social Media DashBoard</h1>
                <p className={'interBold heading ' + text1}>Total Followers: {socialMediaData.totalFollowers}</p>
            </div>
            <hr className={hrLine + ' md:hidden'} />
            <div className='flex md:justify-end justify-between items-center md:mt-0 mt-4'>
                <h1 className={'heading interBold ' + text1}>Dark Mode</h1>
                <label className='switch ml-3'>
                    <input onClick={handleClick} type="checkbox" />
                    <span className='slider'></span>
                </label>
            </div>
        </div>

        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:gap-8 gap-6 relative'>
            {socialMediaData.overviewCards.map((card, index) => (
                <Overview 
                    key={index}
                    bar={card.bar}
                    logo={logoMap[card.logo]} 
                    arrow={arrowMap[card.arrow]} 
                    username={card.username} 
                    number={card.number} 
                    type={card.type} 
                    update={card.update} 
                    color={card.color} 
                    cardClass={cardClass} 
                    text1={text1} 
                    text2={text2} 
                />
            ))}
        </div>

        <h1 className={'mt-10 mb-5 sm:text-[24px] text-[23.5px] interBold ' + text3}>Overview - Today</h1>

        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:gap-8 gap-4 pb-10'>
            {socialMediaData.todayOverview.map((item, index) => (
                <Header 
                    key={index}
                    type={item.type} 
                    logo={logoMap[item.logo]} 
                    number={item.number} 
                    percent={item.percent} 
                    arrow={arrowMap[item.arrow]} 
                    color={item.color} 
                    cardClass={cardClass} 
                    text1={text1} 
                    text2={text2} 
                />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Main