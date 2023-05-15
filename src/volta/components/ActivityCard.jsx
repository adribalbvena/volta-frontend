import { useAuth } from "../../helpers/auth";
import "./ActivityCardStyles.css";
import { MdCheckBox, MdBookmark, MdBookmarkBorder } from 'react-icons/md'

export const ActivityCard = ({ day, activities }) => {
  const auth = useAuth()
  return (
    <>
      <div className="animate__animated animate__fadeIn activity-container">
        {auth.userId && (
          <MdBookmarkBorder className="i-bookmark"/>
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
