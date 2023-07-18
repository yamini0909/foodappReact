import React, { useEffect, useState } from 'react';
// import ResList from '../../App';
import ResCard from '../ResCard/ResCard';
import './Body.css';
import Shimmer from '../Shimmer';
import {Link} from "react-router-dom"

const Body = () => {
  
  const [resData, setResData] = useState([]);
  const [newFilteredRestaurants, SetNewFilteredRestaurants] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6029419&lng=77.332877&page_type=DESKTOP_WEB_LISTING"
    )
    const json = await data.json();
    console.log("The data is here" ,json)
    setResData(json?.data?.cards[2]?.data?.data?.cards);
    SetNewFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }


  const filterTopRatedRestaurants = () => {
    const filteredList = resData.filter((res) => res.data.avgRating > 4);
    SetNewFilteredRestaurants(filteredList);
  };
 

  if(resData.length === 0){
    return <Shimmer/>
  }
  return (
    <>
      <div className="search">
        <div className='search-cnt'>
          <input className='search-bar' placeholder='search' value = {searchText} onChange={(e)=>{
            setSearchText(e.target.value)
          }}/>
          <button className='search-btn' onClick={()=>{
            const filteredRestaurants = resData.filter(
            (res)=> res.data.name.toLowerCase().includes(searchText.toLowerCase())
            
          )
          SetNewFilteredRestaurants(filteredRestaurants)
          }}>Search</button>
        </div>
        <button onClick={filterTopRatedRestaurants}>Top rated Restaurants</button>
      </div>
      <div className="res-container">
        {newFilteredRestaurants.map((res, index) => (
         <Link className='link-styling' to={"/menu/" + res.data.id}  key={res.data.id}><ResCard  data={res} /></Link> 
        ))}
      </div>
    </>
  );
};

export default Body;
