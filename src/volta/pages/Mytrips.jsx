import { MyTripsTable } from "../components/MyTripsTable"
import { Navbar } from "../components/Navbar"

export const Mytrips = () => {
  return (
    <>
      <Navbar />
      <div className="mytrips-page">
         <MyTripsTable />
      </div>
    </>
  )
}
