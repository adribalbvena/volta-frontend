import { format } from 'date-fns'


export const getWeather = async(destination, date) => {
    const url =
    `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${destination}&days=3&dt=${format(date, 'yyyy/MM/dd')}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4e5c5cb8d8msh9d1b9beebcf6c74p129864jsn70b0455404fb",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };
    const resp = await fetch(url, options);
    const { data } = await resp.json();

    const weather = data.map( wea => ({
        name: wea.location.name,
        country: wea.location.country,
        date: wea.forecast.forecastday[0].date,
        temp: wea.forecast.forecastday[0].day.avgtemp_f,
        condition: wea.forecast.forecastday[0].day.condition.text,
        url: wea.forecast.forecastday[0].day.condition.icon,
    }));
          
        //const result = await response.json();

        //console.log(result);


    console.log(weather)
    return weather;

    // `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${ destination }&days=${ days }&dt=${format(location.state.date[0].startDate, 'yyyy/MM/dd')}`;

  };