import { Route, Routes } from "react-router-dom"
import { AuthProvider } from "../helpers/auth"
import { Login } from "../auth/pages/Login"
import { Register } from "../auth/pages/Register"
import { Home } from "../volta/pages/Home"
import { Results } from "../volta/pages/Results"
import { NotFound } from "../volta/pages/NotFound"
import { Mytrips } from "../volta/pages/Mytrips"



export const AppRouter = () => {
  return (
    <>
      <AuthProvider >
        <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="register" element={<Register /> } />
            <Route path="login" element={<Login />}/>
            <Route path="mytrips" element={<Mytrips />}/>
            <Route path="results" element={<Results />}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
      </AuthProvider>
    </>    
  )
}

