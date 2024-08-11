import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const steps=[
    "Placed",
    "Order Confirmed",
    "shipped",
    "Out For Delivery",
    "Deliverd"
]

const OrderTraker = ({activeStep})=>{
  return (
    <div className='w-full'>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((Label)=>
        <Step>
            <StepLabel sx={{color:"#9151FD",fontSize:"44px"}}>{Label}</StepLabel>
        </Step>)}
      </Stepper>
    </div>
  )
}

export default OrderTraker
