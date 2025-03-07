import React from 'react'

const Overview = ({ bar, logo, arrow, username, number, type, update, color, cardClass, text1, text2 }) => {
  return (
    <div className={cardClass}>
    <div className={'h-1 barRadius mb-1 ' + bar}></div>

    <div className='p-5'>

      <div className='flex justify-center items-center min-h-[24px]'>

        <img className='h-full' src={logo}  />

        <h1 className={'username interBold ml-2 ' + text1}>{username}</h1>

      </div>

      <div className={'text-center interBold followersNum ' + text2}>{number}</div>

      <h4 className={'text-center followers interLight username ' + text1}>{type}</h4>

      <div className='flex justify-center mt-5'>
        <div className='flex flex-wrap-reverse content-center mr-1'>
          <img className='arrows mb-[1px]' src={arrow}  />
        </div>
        <h4 className={'interBold username ' + color}>{update}</h4>
      </div>

    </div>

  </div>
  )
}

export default Overview