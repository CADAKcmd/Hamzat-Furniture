import React from 'react'
import OurServices from '../Components/OurService'
import FurnitureGrid from '../Components/FurnitureGrid'
import FurnitureCraftsmanship from '../Components/FurnitureCraftmanship'
import DoorFurniture from '../Components/DoorFurniture'
import ImageGallery from '../Components/ImageGallery'
import CompanyStatistics from '../Components/CompanyStatics'

const Services = () => {
  return (
   <>
   <div className='w-full h-full bg-[url("https://i.pinimg.com/736x/91/3e/2a/913e2a8e9d420754b5c796f1dad30aed.jpg")] bg-cover bg-center flex flex-col items-center justify-center bg-fixed'>
   <OurServices/>
   <FurnitureGrid/>
   <FurnitureCraftsmanship/>
   <DoorFurniture/>
   <CompanyStatistics/>
   <ImageGallery/>
   </div>
   
   </>
  )
}

export default Services