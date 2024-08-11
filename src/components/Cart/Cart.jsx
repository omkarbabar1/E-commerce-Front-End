import React from 'react'
import CartIteam from './CartIteam'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const Cart = () => {
  const navigate = useNavigate();

  const handleCheckOut=()=>{
    navigate('/checkout?step=2')
  }

  return (
    <div>

      <div className='lg:grid grid-cols-3 lg:px-16 relative'>
        <div className='col-span-2'>
          {[1,1,1,1].map((iteam)=><CartIteam />)}
        </div>

        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
        <div className='border px-4'>
            <p className='uppercase font-bold opacity-60'>price details</p>
            <hr />
            <div className='space-y-3 font-semibold'>
              <div className='flex justify-between pt-3 text-black'>
                <span>Price</span>
                <span>₹4,599</span>
              </div>
              <div className='flex justify-between pt-3 text-black'>
                <span>Discount</span>
                <span className='text-green-600'>-600</span>
              </div>
              <div className='flex justify-between pt-3 text-black'>
                <span>Delivery Charges</span>
                <span className='text-green-600'>FREE</span>
              </div>
              <div className='flex justify-between pt-3 text-black font-bold'>
                <span>Delivery Charges</span>
                <span className='text-green-600'>₹3,999</span>
              </div>
            </div>
        </div>      
        <Button onClick={handleCheckOut} variant='contained' className='w-full' sx={{ml:0,  px: '13rem', py: '0.7rem', mt: 2 ,width:'1px'}}>
          checkout
        </Button>
      </div>
     
      </div>
    </div>
  )
}

export default Cart
