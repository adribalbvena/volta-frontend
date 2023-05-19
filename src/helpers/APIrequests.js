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

export const addTrip = async (destination, start_date, end_date) => {
  const url = `${baseURL}/users/trips`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Credentials": "true",
    },
    body: JSON.stringify({ destination, start_date, end_date }),
    credentials: "include",
  };
  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const trip = await response.json();
      return trip;
    } else {
      const error = await response.json();
      throw new Error(error.message);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteTrip = async (tripId) => {
  const url = `${baseURL}/user/trips/${tripId}`;
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Credentials": "true",
    },
    credentials: "include"
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      const error = await response.json();
      throw new Error(error.message);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const addPlan = async (tripId, planData) => {
  const url = `${baseURL}/trips/${tripId}/plans`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Credentials": "true",
    },
    body: JSON.stringify(planData),
    credentials: "include"
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const responseData = await response.json();
      console.log("Plan added successfully:", responseData);
      return responseData;
    } else {
      throw new Error("Failed to add plan");
    }
  } catch (error) {
    console.error("Failed to add plan:", error);
    throw error;
  }
};

export const getPlanFromDb = async(tripId) => {
  const url = `${baseURL}/trips/${tripId}/plan`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Credentials": "true",
    },
    credentials: "include"
  };
  try {
    const resp = await fetch(url, options);
    const { plan } = await resp.json();
    const activities = plan.map((plan) => ({
      id: plan.id,
      day: plan.day,
      activities: plan.activities.map((activity) => ({
        time: activity.time,
        description: activity.description,
      })),
    }));
  
    return activities;

  } catch (error) {
    console.error(error);
    throw error;
  }

}

export const deletePlan = async (tripId, planId) => {
  const url = `${baseURL}/trips/${tripId}/plans/${planId}`;
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Credentials": "true",
    },
    credentials: "include"
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      const error = await response.json();
      throw new Error(error.message);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}