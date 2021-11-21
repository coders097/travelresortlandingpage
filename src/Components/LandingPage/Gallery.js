import React from 'react';
import '../../css/Gallery.css';
import GallerySlider from './GallerySlider';

function Gallery() {
    return (
        <section className="gallery">
            <h1>OUR RESORT <span>GALLERY</span></h1>
            <div className="divider"></div>
            <p>lorem ipsum zylum shit conon lopiz maza isiz</p>
            <div className="gallery-view">
                <GallerySlider/>
            </div>
        </section>
    );
}

export default Gallery;