import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getPlanFromDb } from "../../helpers/APIrequests";
import { ActivityCard } from "./ActivityCard";
import "./ActivitiesGridStyles.css";
import { Navbar } from "./Navbar";

export const SavedActivitiesGrid = () => {
  const location = useLocation();
  const [tripId] = useState(location.state.tripId);
  const [destination] = useState(location.state.destination);
  const [activities, setActivities] = useState([]);

  const getPlanDb = async () => {
    const savedActivities = await getPlanFromDb(tripId);
    setActivities(savedActivities);
  };

  useEffect(() => {
    getPlanDb();
  }, []);

  return (
    <>
      <Navbar />
      <div className="saved-activities-page">
        <h1 className="activities-title">Saved Activities in {destination}</h1>
        <div className="activities-row">
          {activities.map((activities) => (
            <ActivityCard
              tripId={tripId}
              key={activities.day}
              {...activities}
            />
          ))}
        </div>
      </div>
    </>
  );
};
