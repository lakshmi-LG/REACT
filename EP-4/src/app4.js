import React, {lazy,Suspense} from "react";
import ReactDOM from "react-dom/client" ;
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu"
// import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"; 
import Body from "./components/Body";



const Gros=lazy(()=>import("./components/Grossery"))
const App=()=>{
    return(
        <div className="App">
        <Header />
        <Outlet />
       <footer />
        </div>
    )
}


//WAY-1 : traditional routering

// const AppRouter=()=>{
//     return(
//         <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<App />} />
//             <Route path="about" element={<About />} />
//             <Route path="contact" element={<Contact />} />
//             </Routes>
//             </BrowserRouter>
//     )
// }


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppRouter />);
// root.render(<App />)



//WAY-2 : data API -based routing

const router = createBrowserRouter([

    { 
        path: "/",
        element: <App /> , 
        children:[
            {path:"/", element:<Body /> },
            {path:"/about", element: <About />},
            {path:"/contact", element:<Contact />},
            {path:"/restaurant/:resId",element:<ResMenu />},
            {path:"/Grossery", element:<Suspense fallback={<h1>Loading...</h1>}><Gros /></Suspense>}
        ],
        errorElement:<Error /> 
    }
   
     ]);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    
      <RouterProvider router={router} />
  );




