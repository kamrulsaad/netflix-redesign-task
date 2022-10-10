import Header from "./Components/Header";
import Home from "./Components/Home";
import {Routes, Route} from 'react-router-dom'
import AllMovies from "./Components/AllMovies";
import MovieDetails from "./Components/MovieDetails";

function App() {
  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <Header></Header>
      <Routes>
        <Route index element={<Home></Home>}></Route>
        <Route path="/movies" element={<AllMovies></AllMovies>}></Route>
        <Route path="/movie/:id" element={<MovieDetails></MovieDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;
