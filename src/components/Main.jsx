
// import instagram from '../assets/icon-instagram.svg'
// import facebook from '../assets/icon-facebook.svg'
// import twitter from '../assets/icon-twitter.svg'
// import youtube from '../assets/icon-youtube.svg'
// import upArrow from '../assets/icon-up.svg'
// import downArrow from '../assets/icon-down.svg'

// import Header from "./Header"
// import Overview from "./Overview"

// import { useState } from 'react'

// const Main = () => {
//     const [bg, setBg] = useState('bgLight');
//     const [rectangle, setRectangle] = useState('bgRectangleLight');
//     const [cardClass, setCardClass] = useState('boxLight');
//     const [text1, setText1] = useState('lightTxt1');
//     const [text3, setText3] = useState('lightTxt1');
//     const [text2, setText2] = useState('lightTxt2');
//     const [hrLine, setHrLine] = useState('hrLine');

//     const handleClick = () => {
//         if (bg === 'bgLight') {
//             setBg('bgDark');
//             setRectangle('bgRectangleDark');
//             setCardClass('boxDark');
//             setText1('darkTxt1');
//             setText3('darkTxt2');
//             setText2('darkTxt2');
//             setHrLine('darkHrLine');
//         } else {
//             setBg('bgLight');
//             setRectangle('bgRectangleLight');
//             setCardClass('boxLight');
//             setText1('lightTxt1');
//             setText3('lightTxt1');
//             setText2('lightTxt2');
//             setHrLine('hrLine');
//         }
//     }

//   return (
//     <div className={'xl:px-44 sm:px-20 pt-3 px-[26px] minH ' + bg}>
//       <div className={rectangle}>
//       </div>
//       <div className='grid md:grid-cols-2 sm:mb-5 mb-10 relative'>
//           <div className='mt-6 sm:mb-7 mb-5'>
//               <h1 className={'interBold sm:text-[27px] text-[23.5px] ' + text2}>Social Media DashBoard</h1>
//               <p className={'interBold heading ' + text1}>Total Followers: 23,004</p>
//           </div>
//           <hr className={hrLine + ' md:hidden'} />
//           <div className='flex md:justify-end justify-between items-center md:mt-0 mt-4'>
//               <h1 className={'heading interBold ' + text1}>Dark Mode</h1>
//               <label className='switch ml-3'>
//                   <input onClick={handleClick} type="checkbox" />
//                   <span className='slider'></span>
//               </label>
//           </div>
//       </div>

//       <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:gap-8 gap-6 relative'>
//           <Overview 
//               bar='facebookBar'
//               logo={facebook} 
//               arrow={upArrow} 
//               username='@nathanf' 
//               number='1987' 
//               type='FOLLOWERS' 
//               update='12 Today' 
//               color='green' 
//               cardClass={cardClass} 
//               text1={text1} 
//               text2={text2} 
//           />

//           <Overview 
//               bar='twitterBar'
//               logo={twitter} 
//               arrow={upArrow} 
//               username='@nathanf' 
//               number='1044' 
//               type='FOLLOWERS' 
//               update='99 Today' 
//               color='green' 
//               cardClass={cardClass} 
//               text1={text1} 
//               text2={text2} 
//           />

//           <Overview 
//               bar='igBar'
//               logo={instagram} 
//               arrow={upArrow} 
//               username='@nathanf' 
//               number='11k' 
//               type='FOLLOWERS' 
//               update='1099 Today' 
//               color='green' 
//               cardClass={cardClass} 
//               text1={text1} 
//               text2={text2} 
//           />

//           <Overview 
//               bar='youtubeBar'
//               logo={youtube} 
//               arrow={downArrow} 
//               username='Nathan F.' 
//               number='8239' 
//               type='SUBSCRIBERS' 
//               update='144 Today' 
//               color='red' 
//               cardClass={cardClass} 
//               text1={text1} 
//               text2={text2} 
//           />
//       </div>

//       <h1 className={'mt-10 mb-5 sm:text-[24px] text-[23.5px] interBold ' + text3}>Overview - Today</h1>

//       <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:gap-8 gap-4 pb-10'>
//           <Header 
//               type='Page Views' 
//               logo={facebook} 
//               number='87' 
//               percent='3%' 
//               arrow={upArrow} 
//               color='green' 
//               cardClass={cardClass} 
//               text1={text1} 
//               text2={text2} 
//           />
//           <Header 
//               type='Likes' 
//               logo={facebook} 
//               number='52' 
//               percent='2%' 
//               arrow={downArrow} 
//               color='red' 
//               cardClass={cardClass} 
//               text1={text1} 
//               text2={text2} 
//           />
//           <Header 
//               type='Likes' 
//               logo={instagram} 
//               number='5462' 
//               percent='2257%' 
//               arrow={upArrow} 
//               color='green' 
//               cardClass={cardClass} 
//               text1={text1} 
//               text2={text2} 
//           />
//           <Header 
//               type='Profile Views' 
//               logo={instagram} 
//               number='52k' 
//               percent='1375%' 
//               arrow={upArrow} 
//               color='green' 
//               cardClass={cardClass} 
//               text1={text1} 
//               text2={text2} 
//           />
      
//           <Header 
//               type='Retweets' 
//               logo={twitter} 
//               number='117' 
//               percent='303%' 
//               arrow={upArrow} 
//               color='green' 
//               cardClass={cardClass} 
//               text1={text1} 
//               text2={text2} 
//           />
//           <Header 
//               type='Likes' 
//               logo={twitter} 
//               number='507' 
//               percent='553%' 
//               arrow={upArrow} 
//               color='green' 
//               cardClass={cardClass} 
//               text1={text1} 
//               text2={text2} 
//           />
//           <Header 
//               type='Likes' 
//               logo={youtube} 
//               number='107' 
//               percent='19%' 
//               arrow={downArrow} 
//               color='red' 
//               cardClass={cardClass} 
//               text1={text1} 
//               text2={text2} 
//           />
//           <Header 
//               type='Total Views' 
//               logo={youtube} 
//               number='1407' 
//               percent='12%' 
//               arrow={downArrow} 
//               color='red' 
//               cardClass={cardClass} 
//               text1={text1} 
//               text2={text2} 
//           />
//       </div>
//     </div>
//   )
// }

// export default Main


import instagram from '../assets/icon-instagram.svg'
import facebook from '../assets/icon-facebook.svg'
import twitter from '../assets/icon-twitter.svg'
import youtube from '../assets/icon-youtube.svg'
import upArrow from '../assets/icon-up.svg'
import downArrow from '../assets/icon-down.svg'

import Header from "./Header"
import Overview from "./Overview"
import { useState } from 'react'
import socialMediaData from '../data/socialMediaData.json'

const Main = () => {
    const [bg, setBg] = useState('bgLight');
    const [rectangle, setRectangle] = useState('bgRectangleLight');
    const [cardClass, setCardClass] = useState('boxLight');
    const [text1, setText1] = useState('lightTxt1');
    const [text3, setText3] = useState('lightTxt1');
    const [text2, setText2] = useState('lightTxt2');
    const [hrLine, setHrLine] = useState('hrLine');

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
    <div className={'xl:px-44 sm:px-20 pt-3 px-[26px] minH ' + bg}>
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
  )
}

export default Main