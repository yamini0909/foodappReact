import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const Menupage = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  });

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6029419&lng=77.332877&restaurantId=${resId}`
        
      );
      console.log("This is response ", response)
      if (!response.ok) {
        throw new Error("Failed to fetch menu data");
      }
      const json = await response.json();
      console.log(json);
      setResInfo(json.data);
    } catch (error) {
      console.error(error);
    }
    console.log("This is resID", resId)
  };

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines = [], city, avgRating, totalRatingsString, costForTwoMessage } =
    resInfo?.cards?.[0]?.card?.card?.info ?? {};

  const { itemCards } = resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card ?? {};

  console.log("ItemCard", itemCards);

  return (
    <div className="menu-card-cnt ">
      <div className="heading-rating flex">
        <div className="heading">
          <h1 className="res-name">
            {name}
          </h1>
          <h4 className="sub-heading">
            {cuisines.join(", ")}
          </h4>
          <div className="location">
            {city}
          </div>
        </div>
        <div className="rating-cnt">
          <div className="rating">
            {avgRating} Stars
          </div>
          <div className="totalRatingsString">
            {totalRatingsString}
          </div>
        </div>
      </div>

      <div className="deals flex">
        <div className="del-time">
          {resInfo?.cards[0]?.card?.card?.info?.sla?.deliveryTime}mins
        </div>
        <div className="cost-of-two">
          {costForTwoMessage}
        </div>
      </div>
      <div className="menu-cnt">
        <div className="menu-heading">Menu</div>
        <div className="menu">
          <ul>
          {itemCards && itemCards.map((item) => (
      <li key={item.card.info.id}>{item.card.info.name}</li>
    ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menupage;
