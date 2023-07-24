import React from 'react'
import "./div2.css"
import ico1 from '../images/icon1.png'
import ico2 from '../images/icon2.png'
import ico3 from '../images/icon3.png'
import ico4 from '../images/icon4.png'



const div2 = () => {
    
    return(

    <div class="container">
        <div class="centered">
            <div class="item">
                <img src={ico1} alt=""/>
                <p>Descripción de la imagen 1</p>
            </div>
            <div class="item">
            <img src={ico2} alt=""/>
                <p>Descripción de la imagen 2</p>
            </div>
            <div class="item">
            <img src={ico3} alt=""/>
                <p>Descripción de la imagen 3</p>
            </div>
            <div class="item">
            <img src={ico4} alt=""/>
                <p>Descripción de la imagen 4</p>
            </div>
        </div>
    </div>

    )
}

export default div2