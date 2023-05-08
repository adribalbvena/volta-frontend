import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getWeather } from "../helpers/getWeather";
import { ActivityCard } from "../volta/components/ActivityCard";
import { getActivities } from "../helpers/getActivities";
import './ResultStyles.css'
import { getPlaces } from "../helpers/getPlaces";
import { PlacesCard } from "../volta/components/PlacesCard";


export const Results = () => {
  const location = useLocation();
  const [destination] = useState(location.state.destination);
  const [startDate] = useState(location.state.date[0].startDate);
  const [endDate] = useState(location.state.date[0].endDate);
  const [activities, setActivities] = useState([])
  const [destinations, setDestinations] = useState([])


  const getPlan = async() => {
    const newActivities = await getActivities(destination, startDate, endDate)
    setActivities(newActivities)
  }
  
//  const getDestinations = async() => {
//    const newDestinations = await getPlaces(destination)
//    setDestinations(newDestinations)
//  }

  useEffect(() => {
    getPlan()
    //getDestinations()
  }, [])


  return (
    <>
    <h1 className="activities-title">Activities</h1>
    <div className="activities-row">
    {
        activities.map( (activities) => (
            <ActivityCard key={activities.day} {...activities}/>
        ) )
    }
    </div> 

    </>
  );
};
