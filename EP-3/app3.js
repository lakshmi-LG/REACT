import React from "react";
import ReactDOM from "react-dom/client";
import downloadImage from './img1.png';
import iconImage from './img2.png' ;
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
    {num}
    </>
)

root.render(<ReactCompo />)



//JS inside JSx using {}
const num=1000;


//CODING ASSIGNMENT----
//using React.createElement
const demo1=React.createElement("div",{id:"title"},React.createElement("h1",{},React.createElement("h2",{},React.createElement("h3",{},"from Nested h3 using createElement"))));

//using JSX
const demo2=(
    <div id="title" className="titleJSX">
        <h1>from h1</h1>
        <h2>from h2</h2>
        <h3>from h3</h3>
    </div>
)

//using functional component
const Demo3=()=>(
    <div id="title">
        <h1>from h1</h1>
        <h2>from h2</h2>
        <h3>from h3</h3>
        <Title />
    </div>
)



//creating a page ----(logo,searchbar,user icon)

const Page=()=>{
    return(
        <div classNmae="card">
        <header>
        {/* <img src={downloadImage} alt="LOGO" height="70" width="70"/> */}
        <label className="input">SEARCH :<input type="text"  /> </label>
        <img src={iconImage} height="50" width="50" className="img"/> 
        </header>
        </div> 
    );
};

root.render(< Page />);  