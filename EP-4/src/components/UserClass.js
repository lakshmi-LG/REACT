import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.name + "Child construtor");
        this.state={
           userInfo:{
            name:"Dummy",
            loc:"Dummy loc"
           }
            
        }
    }

   async componentDidMount(){
        console.log(this.props.name + "Child Did Mount");
        const data=await fetch("https://api.github.com/users/lakshmi-LG");
        const json=await data.json();
        console.log(json);

        this.setState({
            userInfo:json
        })
    }

    componentDidUpdate(){
        console.log("Did Update!! ")
    }

    componentWillUnmount(){
        console.log("Will unmount");
    }

    render(){
        const {login,created_at,avatar_url}=this.state.userInfo;
        console.log(this.props.name + "Child Render");
        return(
            
            <div className="User">
                
                
                <h2>name: {login}</h2>
                <h3>loc: {avatar_url}</h3>
                <h3>creation: {created_at}</h3>
            </div>
        )
    }
}

export default UserClass ;