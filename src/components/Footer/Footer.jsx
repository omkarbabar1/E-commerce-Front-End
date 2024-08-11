import { Grid, Button,Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-center text-white '>
      <Grid className=' bg-black text-center text-white  mt-10'
      container
      sx={{bgcolor:"black", color:'white',py:3}}>
        <Grid item xs={12} sm={6} md={3} className='text-center'>
         <Typography className='pb-5' variant='h5'> Company </Typography>
         <div>
         <Button  className='pb-5' variant='h6' > About </Button>
         </div>
         <div>
         <Button className='pb-5' variant='h6'> Blog </Button>
         </div>
         <div>
         <Button className='pb-5' variant='h6'> Jobs </Button>
         </div>
         <div>
         <Button className='pb-5' variant='h6'> Press </Button>
         </div>
         <div>
         <Button className='pb-5' variant='h6'> Partners  </Button>
         </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className='text-center'>
         <Typography className='pb-5' variant='h5'> Solution </Typography>
         <div>
         <Button className='pb-5' variant='h6'> Marketing </Button>
         </div>
         <div>
         <Button className='pb-5' variant='h6'> Anlytics </Button>
         </div>
         <div>
         <Button className='pb-5' variant='h6'> Comerce </Button>
         </div>
         <div>
         <Button className='pb-5' variant='h6'> Insights </Button>
         </div>
         <div>
         <Button className='pb-5' variant='h6'> Support  </Button>
         </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className='text-center'>
         <Typography className='pb-5' variant='h5'> Documentation </Typography>
         <div>
         <Button className='pb-5' variant='h6'> Guides </Button>
         </div>
         <div>
         <Button className='pb-5' variant='h6'> API Status </Button>
         </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className='text-center'>
         <Typography className='pb-5' variant='h5'> Legal </Typography>
         <div>
         <Button className='pb-5' variant='h6'> Claim </Button>
         </div>
         <div>
         <Button className='pb-5' variant='h6'> Privacy </Button>
         </div>
         <div>
         <Button className='pb-5' variant='h6'> Terms & Condition </Button>
         </div>
        </Grid>
      </Grid>
      <div className='text-center'>
                <Typography>© 2023 My Company. All rights reserved.</Typography>
                        Made with love by Me.<Typography/>
                Icons made by Freepik from www.flaticon.com
      </div>
      
    </div>
  )
}

export default Footer
