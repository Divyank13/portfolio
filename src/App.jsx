import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "./components/navBar/navbar"
import { HomePage } from "./pages/homePage/HomePage"
import { Footer } from "./components/footer/footer"
import { ProjectPage } from "./pages/projectsPage/ProjectPage"

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="*" element={<Navigate to='/' />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
