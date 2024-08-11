import { Typography } from '@mui/material'
import React from 'react'
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom'

function ProductCard({Product}) {
    const navigate = useNavigate();
    return (
        <div onClick={()=>navigate(`/product/${11}`)} className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
            <div className='h-[20rem] '>
                <img className='h-full w-full object-cover object-left-top' src={Product.image} alt="" />
            </div>

            <div className='textPart bg-white p-3'>

                <div>
                    <Typography className='font-bold opacity-90'>{Product.brand}</Typography>
                    <Typography className=' '>{Product.title}</Typography>
                </div>
                <div className='flex items-center space-x-2'>
                    <p className='font-bold opacity-70'>{Product.discountedPrice}</p>
                    <p className='font-semibold opacity-50 line-through'>{Product.price}</p>
                    <p className='font-semibold  text-green-600'>{Product.discountPersent}% OFF</p>
                </div>
            </div>

        </div>
    )
}

export default ProductCard