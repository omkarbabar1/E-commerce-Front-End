import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTraker from './OrderTraker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';



function OrderDetails() {
  return (
    <div className='px-5 lg:px-20'>
      <div>
        <h1 className='font-bold py-7  text-lg'>Dilivery Address</h1>
        <AddressCard />
      </div>
      <div className='py-20'>
        <OrderTraker activeStep={2} />
      </div>


      <Grid container className='space-y-10'>
        {[1, 1, 1, 1, 1].map((iteam) =>
          <Grid item container className='shadow-xl rounded-md p-5 border '
            sx={{ alignItems: 'center', justifyContent: 'space-between' }}>

            <Grid item xs={6}>

              <div className='flex items-center space-x-4'>
                <img className=' w-[6rem] h-[6rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/l0wrafk0/dress/l/2/o/3xl-m2s13003-peach-madame-original-imagchhhwbypcann.jpeg?q=70" alt="" />
                <div className='space-y-2 ml-5'>
                  <p className='font-semibold '>Women Slim Dress Roce Pink Kurta</p>
                  <p className='space-x-5 font-semibold opacity-50'><span>Color : Pink</span><span> Size : M</span></p>
                  <p className='font-semibold '> Seller: Guru</p>
                  <p>4,999</p>

                </div>
              </div>
            </Grid>
            <Grid item>
              <Box sx={{ color: deepPurple[500] }}>
                <StarBorderIcon sx={{ fontSize: '2rem' }} className='px-2 ' />
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        )}
      </Grid>
    </div>
  )
}

export default OrderDetails
