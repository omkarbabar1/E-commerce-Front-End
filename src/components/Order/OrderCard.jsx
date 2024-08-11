import { Grid } from '@mui/material'
import AdjustIcon from '@mui/icons-material/Adjust';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Order from './Order';

function OrderCard() {
    const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${44}`)} className=' p-5 shadow-lg hover:shadow-2xl border mr-10'>
      <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
        <div>
            <Grid item xs={12} >
                <div className='flex cursor-pointer'>
                    <img className='w-[6rem] h-[8rem] object-cover origin-top' src="https://rukminim1.flixcart.com/image/612/612/l0wrafk0/dress/l/2/o/3xl-m2s13003-peach-madame-original-imagchhhwbypcann.jpeg?q=70"
                     alt="" />
                     <div className='ml-5 space-y-2'>
                        <p className=''>Men Slim  Mid Rice Black Jens</p>
                        <p className='opacity-50 text-xs font-semibold '>Size: M</p>
                        <p className='opacity-50 text-xs font-semibold '>Color: Pink</p>
                     </div>
                </div>
            </Grid>
        </div>
            <Grid item xs={2}>
                <p>10499</p>
            </Grid>
            <Grid item xs={4}>
                {true && <div>
                    <p>
                    <AdjustIcon sx={{width:"15px",height:"15px"}} className='mr-2 text-green-600 mb-1'/>
                    <span>
                        Delivered On March 03
                    </span>
                </p>
                <p className='text-xs'>Your Iteam Has Been Delivered</p>
                </div> }
                {false && <p>
                    <span>
                        Expected Delivery On Mar 03
                    </span>
                </p>}
            </Grid>
      </Grid>
    </div>
  )
}

export default OrderCard
