import React from 'react'
import Mobilenav from './Mobilenav'
import home from '../images/homepng.png'
import giftcard from '../images/credit-cardpng.png'
import transaction from '../images/receiptpng.png'
import logOut from '../images/exitpng.png'

const Mobilenavbar = () => {
  return (
    <div className='flex items-center justify-center absolute bottom-0 right-0 left-0 bg-white md:hidden z-10 w-full py-3'>
      <Mobilenav 
        imageSrc={home}
        navName='home'
      />
      <Mobilenav 
        imageSrc={giftcard}
        navName='giftcards'
      />
      <Mobilenav 
        imageSrc={transaction}
        navName='transactions'
      />
      <Mobilenav 
        imageSrc={logOut}
        navName='log out'
      />
    </div>
  )
}

export default Mobilenavbar
