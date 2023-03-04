import './App.css'
import Home from './pages/Routes/Home'
import Perfil from './pages/Routes/Perfil'
import Login from './pages/Routes/Login'
import Register from './pages/Routes/Register'
import Search from './pages/Routes/Search'
import AboutUs from './pages/Routes/AboutUs'
import Post from './pages/Routes/Post'
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'
import ProtectedRoutes from './components/ProtectedRoutes'
import MainLayout from './pages/MainLayout'

function App() {
  return (
    <HashRouter>
      <div className="App">

        <Routes >
        {/* Las rutas que no deban tener Navbar y Footer deberan declararse aca */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />


          <Route element={< MainLayout />}>
            <Route path="/" element={<Home />} />

            <Route element={<ProtectedRoutes />}>
              {/* Las rutas en las que deba aparecer Navbar y Footer iran aca dentro */}
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/search" element={<Search />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/post" element={<Post />} />
              
            </Route>
          </Route>
        </Routes>

      </div>
    </HashRouter >
  )
}

export default App
