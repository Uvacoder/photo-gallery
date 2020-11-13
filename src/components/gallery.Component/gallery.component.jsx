import React from 'react'
import './images.style.css'
import LazyLoad from 'react-lazyload'


const GalleryComp = props => (
        <div className='imageContainer' >
            {props.filteredImage.map(image => 
                <LazyLoad height={200}>
                    <img className='image' src={image.url} alt='pic' key={image.id} />
                </LazyLoad>
                    )}
        </div> 
)

export default GalleryComp;