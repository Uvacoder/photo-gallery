import React from 'react'
import LazyLoad from 'react-lazyload'

const GalleryComp = ({filteredImage}) => { 
    return(
        <div className="min-h-screen px-5 py-10 md:px-10 lg:px-20">
            <div className="box-border max-w-6xl mx-auto md:masonry before:box-inherit after:box-inherit lg:masonry-lg">
                   {filteredImage.map(image => 
                <div key={image.id} className="mb-6 bg-gray-200 rounded-lg break-inside">
                    <LazyLoad height={200}>
                        <img className='image' src={image.url} alt='pic' key={image.id} />
                    </LazyLoad>
                </div>
                    )}
            </div>
        </div>
)}

export default GalleryComp;