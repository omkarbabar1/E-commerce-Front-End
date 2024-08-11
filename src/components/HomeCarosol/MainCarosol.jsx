import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarosolData } from './MainCarosolData';



 

const items = MainCarosolData.map((items)=>
<img className='cursor-pointer' role='presentation' src={items.image} alt=''/>)

const MainCarosol = () => (
    <AliceCarousel
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={2000}
    infinite
    />
);
export default MainCarosol;