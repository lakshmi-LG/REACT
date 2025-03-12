import ResCard from "./ResCard";
import {useState} from "react";
import Shimmer  from "./shimmer"; 
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useListOfRes from "../utils/useListOfRes";

const Body=()=>{

const [searchText, setSearchText] = useState("");

const {ListOfRes,displayRes,filteredSearch,filteredTopRes}=useListOfRes();

const onlineStatus=useOnlineStatus();



if(onlineStatus===false){
  return <h1>OFFLINE,smtg went wrong! PLEASE check your Connection!!</h1>
 }


return  ListOfRes.length===0?<Shimmer />: (
        <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" className="search-bar" value={searchText} onChange={(e)=>
            {
              setSearchText(e.target.value);
              console.log(searchText);
            }}/>
            <button className="search-btn" onClick={()=>filteredSearch(searchText)}>search</button>
          </div>


        <button className="filter-btn" onClick={()=>filteredTopRes()}>Top Restuarants </button>
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