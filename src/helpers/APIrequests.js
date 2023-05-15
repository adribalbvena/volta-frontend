import { differenceInDays } from "date-fns";

const baseURL = "http://127.0.0.1:8080";

export const getActivities = async (destination, startDate, endDate) => {
  const diff = differenceInDays(endDate, startDate);
  const days = diff + 1;
  const url = `${baseURL}/get_plan?days=${days}&destination=${destination}`;
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  try {
    const resp = await fetch(url, options);
    const { plan } = await resp.json();
    const activities = plan.map((day) => ({
      day: day.day,
      activities: day.activities.map((activity) => ({
        time: activity.time,
        description: activity.description,
      })),
    }));
  
    return activities;

  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getTrips = async () => {
  const url = `${baseURL}/users/trips`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Credentials": "true",
    },
    credentials: "include",
  };
  try {
    const resp = await fetch(url, options);
    const responseData = await resp.json();
    const trips = responseData.map((trip) => ({
      id: trip.id,
      destination: trip.destination,
      start_date: trip.start_date,
      end_date: trip.end_date,
    }));
    return trips;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
