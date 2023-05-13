import { MainCard } from '../components/MainCard'
import { DestinationsGrid } from '../components/DestinationsGrid'
import { Navbar } from "../components/Navbar"

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className='home-page'>
        <MainCard />
        <DestinationsGrid />
      </div>
    </>
  )
}