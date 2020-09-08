import React from 'react'; 
import "./style.css";
const Brick = (props) => {
    console.log("how does my props look like----",props);
    return (
        <div className="brick-cont">
        {props.name}
        </div>
    )
};
export default Brick;
