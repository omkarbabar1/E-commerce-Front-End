import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Button } from '@mui/material';



const HomeSectionCarosol = ({data,SelectionName}) => {

    const[activeIndexNow, SetActiveIndex] = useState(0);

    const responsive = {
        0: { items: 1 },
        720: { items: 4 },
        1024: { items: 5 }
    };


     const slidePrev=() => SetActiveIndex(activeIndexNow-1 )
     const slideNext=() => SetActiveIndex(activeIndexNow+1)
     const syncActiveIndex =({iteams})=>activeIndexNow({iteams}) 

    const items = data.map((iteam) => <HomeSectionCard product={iteam} />)
    return (

        <div className='relative p-5'>
            <h1 className='text-lg font-medium text-gray-900 '>{SelectionName}</h1>
            <Button   variant="contained" className="z-50" 
                    sx={{ position: 'absolute', top: "8rem", right: "2rem", transform: "translateX(50%) rotate(90deg) " }}
                    aria-label="prev" >
                    <KeyboardArrowLeftIcon className='' sx={{ transform: "rotate(90deg) " }}  />
                </Button>
            <div className=' px-4 lg:px-8 bg-gray-100 pt-10 ;'>
                
                <AliceCarousel
                    items={items}
                    disableDotsControls
                    //disableButtonsControls
                    responsive={responsive}
                    //autoPlay
                    
                    onSlideChanged={syncActiveIndex}
                    onSlideChange={syncActiveIndex}
                    activeIndex={activeIndexNow}
                    //activeIndexNow 1== items.length-5 &&
                    // activeIndexNow == 0 ||
                />
               
                 
               
                
            </div>
            <Button  variant="contained" className="z-50" 
                    sx={{ position: 'absolute', top: "8rem", left: "0rem", transform: "translateX(50%) rotate(90deg) " }}
                    aria-label="next">
                    <KeyboardArrowLeftIcon className='' sx={{ transform: "rotate(-90deg) " }} />
                </Button>
        </div>
    );
};

export default HomeSectionCarosol
