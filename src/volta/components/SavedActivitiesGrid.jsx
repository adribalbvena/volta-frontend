import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getPlanFromDb } from "../../helpers/APIrequests";
import "./ActivitiesGridStyles.css";
import { Navbar } from "./Navbar";
import { SavedActivitiesCard } from "./SavedActivitiesCard";
import { ErrorCard } from "./ErrorCard";

export const SavedActivitiesGrid = () => {
  const location = useLocation();
  const [tripId] = useState(location.state.tripId);
  const [destination] = useState(location.state.destination);
  const [activities, setActivities] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  const getPlanDb = async () => {
    try {
      const savedActivities = await getPlanFromDb(tripId);
      setActivities(savedActivities);
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  useEffect(() => {
    getPlanDb();
  }, []);

  return (
    <>
      <Navbar />
      <div className="saved-activities-page">
        <h1 className="activities-title">Saved Activities in {destination}</h1>
        {errorMsg && <ErrorCard errorMsg={errorMsg} />}
        <div className="activities-row">
          {activities.map((activities) => (
            <SavedActivitiesCard
              planId={activities.id}
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
