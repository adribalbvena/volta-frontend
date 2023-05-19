import { useState } from "react";
import { deletePlan } from "../../helpers/APIrequests";
import "./ActivityCardStyles.css";
import { MdCheckBox, MdOutlineDelete } from 'react-icons/md'
import { useAuth } from "../../helpers/auth";


export const SavedActivitiesCard = ({planId, tripId, day, activities }) => {
    const auth = useAuth()
    const [isMarked, setIsMarked] = useState(true)
  
    const handleOnDelete = async() => {
      if (tripId != null) { 
        try {
          if (isMarked) {
            await deletePlan(tripId, planId);
            setIsMarked(false);
          } 
        } catch (error) {
          console.error(error);
        }
      }
      }
  
  
    return (
        <>
        {isMarked && ( 
          <div className="animate__animated animate__fadeIn activity-container">
            {auth.userId && (
              <div onClick={handleOnDelete}>
                <MdOutlineDelete className="i-delete"/>
              </div>
            )}
            <h2 className="activity-day">Day {day}</h2>
            <ul className="activity-list">
              {activities.map(({ time, description }) => (
                <div key={time} className="activities-list">
                  <h3>{time}</h3>
                  <p><MdCheckBox className="i-check" />{description}</p>
                </div>
              ))}
            </ul>
          </div>
        )}
      </>
    );
  };
