import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";


class About extends Component{
    constructor(props){
        console.log("Parent constructor")
        super(props);
    }

    componentDidMount(){
        console.log("Parent Did Mount")

    }


    render(){
        console.log("Parent render")

        return(
            <div className="About">
            <h3>You are in ABOUT US page !</h3>
            <User name={"Lakshmi-fun compo"} loc={"Bangalore"} />
            <UserClass name={"Raj - class compo" } loc={"Chennai"} />
            {/* <UserClass name={"kamal"} location={"hyderabad"} />    */}
            </div>
        )
    }
}



export default About ;