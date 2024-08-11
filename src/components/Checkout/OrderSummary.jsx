import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartIteam from '../Cart/CartIteam'
import { Button } from '@mui/material'

function OrderSummary() {
  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
        <AddressCard />
      </div>
      <div>

        <div className='lg:grid grid-cols-3 mt-5 relative'>
          <div className='col-span-2 '>
            {[1, 1, 1, 1].map((iteam) => <CartIteam/>)}
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
            <Button variant='contained' className='w-full' sx={{  px: '12.5rem', py: '0.7rem', mt: 2, width: '1px' }}>
              cheackout
            </Button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default OrderSummary
