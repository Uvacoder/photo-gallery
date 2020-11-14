import React from 'react'
import images from '../../data/images';
import GalleryComp from '../gallery.Component/gallery.component';
import '../hero.component/hero.style.css'
import '../gallery.Component/images.style.css'


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
               <div className='heroComp bgStyle' style={ this.state.bgImage }    >
                   <div className='lander'>
                        <h1 className='landerName' >LanderDot Photography</h1> 
                   </div>
                   <select className='formInput' name = 'priority' onChange = { this.handleSearchSubmit } >
                        <option value = '' > All </option>
                        <option value = 'baby' > Baby </option>
                        <option value = 'cards'> Cards </option>
                        <option value = 'people' > People </option>
                        <option value = 'light' > Light </option>
                        <option value = 'ludo' > Ludo </option>
                        <option value = 'shoe' > Shoe </option>
                        <option value = 'sunset' > Sunset </option>
                        <option value = 'nature' > Nature </option>
                        <option value = 'black and white' > Black and White </option>
                        <option value = 'railway' > Railway </option>
                    </select>
               </div>
                 <GalleryComp filteredImage={filteredImage} /> 
             </div>
            
        )
    } 
}


export default HeroComp;