import { addPlan, deletePlan } from "../../helpers/APIrequests";
import { useAuth } from "../../helpers/auth";
import "./ActivityCardStyles.css";
import { MdCheckBox, MdBookmark, MdBookmarkBorder } from 'react-icons/md'
import { useState } from 'react';

export const ActivityCard = ({tripId, day, activities }) => {
  const auth = useAuth()
  const [isMarked, setIsMarked] = useState(false)

  const handleOnSave = async() => {
    if (tripId != null) {
      const planData = {
        day: day,
        activities: activities,
      };
  
      try {
        if (!isMarked) {
          await addPlan(tripId, planData); 
          setIsMarked(true);
        }
      } catch (error) {
        console.error(error);
      }
    }
    }

    const getButtonIcon = () => {
      if (isMarked) {
        return null
      } else {
        return <MdBookmarkBorder className="i-bookmark" />;
      }
    }

  return (
    <>
      <div className="animate__animated animate__fadeIn activity-container">
        {auth.userId && (
          <div onClick={handleOnSave}>
            {getButtonIcon()}
          </div>
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
