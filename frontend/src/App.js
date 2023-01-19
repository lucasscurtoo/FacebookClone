import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import ProtectedRoutes from "./routes/protectedRoutes"
import "./App.css"

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/profile" element={<Profile />} exact />
        <Route path="/" element={<Home />} exact />
      </Route>
      <Route path="/login" element={<Login />} exact />
    </Routes>
  )
}

export default App
