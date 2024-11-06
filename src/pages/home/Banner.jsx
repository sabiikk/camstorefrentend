import React from 'react'

import bannerImg from "../../assets/banner1.png"

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
         <div className='md:w-1/2 w-full flex items-center md:justify-end'>
            <img  src={bannerImg} alt="" />
        </div>
        
        <div className='md:w-1/2 w-full'>
            <h1 className='md:text-5xl text-2xl font-medium mb-7'> <span style={{color:"red"}}>New Arrivals</span>  Capture the Future Today</h1>
            <p className='mb-10'>From feature-packed DSLRs to sleek mirrorless models, this week's new releases offer something for every photography enthusiast. Explore top-rated gear to capture your next masterpiece.</p>

            <button className='btn-primary'style={{color:'white'}} >Subscribe</button>
        </div>

       
    </div>
  )
}

export default Banner