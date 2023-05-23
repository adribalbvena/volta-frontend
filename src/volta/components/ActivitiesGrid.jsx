import { addTrip, getActivities } from '../../helpers/APIrequests';
import './ActivitiesGridStyles.css'
import { ActivityCard } from './ActivityCard';
import { useState, useEffect } from "react";
import { format } from 'date-fns'
import { useAuth } from '../../helpers/auth';
import { ErrorCard } from './ErrorCard';



export const ActivitiesGrid = ({destination, startDate, endDate}) => {
  const [activities, setActivities] = useState([]);
  const [tripId, setTripId] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  const auth = useAuth()


  const getPlan = async () => {
    try {
      const newActivities = await getActivities(destination, startDate, endDate);
      setActivities(newActivities);
  
      if (newActivities.length > 0 && auth.userId) {
        const trip = await addTrip(destination, format(startDate, 'dd/MM/yyyy'), format(endDate, 'dd/MM/yyyy'));
        setTripId(trip.id);
      }
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  useEffect(() => {
    getPlan()

  }, [])
  
  return (
    <>
      <h1 className="activities-title">Activities in {destination}</h1>
      {errorMsg && (
        <ErrorCard errorMsg={errorMsg}/>
      )}
      <div className="activities-row">
        {activities.map((activities) => (
          <ActivityCard 
            tripId = {tripId} 
            key={activities.day} 
            {...activities} />
        ))}
      </div>
    </>
  );
};
