import { format } from 'date-fns'
import { addPlan, addTrip } from "../../helpers/APIrequests";
import { useAuth } from "../../helpers/auth";
import "./ActivityCardStyles.css";
import { MdCheckBox, MdBookmark, MdBookmarkBorder } from 'react-icons/md'
import { useState } from 'react';

export const ActivityCard = ({destination, startDate, endDate, day, activities }) => {
  const auth = useAuth()
  const [isSaved, setIsSaved] = useState(false)

  const handleOnSave = async() => {
    const trip = await addTrip(destination, format(startDate, 'dd/MM/yyyy'), format(endDate, 'dd/MM/yyyy')) // we need to format the dates bc if not, db doesnt recognize it
    console.log(trip)

    const tripId = trip.id
    
    const planData = {
      day: day,
      activities: activities,
    };

    console.log(planData)
    const plan = await addPlan(tripId, planData);
    console.log(plan)
  }

  return (
    <>
      <div className="animate__animated animate__fadeIn activity-container">
        {auth.userId && (
          <MdBookmarkBorder className="i-bookmark" onClick={handleOnSave}/>
        )}
        <h2 className="activity-day">Day {day}</h2>
        <ul className="activity-list">
          {activities.map(({ time, description }) => (
            <div key={time} className="activities-list">
              <h3>{time}</h3>
              <p><MdCheckBox className="i-check"/>{description}</p>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};
