import { getActivities } from '../../helpers/APIrequests';
import './ActivitiesGridStyles.css'
import { ActivityCard } from './ActivityCard';
import { useState, useEffect } from "react";



export const ActivitiesGrid = ({destination, startDate, endDate}) => {
  const [activities, setActivities] = useState([]);
  //const [destinations, setDestinations] = useState([]);

  const getPlan = async () => {
    const newActivities = await getActivities(destination, startDate, endDate);
    setActivities(newActivities);
  };

  //  const getDestinations = async() => {
  //    const newDestinations = await getPlaces(destination)
  //    setDestinations(newDestinations)
  //  }

  useEffect(() => {
    getPlan()

  }, [])
  
  return (
    <>
      <h1 className="activities-title">Activities in {destination}</h1>
      <div className="activities-row">
        {activities.map((activities) => (
          <ActivityCard destination={destination} startDate={startDate} endDate={endDate} key={activities.day} {...activities} />
        ))}
      </div>
    </>
  );
};
