import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";

const ResMenu=()=>{

    const {resId}=useParams();

    const ResInfo=useResMenu(resId);


if (ResInfo===null) return <Shimmer />;  //either use this or use || [] in order to avoid undefined error while fetching 

//dynamic API extraction which works for all nested structure
const resCard=ResInfo?.cards?.find((card)=>card?.card?.card?.info)?.card?.card?.info ;
const deliveryInfo=resCard?.sla;
const menuItems=ResInfo?.cards?.find((item)=>item?.groupedCard?.cardGroupMap?.REGULAR)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find((card)=>card?.card?.card?.itemCards)?.card?.card?.itemCards ||  [];


//normal API extraction 
// const {name,avgRating ,totalRatingsString,costForTwoMessage,cuisines,areaName}=ResInfo?.cards[2]?.card?.card?.info;
// const {minDeliveryTime,maxDeliveryTime}=ResInfo?.cards[2]?.card?.card?.info?.sla ;
// const {itemCards}=ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};

return (
    <div className="resmenu">
        <h1>{resCard?.name}</h1>
        <h2>{resCard?.avgRating} ({resCard.totalRatingsString}) </h2>
        <ul>
            <li>{(resCard?.cuisines || []).join(",")}</li>
            <li>Outlet : {resCard?.areaName}</li>
            <li>{deliveryInfo?.minDeliveryTime}-{deliveryInfo?.maxDeliveryTime} mins</li>
            <p  >{menuItems.map((item)=>(
                <li key={item.card.info.id}>{item.card.info.name}- <b> {item.card.info.price/100}</b></li>
        ))} 
        </p>
        </ul>
    </div>
);
}


export default ResMenu;