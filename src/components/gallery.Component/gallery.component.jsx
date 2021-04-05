import React from 'react'
import './images.style.css'
import LazyLoad from 'react-lazyload'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
// import Macy from 'macy'
// import FlexMasonry from 'flexmasonry'

const GalleryComp = ({filteredImage}) => {
 
    
    return(
     <div className='imageContainer' >
    <ResponsiveMasonry  columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}} >
        <Masonry  >
            {filteredImage.map(image => 
                <LazyLoad height={200}>
                    <img className='image' src={image.url} alt='pic' key={image.id} />
                </LazyLoad>
                    )}
        </Masonry>
    </ResponsiveMasonry>
    </div>
)}

export default GalleryComp;