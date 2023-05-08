import { getPopularDestinations } from "../../helpers/getPopularDestinations"; 
import { Card } from "./Card";
import './DestinationsGridStyles.css';

export const DestinationsGrid = () => {
  return (
    <>
      <h1 className="popular-h1">Popular Destinations</h1>
      <div className="row">
        {getPopularDestinations.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};
