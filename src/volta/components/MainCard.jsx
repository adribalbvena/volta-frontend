import "./MainCardStyles.css";
import flight from "../../assets/flight.jpg";
import { AiOutlineArrowRight, AiOutlineCalendar } from "react-icons/ai";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../helpers/auth";

export const MainCard = () => {
  const auth = useAuth();
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/results", { state: { destination, date } });
  };

  return (
    <div className="card">
      <img
        alt="travelImg"
        src={flight}
        className="animate__animated animate__fadeIn big-img"
      />
      <div className="card-text">
        <h1>Our life is just a volta</h1>
      </div>
      {auth.userId && (
        <div className="inner-card">
          <div className="search-item">
            <input
              type="text"
              placeholder="Where are you going?"
              className="search-input"
              onChange={(e) => setDestination(e.target.value)}
            />
            <AiOutlineCalendar className="i-calendar" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="search-text"
            >
              {`${format(date[0].startDate, "dd/MM/yyyy")} - ${format(
                date[0].endDate,
                "dd/MM/yyyy"
              )}`}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="daterange"
              />
            )}
          </div>
          <div>
          <button className="btn-arrow" onClick={handleSearch}>
              <AiOutlineArrowRight className="i-arrow" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
