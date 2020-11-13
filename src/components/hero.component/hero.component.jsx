// import React, {useState, useEffect} from 'react';
import React from 'react'
import images from '../../data/images';
import GalleryComp from '../gallery.Component/gallery.component';
import Navbar from '../navbar.component/navbar.component'
import '../hero.component/hero.style.css'
import '../gallery.Component/images.style.css'
import '../navbar.component/navbar.styles.css'


class HeroComp extends React.Component{

        state = {
            images,
            searchValue: '',
            bgImage: ''
    }
    

    componentWillMount(){
        const randomImage = images[Math.floor(Math.random() * images.length)];
        let heroBackground = {
        background: ` url(  ${ randomImage.url } ) no-repeat center center fixed ` ,
        width: '100vw',
        height: '50vh',
        backgroundSize: 'cover'
        }
      this.setState({bgImage: heroBackground })
};


     handleSearchSubmit = (e) => {
         this.setState({searchValue: e.target.value});
     }

    render(){
    const {images , searchValue} = this.state;
    const filteredImage = images.filter(image => image.cartigory.toLowerCase().includes(searchValue.toLocaleLowerCase()));

        return(
             <div className='mainContainer'>
                 <div className='navBarComponent'>
                     <Navbar />
                 </div>
               <div className='heroComp bgStyle' style={ this.state.bgImage }    >
                   <div className='lander'>
                        <h1 className='landerName'>LanderDot Photography</h1> 
                   </div>
                   <div className='formInput' >
                        <input  type="text" placeholder='search cartigory' onChange={ this.handleSearchSubmit  } />
                   </div>

               </div>
                 <GalleryComp filteredImage={filteredImage} /> 
             </div>
            
        )
    } 
}


export default HeroComp;