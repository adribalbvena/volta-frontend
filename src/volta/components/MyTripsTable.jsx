import { useEffect, useState } from "react";
import { deleteTrip, getTrips } from "../../helpers/APIrequests"
import './MyTripsTableStyles.css'


export const MyTripsTable = () => {
  const [trips, setTrips] = useState([]);

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
                  <button className="saved-trip-btn">See Activities</button>
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