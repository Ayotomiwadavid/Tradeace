import React from 'react'
import { Link } from 'react-router-dom'

const Getstarted = (props) => {
    let {buttonIcon, content} = props
    let CustomButtonIcon = buttonIcon
    return (
        <Link to='/sign/up'>
            <button className={CustomButtonIcon ? 'capitalize px-2 font-bold flex items-center gap-x-4 justify-center rounded-md h-[45px] p-1 w-[250px] md:w-[200px] md:p-5 text-center text-white bg-blue-text-color' : 'capitalize gap-2 font-bold flex items-center justify-center rounded-md h-[45px] p-1 w-[100px] md:w-[150px] md:p-5 text-center text-white bg-blue-text-color'}>
                {content} 
                {
                    CustomButtonIcon && <CustomButtonIcon />
                }
            </button>
        </Link>
    )
}

export default Getstarted
