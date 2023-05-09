import { differenceInDays } from 'date-fns'

export const getActivities = async(destination, startDate, endDate) => {
    const diff = differenceInDays(endDate, startDate)
    const days = diff + 1
    const api_key = process.env.REACT_APP_RECOMMENDATIONS_KEY
    const url = `https://ai-trip-planner.p.rapidapi.com/?days=${days}&destination=${destination}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': api_key,
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

