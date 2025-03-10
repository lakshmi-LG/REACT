import { CDN_URL } from "../utils/constants";

const ResCard=(props)=>{
    const  {resData}= props;
    const { cloudinaryImageId,name,avgRating,costForTwo,cuisines=[]}=resData?.card?.card?.info || {} ;
     return (
             <div className="res-card" style={{
                 backgroundColor:"#f0f0f0"
             }}>
             <img alt="KFC" src={CDN_URL+ cloudinaryImageId} className="res-logo"></img>
             <h3>{name}</h3><br />
             <h4>{avgRating}</h4>
             <h4>{costForTwo}</h4>
             <h4>{cuisines.join(", ")}</h4>
             </div>
 
     )
 }



 export default ResCard ;