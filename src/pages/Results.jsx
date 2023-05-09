import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ActivitiesGrid } from "../volta/components/ActivitiesGrid";


export const Results = () => {
  const location = useLocation();
  const [destination] = useState(location.state.destination);
  const [startDate] = useState(location.state.date[0].startDate);
  const [endDate] = useState(location.state.date[0].endDate);



  return (
    <>
        <ActivitiesGrid destination={destination} startDate={startDate} endDate={endDate}/>
    </>
  );
};
