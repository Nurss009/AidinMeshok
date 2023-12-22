import React from 'react';
import place11 from '../Assets/place11.png';
import place22 from '../Assets/place22.png';
import place33 from '../Assets/place33.png';

const Midle = () => {
    return (
        <div className={'container'}>
            <h5>Choose Your Destination</h5>
           <div className="row">
               <div className="col-4">
                   <img className={'ima'} src={place11} alt="place11"/>
               </div>
               <div className="col-4">
                   <img className={'ima'} src={place22} alt="place23"/>
               </div>
               <div className="col-4">
                   <img className={'ima'} src={place33} alt="place33"/>
               </div>
           </div>
        </div>
    );
};

export default Midle;