import React from 'react';
import Header from "./Components/Heder";
import Carousel from "./Components/Carousel";
import Cities from "./Components/Cities";
import Footer from "./Components/Footer";
import Midle from "./Components/Midle";

const App = () => {
    return (
        <div>
            <Header/>
            <Carousel/>
            <Cities/>
            <Midle/>
            <Footer/>
        </div>
    );
};

export default App;