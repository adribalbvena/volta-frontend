import { addTrip, getActivities } from '../../helpers/APIrequests';
import './ActivitiesGridStyles.css'
import { ActivityCard } from './ActivityCard';
import { useState, useEffect } from "react";
import { format } from 'date-fns'



export const ActivitiesGrid = ({destination, startDate, endDate}) => {
  const [activities, setActivities] = useState([]);
  const [tripId, setTripId] = useState(null)

  //const [destinations, setDestinations] = useState([]);

  const getPlan = async () => {
    const newActivities = await getActivities(destination, startDate, endDate);
    setActivities(newActivities);

    if (activities) {
      const trip = await addTrip(destination, format(startDate, 'dd/MM/yyyy'), format(endDate, 'dd/MM/yyyy')) // we need to format the dates bc if not, db doesnt recognize it
      console.log(trip)
      setTripId(trip.id)
    }
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
          <ActivityCard tripId = {tripId} key={activities.day} {...activities} />
        ))}
      </div>
    </>
  );
};
