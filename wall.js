import React from "react";
import Brick from "../Brick/Brick.js";
import "./style.css";

class Wall extends React.Component{

    constructor(props){

        super(props);
        this.state={
            bricks: [1,2,3,4]
        };
    }

    addMoreBricks=() => {
        console.log("I am getting clicked");
        const newBricksArray=[...this.state.bricks]
        newBricksArray.push(newBricksArray.length+1);
        //this.state.bricks.push(5);
        //console.log(this.state.bricks);
        this.setState({
            bricks: newBricksArray
        });


    };
    //override method
    //render method returns what is displayed on the browser

    render=()=> {
        return(
            <div className="wall-container">
            {
                this.state.bricks.map( (brick)=> {
                    return <Brick key={brick} name={brick} />
                } )
            }
            <button className="btn"onClick={this.addMoreBricks}>Add more</button>
            </div>
        );
    };
}

export default Wall;