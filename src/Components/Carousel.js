import React from 'react';
import banner from '../Assets/banner.png'
import map from '../Assets/map.png'
import ukelele from '../Assets/ukelele.png'
import binocular from '../Assets/binocular.png'
import backpack from '../Assets/backpack.png'


const Carousel = () => {
    return (
        <main>
            <section>
                <div className={'container'}>
                    <div className={'bunner'}>
                        <img className={'bunner__img'} src={banner} alt="hero-banner"/>
                    </div>
                    <div className="row d-flex text mt-5 ">
                        <div className="col-3 d-flex justify-content-center flex-column align-items-center">
                            <img className={'col-image '} src={map} alt="map"/>
                            <h5  className={'text__h5'}>Choose Destination</h5>
                            <p className={'text__text'}>Lorem Ipsum is simply dummy text of the printing setting</p>
                        </div>
                        <div className="col-3 d-flex justify-content-center flex-column align-items-center">
                            <img className={'col-image'} src={binocular} alt="binocular"/>
                            <h5  className={'text__h5'}>Explore The Place</h5>
                            <p className={'text__text'}>Lorem Ipsum is simply dummy text of the printing setting</p>
                        </div>
                        <div className="col-3 d-flex justify-content-center flex-column align-items-center">
                            <img className={'col-image'} src={backpack} alt="backpack"/>
                            <h5  className={'text__h5'}>Start Your Journey</h5>
                            <p className={'text__text'}>Lorem Ipsum is simply dummy text of the printing setting</p>
                        </div>
                        <div className="col-3 d-flex justify-content-center flex-column align-items-center">
                            <img className={'col-image'} src={ukelele} alt="ukelele"/>
                            <h5  className={'text__h5'}>Start Your Journey</h5>
                            <p className={'text__text'}>Lorem Ipsum is simply dummy text of the printing setting</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Carousel;