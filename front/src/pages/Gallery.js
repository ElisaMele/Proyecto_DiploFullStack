import React, { useEffect } from 'react';
import 'jquery';
import lightbox from 'lightbox2';
import 'lightbox2/dist/css/lightbox.min.css';
import '../styles/pages/Gallery.css';

const Gallery = (props) => {
    useEffect(() => {
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true
        });
    }, []); 

    return (
        <section>
            <div className="gallery">
                <div className="item">
                    <a href="/images/gallery/03.jpg" data-lightbox="gridImage">
                        <img src="images/gallery/03.jpg" alt="img03" />
                    </a>
                </div>
                <div className="item">
                    <a href="/images/gallery/02.jpg" data-lightbox="gridImage">
                        <img src="images/gallery/02.jpg" alt="img02" /></a>
                </div>
                <div className="item">
                    <a href="/images/gallery/01.jpg" data-lightbox="gridImage">
                        <img src="images/gallery/01.jpg" alt="img01" /></a>
                </div>
                <div className="item">
                    <a href="/images/gallery/04.jpg" data-lightbox="gridImage">
                        <img src="images/gallery/04.jpg" alt="img04" /></a>
                </div>
                <div className="item">
                    <a href="/images/gallery/05.jpg" data-lightbox="gridImage">
                        <img src="images/gallery/05.jpg" alt="img05" /></a>
                </div>
                <div className="item">
                    <a href="/images/gallery/07.jpg" data-lightbox="gridImage">
                        <img src="images/gallery/07.jpg" alt="img07" /></a>
                </div>
                <div className="item">
                    <a href="/images/gallery/08.jpg" data-lightbox="gridImage">
                        <img src="images/gallery/08.jpg" alt="img08" /></a>
                </div>
                <div className="item">
                    <a href="/images/gallery/09.jpg" data-lightbox="gridImage">
                        <img src="images/gallery/09.jpg" alt="img09" /></a>
                </div>
                <div className="item">
                    <a href="/images/gallery/010.jpg" data-lightbox="gridImage">
                        <img src="images/gallery/010.jpg" alt="img010" /></a>
                </div>
                <div className="item">
                    <a href="/images/gallery/011.jpg" data-lightbox="gridImage">
                        <img src="images/gallery/011.jpg" alt="img011" />
                    </a>
                </div>
                <div className="item">
                    <a href="/images/gallery/012.jpg" data-lightbox="gridImage">
                        <img src="images/gallery/012.jpg" alt="img012" />
                    </a>
                </div>
                <div className="item">
                    <a href="/images/gallery/013.jpg" data-lightbox="gridImage">
                        <img src="images/gallery/013.jpg" alt="img013" />
                    </a>
                </div>
                <div className="item">
                    <a href="/images/gallery/014.jpg" data-lightbox="gridImage">
                        <img src="images/gallery/014.jpg" alt="img014" />
                    </a>
                </div>
                <div className="item">
                    <a href="/images/gallery/015.jpg" data-lightbox="gridImage">
                        <img src="images/gallery/015.jpg" alt="img015" />
                    </a>
                </div>
                <div className="item">
                    <a href="/images/gallery/016.jpg" data-lightbox="gridImage">
                        <img src="images/gallery/016.jpg" alt="img016" />
                    </a>
                </div>
                <div className="item">
                    <a href="/images/gallery/019.jpg" data-lightbox="gridImage">
                        <img src="images/gallery/019.jpg" alt="img019" />
                    </a>
                </div>
                <div className="item">
                    <a href="/images/gallery/018.jpeg" data-lightbox="gridImage">
                        <img src="images/gallery/018.jpeg" alt="img018" />
                    </a>
                </div>
                <div className="item">
                    <a href="/images/gallery/026.jpg" data-lightbox="gridImage">
                        <img src="images/gallery/026.jpg" alt="img017" />
                    </a>
                </div>
                <div className="item">
                    <a href="/images/gallery/020.jpg" data-lightbox="gridImage">
                        <img src="images/gallery/020.jpg" alt="img020" />
                    </a>
                </div>
                <div className="item">
                    <a href="/images/gallery/021.jpg" data-lightbox="gridImage">
                        <img src="images/gallery/021.jpg" alt="img021" />
                    </a>
                </div>
                <div className="item">
                    <a href="/images/gallery/022.jpg" data-lightbox="gridImage">
                        <img src="images/gallery/022.jpg" alt="img022" />
                    </a>
                </div>
                <div className="item">
                    <a href="/images/gallery/023.jpg" data-lightbox="gridImage">
                        <img src="images/gallery/023.jpg" alt="img023" />
                    </a>
                </div>
                <div className="item">
                    <a href="/images/gallery/024.jpg" data-lightbox="gridImage">
                        <img src="images/gallery/024.jpg" al="img024" />
                    </a>
                </div>
                <div className="item">
                    <a href="/images/gallery/025.jpeg" data-lightbox="gridImage">
                        <img src="images/gallery/025.jpeg" alt="img025" />
                    </a>
                </div>
            </div>

        </section>


    )
};

export default Gallery;