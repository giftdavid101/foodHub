import React from 'react';
// import './fifthsection.style.scss'

const data = [
  {
    name: "roasted meat",
    id: 1,
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
  },
  {
    name: "Beef",
    id: 2,
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
  },
  {
    name: "Potato Chips",
    id: 3,
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
  },
  {
    name: "Cream Cake",
    id: 4,
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
  },
  {
    name: "Veggies",
    id: 5,
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
  },
  {
    name: "Chips and Egg",
    id: 6,
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
  },
];

const FifthSection = () => {


 return (
   <div className="fifth-section">
     <div>
       <h6>Explore Our Food</h6>
       <p>
         Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
         nonumy eirmod tempor invidunt ut labore et dolore magna.
       </p>

       <div>
       <div>
       {
       data.map((el) => (
           <div>
           {el.name}
           
           </div>
       ))
       }
       
       </div>
       
       
       
       </div>
     </div>
   </div>
 );
}
export default FifthSection
