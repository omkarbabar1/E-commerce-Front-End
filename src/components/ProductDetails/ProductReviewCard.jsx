import { Avatar, Grid, Rating ,Box } from '@mui/material'
import React from 'react'

function ProductReviewCard() {
  return (
    <div className='mt-6'>
        <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
            <Box>
                <Avatar className='text-white' sx={{width:56,height:56,bgcolor:"#9155fd"}}>RS</Avatar>
            </Box>
        </Grid>
        <Grid item xs={9}>
            <div className='space-y-2'>
                <div>
                    <p className='font-semibold text-lg'>Radhe Shaam</p>
                    <p className='opacity-70'> Aug 3 , 2024</p>
                </div>
            </div>
            <Rating value={4} name='half-rating' readOnly precision={.5}/>
            <p >Nice Product Good For Wearing Daily..!!</p>
        </Grid>
        </Grid>
    </div>
  )
}

export default ProductReviewCard
