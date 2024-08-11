import React from 'react'
import MainCarosol from '../../components/HomeCarosol/MainCarosol'
import HomeSectionCarosol from '../../components/HomeSectionCarosol/HomeSectionCarosol'

import { lehngacholiPage2 } from '../../components/Data/Saree/lengha_choli';
import { mens_kurta } from '../../components/Data/men/Mens_Kurta';
import { sareePage1 } from '../../components/Data/Saree/page1';
import { dressPage1 } from '../../components/Data/Dress/dress';
import { mensPantsPage1 } from '../../components/Data/Pants/mans_pants';
import { kurtaPag1 } from '../../components/Data/Kurta/Kurta';


const HomePage = () => {
  return (
    <div className='z-(-50)'>
       <MainCarosol/>
        <div className='space-y-10 py-20 flex-col justify-center px-10'>
          <HomeSectionCarosol data={lehngacholiPage2} SelectionName ={"Lehngacholi"}/>
          <HomeSectionCarosol data={kurtaPag1} SelectionName ={"Women's Kurta"}/>
          <HomeSectionCarosol data={mens_kurta} SelectionName ={"Men's Kurta"}/>
          <HomeSectionCarosol data={sareePage1} SelectionName ={"Saree"}/>
          <HomeSectionCarosol data={dressPage1} SelectionName ={"Women's Dress"}/>
          <HomeSectionCarosol data={mensPantsPage1} SelectionName ={"Man's Pants"}/>
        </div>
    </div>
  )
}

export default HomePage
