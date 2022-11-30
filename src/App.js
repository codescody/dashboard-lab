import './App.css'
import Sidebar from "./components/Sidebar"
import Reviews from "./components/Reviews"
import Rating from "./components/Rating"
import Analysis from "./components/Analysis"
import Traffic from "./components/Traffic"

function App() {
  return (
    <div className="dashboard">
      <Sidebar/>
      <Reviews/>
      <Rating/>
      <Analysis/>
      <Traffic/>
    </div>
  )
}

export default App