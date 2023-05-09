import { Route, Routes } from "react-router-dom"
import { Home } from '../pages/Home'
import { Mytrips } from '../pages/Mytrips'
import { Navbar } from "../volta/components/Navbar"
import { Results } from "../pages/Results"
import { NotFound } from "../pages/NotFound"


export const AppRouter = () => {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="mytrips" element={<Mytrips />}/>
            <Route path="results" element={<Results />}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    </>    
  )
}

