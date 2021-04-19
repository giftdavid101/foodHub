import React from 'react';
import MenuCard from "../../elements/MenuCard";
import './fifthsection.style.css'
import imgOne from '../../../thumbnails/eaters-collective-172257-unsplash.png';
import imgTwo from '../../../thumbnails/an_vision-1188492-unsplash.png';
import imgThree from '../../../thumbnails/7es93lms.png';
import imgFour from '../../../thumbnails/suts9k7v.png';
import imgFive from '../../../thumbnails/p9eh9haz.png'
import imgSix from '../../../thumbnails/aiu45f8t.png'

const data = [
    {
        name: "roasted meat",
        id: 1,
        emage: imgOne,
        price: 10.50,
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    },
    {
        name: "Beef",
        id: 2,
        emage:imgTwo,
        price: 10.50,
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    },
    {
        name: "Potato Chips",
        id: 3,
        emage: imgThree,
        price: 10.50,
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    },
    {
        name: "Cream Cake",
        id: 4,
        emage:imgFour,
        price: 10.50,
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    },
    {
        name: "Veggies",
        id: 5,
        emage:imgFive,
        price: 10.50,
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    },
    {
        name: "Chips and Egg",
        id: 6,
        emage:imgSix,
        price: 10.50,
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    },
];

const FifthSection = () => {


    return (
        <div className="fifth-section">
            <div className={"fifth-section_fifth-con"}>
              <div className={"fifth-section-title"}>
                <h3>Explore Our Food</h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod
                </p>
                  <p>
                    tempor invidunt ut labore et dolore magna.
                  </p>
              </div>
                <div className={'card-section'}>
                  <div className={'card-section-con'}>
                    {
                      data.map((el) => (
                          <MenuCard key={el.id} food={el}/>
                      ))
                    }
                  </div>


                </div>
            </div>
        </div>
    );
}
export default FifthSection
