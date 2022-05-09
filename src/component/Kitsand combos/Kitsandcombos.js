import React from 'react'
import {
    Container
  } from 'reactstrap';

  import './kits.css'


const Kitsandcombos = () => {
    return (
        <Container fluid>
            <div>
                <img src="assets/images/banner.jpg" alt="ads-banner"/>
            </div>
                <p className="text-center top-head-1">SHOP MORE PAY LESS! </p>
                <p className="text-center top-head-2">KITS AND COMBO'S</p>
                <div className="image-container-with-rating">
                    <div className="container-1 container-content sale">
                        <p class="on-image">ON SALE</p>
                        <div className="kits-card">
                            <p className="text-center">PUREWAX MADNESS KIT</p>
                            <p className="text-center"> ★★★★★(33)</p>
                            <p className="text-center">$90 &nbsp; <span className="crossed">$120</span> </p>
                        </div> 
                    </div>
                    <div className="container-2 container-content">
                        <div className="kits-card">
                            <p className="text-center">PUREWAX WATERLESS CAR </p>
                            <p className="text-center">WASH/DETAILER 1 GALLON (3.78L)</p>
                            <p className="text-center">★★★★★(73)</p>
                            <p className="text-center">$119</p>
                        </div>
                    </div>
                    <div className="container-3 container-content">
                        <div className="kits-card">
                            <p className="text-center">PUREWAX: INTRO KIT</p>
                            <p className="text-center">★★★★★(71)</p>
                            <p className="text-center">$55 &nbsp; <span className="crossed">$70</span> </p>
                        </div>
                    </div>
                    <div className="container-4 container-content">
                        <div className="kits-card">
                            <p className="text-center">WATERLESS SUPER SAVER PACKS </p>
                            <p className="text-center">(BULK COMBOS)</p>
                            <p className="text-center">★★★★★(84)</p>
                            <p className="text-center">$60 &nbsp; <span className="crossed">$90</span> </p>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button className="view-product-button">
                        VIEW ALL PRODUCTS
                    </button>
                </div>
        </Container>
    )
}

export default Kitsandcombos
