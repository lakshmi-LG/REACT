import { useState,useEffect } from "react";

const useListOfRes=()=>{


  const [ListOfRes,setListOfRes]=useState([]); //local state variable-super powerful var
  const [displayRes,setdisplayRes]=useState([]); // display both search and top_res 



    useEffect(()=>{
        fetchData ();
    },[])

    const fetchData= async ()=>{
        const data=await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
        const json=await data.json();
        
        const RestaurantList=json?.data?.cards?.slice(3,10) || [];
        setListOfRes(RestaurantList);
        setdisplayRes(RestaurantList); // Set initial display list

      };

      //search filter
        const filteredSearch=(searchText)=>{
            const filteredBySearch=ListOfRes.filter((res)=>
          res?.card?.card?.info?.name?.toLowerCase().includes(searchText.toLowerCase() ))

        setdisplayRes(filteredBySearch);
      };

      //top Restuarant
        const filteredTopRes=()=>{
            const filteredList=ListOfRes.filter((res)=>res.card.card.info.avgRating>=4.4);
        console.log(filteredList)  

        setdisplayRes(filteredList);
      }
    


      return {
        ListOfRes,
        displayRes,
        filteredSearch,
        filteredTopRes,
    };
}

export default useListOfRes;