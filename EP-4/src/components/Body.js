import ResCard from "./ResCard";
import {useState,useEffect} from "react";
import Shimmer  from "./shimmer"; 
import { Link } from "react-router-dom";

const Body=()=>{
//local state variable-super powerful var
const [ListOfRes,setListOfRes]=useState([]);  //cloning of all res 
const [searchText,setsearchText]=useState("");
// const [filteredRes,setfilteredRes]=useState([]); 
const [displayRes,setdisplayRes]=useState([]); // display both search and top_res 

useEffect(()=>{
  fetchData();
  
},[])

const fetchData= async ()=>{
  const data=await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
  const json=await data.json();
  console.log(json);
  
  setListOfRes(json?.data?.cards?.slice(3,10))
  // setfilteredRes(json?.data?.cards?.slice(3,10));
  setdisplayRes(json?.data?.cards?.slice(3,10));
}

return  ListOfRes.length===0?<Shimmer />: (
        <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" className="search-bar" value={searchText} onChange={(e)=>
            {
              setsearchText(e.target.value);
            console.log(searchText);
            }}/>
            <button className="search-btn" onClick={()=>{
              const filteredSearch=ListOfRes.filter((res)=>
                res?.card?.card?.info?.name?.toLowerCase().includes(searchText.toLowerCase() ))

              setdisplayRes(filteredSearch);
            }}>search</button>
          </div>


        <button className="filter-btn" onClick={()=>{
          const filteredList=ListOfRes.filter((res)=>res.card.card.info.avgRating>=4);
          console.log(filteredList)
          setdisplayRes(filteredList);
        }}>
          Top Restuarants </button>
          </div>

        <div className="res-container">
        
        {displayRes.length > 0 ? (
          displayRes.map((restaurant) => (
            <Link key={restaurant.card?.card?.info?.id} to={"/restaurant/" +restaurant.card?.card?.info?.id }><ResCard  resData={restaurant} /></Link>
          ))
        ) : (
          <h2>No Restaurants Found</h2>
        )}
       
        </div>
        </div>

    )
}

 
export default Body ;