import { useEffect, useState } from "react";
import { deleteTrip, getTrips } from "../../helpers/APIrequests"
import { useNavigate } from 'react-router-dom'
import './MyTripsTableStyles.css'


export const MyTripsTable = () => {
  const [trips, setTrips] = useState([]);
  const navigate = useNavigate();

  const getMyTrips = async () => {
    const newTrips = await getTrips();
    setTrips(newTrips);
  };

  useEffect(() => {
    getMyTrips()

  }, [])

  const handleOnDelete = async(tripId) => {
    await deleteTrip(tripId)
    getMyTrips()
  }
  
  const handleSeeActivities = (tripId, destination) => {
    navigate('/savedActivities', { state: {tripId, destination} })

  }

  return (
    <>
      <h1>My Trips</h1>
      {/*here put a conditional to check if there are trips and if arent, show 'you dont have trips already..' */}
      <div className="trips-container">
        <table className="animate__animated animate__fadeInLeft trips-table">
          <thead className="table-head-trips">
            <tr>
              <th>Destination</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {trips.map((trip) => (
              <tr key={trip.id}>
                <td className="trip-row">{trip.destination}</td>
                <td className="trip-row">{trip.start_date}</td>
                <td className="trip-row">{trip.end_date}</td> 
                <td className="trip-row">
                  <button className="saved-trip-btn" onClick={() => handleSeeActivities(trip.id, trip.destination)}>See Activities</button>
                  <button 
                    className="delete-trip-btn"
                    onClick={() => handleOnDelete(trip.id)}>Delete</button>              
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};