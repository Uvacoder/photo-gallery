import React from 'react'
import './images.style.css'

const GalleryComp = props => (
        <div className='imageContainer' >
            {props.filteredImage.map(image => <img className='image' src={image.url} alt='pic' key={image.id}  />)}
        </div> 
)

export default GalleryComp;