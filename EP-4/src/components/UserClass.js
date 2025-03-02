import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.name + "Child construtor");
        this.state={
            count:0,
            count2:1  //can create multiple state_var inside this.state
        }
    }

    componentDidMount(){
        console.log(this.props.name + "Child Did Mount");
    }

    render(){
        const {name,loc}=this.props;
        const {count,count2}=this.state;
        console.log(this.props.name + "Child Render");
        return(
            
            <div className="User">
                <h1>Count : {count}</h1>
                <h1>Count2 : {count2}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count + 1,
                        // count2:this.state.count2 + 1  //can modify multiple state_var inside 1 fun (this.setState)
                    })
                }}>Class count +</button>
                <h2>{name}</h2>
                <h3>{loc}</h3>
            </div>
        )
    }
}

export default UserClass ;