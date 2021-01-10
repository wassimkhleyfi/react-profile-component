import React from 'react'
import image from './photo.jpg'

function ProfilPhoto() {
    return (
        <div className="container">
            <img className ="photo" width={300} height={400}src={image} alt="imageInSrc" /> 
            
        </div>
    )
}

export default ProfilPhoto
