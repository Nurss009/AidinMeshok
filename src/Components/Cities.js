import React from 'react';
import place1 from '../Assets/place1.png'
import place2 from '../Assets/place2.png'
import place3 from '../Assets/place3.png'
import moiak from '../Assets/moiak.png'

const Cities = () => {
    return (
        <div className={'container'}>
            <div className="row">
                <div className="col-3">
                    <div className="box Top">
                        <div className="Top_txt">
                            <h3 className={'Top__h3'}>Top<span className={'Top__span'}>Destinations</span> In The World</h3>
                            <p className={'Top__p'}>It is a long established fact that a reader will be the distracted by the readable content of a page when looking at its layout from it.</p>
                            <button className={'Top__but'}>
                                Discover More
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="box Top">
                        <img  className={'imgh'} src={place1} alt="place1"/>
                    </div>
                </div>
                <div className="col-3">
                    <div className="box Top">
                        <img  className={'imgh'} src={place2} alt="place2"/>
                    </div>
                </div>
                <div className="col-3">
                    <div className="box Top">
                        <img  className={'imgh'} src={place3} alt="place3"/>
                    </div>
                </div>
            </div>
            <main>
                <section className={'moiak-sec'}>
                    <div className="row">
                        <div className="col-6">
                            <img className={'svg-text__moiak'} src={moiak} alt="moiak"/>
                        </div>
                        <div className="col-6">
                            <div className={'svg-text'}>
                                <h1>We Offering In Total 793 Tours Out The World</h1>
                            </div>
                            <div>
                                <h5>Best Travel Guide Always For Your Services</h5>
                                <p>Travel has helped us to understandsa the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes. Travel has helped us to understand the meaning of life</p>
                            </div>
                            <div className={'d-flex svg-text__svg'} >
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.4697 0C5.62954 0 0 5.6432 0 12.5C0 19.3568 5.62954 25 12.4697 25C19.3099 25 25 19.4175 25 12.5C25 5.58252 19.3705 0 12.4697 0ZM22.6392 11.4078H18.0993C17.8571 8.25243 16.8281 5.27913 15.0726 2.6699C19.1283 3.70146 22.155 7.16019 22.6392 11.4078ZM9.14044 13.6529H15.799C15.4964 16.7476 14.3462 19.6602 12.4697 22.1481C10.5932 19.6602 9.4431 16.7476 9.14044 13.6529ZM9.14044 11.4078C9.4431 8.31311 10.5932 5.40049 12.4697 2.91262C14.3462 5.40049 15.5569 8.31311 15.799 11.4078H9.14044ZM9.92736 2.60922C8.17191 5.21845 7.14286 8.19175 6.90073 11.3471H2.36077C2.7845 7.16019 5.87167 3.70146 9.92736 2.60922ZM2.36077 13.6529H6.90073C7.14286 16.8083 8.17191 19.7816 9.92736 22.3908C5.87167 21.3592 2.7845 17.9005 2.36077 13.6529ZM15.0726 22.4515C16.8281 19.8422 17.8571 16.8689 18.0993 13.7136H22.6392C22.155 17.9005 19.1283 21.3592 15.0726 22.4515Z" fill="#65CE54"/>
                                </svg>
                                <h5>World Class Services Provide For You</h5>
                            </div>
                            <div className={'d-flex svg-text__svg'}>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5 0C5.6125 0 0 5.6125 0 12.5V15V20V21.25C0 23.3125 1.6875 25 3.75 25H5C7.0625 25 8.75 23.3125 8.75 21.25V17.5C8.75 15.4375 7.0625 13.75 5 13.75H2.5V12.5C2.5 6.9875 6.9875 2.5 12.5 2.5C18.0125 2.5 22.5 6.9875 22.5 12.5V13.75H20C17.9375 13.75 16.25 15.4375 16.25 17.5V21.25C16.25 23.3125 17.9375 25 20 25H21.25C23.3125 25 25 23.3125 25 21.25V20V15V12.5C25 5.6125 19.3875 0 12.5 0ZM5 16.25C5.6875 16.25 6.25 16.8125 6.25 17.5V21.25C6.25 21.9375 5.6875 22.5 5 22.5H3.75C3.0625 22.5 2.5 21.9375 2.5 21.25V20V16.25H5ZM22.5 21.25C22.5 21.9375 21.9375 22.5 21.25 22.5H20C19.3125 22.5 18.75 21.9375 18.75 21.25V17.5C18.75 16.8125 19.3125 16.25 20 16.25H22.5V20V21.25Z" fill="#FFC01E"/>
                                </svg>
                                <h5>24/7 Strong Customer Support</h5>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Cities;


