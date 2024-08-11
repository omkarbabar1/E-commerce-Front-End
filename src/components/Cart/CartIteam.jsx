import { IconButton , Button } from '@mui/material'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React from 'react'

const CartIteam = () => {
    return (
        <div className='flex items-center p-5  shadow-lg border rounded-md'>
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                <img className='w-full h-full object-cover object-top'
                    src='https://rukminim1.flixcart.com/image/612/612/l0wrafk0/dress/l/2/o/3xl-m2s13003-peach-madame-original-imagchhhwbypcann.jpeg?q=70' alt='CartImage' />
            </div>
            <div className='ml-5 space-y-1'>
                <p className='font-semibold '>Women Slim Mid range Kurta</p>
                <p className='opacity-70'>Size:L</p>
                <p className='opacity-70 mt-2'>Saller:Omkar Babar</p>
                <div className='flex space-x-5 items-center text-lg lg:text-xl text-gray-900 pt-6'>
                    <p className='font-semibold'>₹3,999</p>
                    <p className='opacity-50 line-through'>₹4,599</p>
                    <p className='text-green-600 font-semibold'>50% OFF</p>
                </div>

                <div className='lg:flex items-center lg:space-x-10 pt-4'>
                    <div className='flex items-center space-x-2'>
                        <IconButton sx={{color:"RGB(145 85 253)"}}>
                            <RemoveCircleOutlineIcon/>
                        </IconButton>
                        <span className='py-1 px-7 border rounded-sm items-center'>121</span>
                        <IconButton sx={{color:"RGB(145 85 253)"}}>
                            <AddCircleOutlineIcon/>
                        </IconButton>
                    </div>
                    <div>
                        <Button sx={{color:"RGB(145 85 253)"}}>remove</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartIteam
