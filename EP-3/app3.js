import React from "react";
import ReactDOM from "react-dom/client";

//1.  ---USING PURE REACT------ 
// React.creatElement(JS obj)-----render---- HTML element(render)
// const heading=React.createElement("h1",{id:"head"},"Namaste React from React !");
// const root1=ReactDOM.createRoot(document.getElementById("root"));
// root1.render(heading);
// console.log(heading);

//2. ---using JSX (React Element)------
//JSX=> React.createElement(JS obj)----Babel----HTML element(parcel's babel)

const JSXhead= (<h1 id="JSXHead" className="JSXhead" tabIndex="2">"Hello from JSX !!</h1>)
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(JSXhead);
console.log(JSXhead);





//----below all 3 are same way (creating functional component)----

//1. React functional component with return 
const FunComponent=() =>{
    return <h1> from functional component</h1>
   } 

//2. react functional component without return 
const FunCompo1=()=>(<h4>from fun compo without return </h4>)

//3. just declaring(without anything)
const FunCompo2=()=><h2>from simple declaration</h2>

//----to render there are again 3 ways----

root.render(<FunCompo2/>)
root.render(<FunCompo1></FunCompo1>)
//3. wrap inside any JSX {} , it works not not under render 



//component Composition
const Title=()=>
    <h3>from title component</h3>


const HeadingCompo=()=>(
    <div>
     <Title />  {/*  JX syntax of calling component */}
      {Title()}   {/*JSX syn of calling a JS fun  */}
    <h3>From heading Compo</h3>
    </div>
)

root.render(<HeadingCompo/>);


//--ReactElement inside ReactComponent and ReactElement--

const elem=(<div id="container"><Title />{JSXhead}<h1>HELLO react Element</h1></div>) 
//ele inside title component and JSX head
root.render(elem)



//--ReactComponent inside ReactComponent and ReactElement--
const ReactCompo=()=>(
    <>
    <FunComponent></FunComponent>
    {elem}
    </>
)

root.render(<ReactCompo />)
