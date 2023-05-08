import { differenceInDays } from 'date-fns'

export const getActivities = async(destination, startDate, endDate) => {
    const diff = differenceInDays(endDate, startDate)
    const url = `https://ai-trip-planner.p.rapidapi.com/?days=${diff}&destination=${destination}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4e5c5cb8d8msh9d1b9beebcf6c74p129864jsn70b0455404fb',
            'X-RapidAPI-Host': 'ai-trip-planner.p.rapidapi.com'
        }
    };
    
    const resp = await fetch(url, options);
    const { plan } = await resp.json();
    const activities = plan.map(day => ({
        day: day.day,
        activities: day.activities.map(activity => ({
          time: activity.time,
          description: activity.description
        }))
      }));
     
    return activities;

}

