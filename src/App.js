import Header from "./Components/Header";
import Home from "./Components/Home";
import {Routes, Route} from 'react-router-dom'
import AllMovies from "./Components/AllMovies";

function App() {
  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <Header></Header>
      <Routes>
        <Route index element={<Home></Home>}></Route>
        <Route path="/movies" element={<AllMovies></AllMovies>}></Route>
      </Routes>
    </div>
  );
}

export default App;
