import React from 'react'

const Button = ({label, iconURL, backgroundColor, textColor, borderColor, fullWidth}) => {
    return (<button
            className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
              ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor} hover:bg-slate-gray hover:text-white-400` : 'bg-coral-red text-white border-coral-red hover:bg-white-400 hover:text-coral-red'} rounded-full ${fullWidth && 'w-full'}`}
        >
            {label}
            {iconURL && <img src={iconURL} alt="arrow-right" className="ml-2 rounded-full w-5 h-5"/>}
        </button>)
}
export default Button
