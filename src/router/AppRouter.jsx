import { Route, Routes } from "react-router-dom"
import { Home } from '../pages/Home'
import { Mytrips } from '../pages/Mytrips'
import { Navbar } from "../volta/components/Navbar"
import { Results } from "../pages/Results"
import { NotFound } from "../pages/NotFound"
import { AuthProvider } from "../helpers/auth"
import { Login } from "../pages/Login"


export const AppRouter = () => {
  return (
    <>
      <AuthProvider >
        <Navbar />
        <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="login" element={<Login />}/>
            <Route path="mytrips" element={<Mytrips />}/>
            <Route path="results" element={<Results />}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
      </AuthProvider>
    </>    
  )
}

