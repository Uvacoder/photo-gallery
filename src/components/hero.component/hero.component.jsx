import React from 'react'
import  images  from '../../data/images';
import GalleryComp from '../gallery.Component/gallery.component';


const HeroComp = () => {
    return(
        <div >
            <GalleryComp filteredImage={images} /> 
        </div>
    )
} 

export default HeroComp;