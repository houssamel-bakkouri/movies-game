import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";
import Quiz from "./pages/Quiz";
import GameMode from "./pages/GameMode";
import ScoreTable from './pages/ScoreTable';
import NavBar from './components/NavBar/NavBar';
function App() {
    const [filters, setFilters] = useState("hello")

    useEffect(() => {
      //localStorage.setItem('scores', JSON.stringify([]))
    }, [])
    return (
      <>
      
         <BrowserRouter>
         <NavBar/>
         <div className="App">
            <Routes>
                <Route exact path="Quiz" element={ <Quiz filters={filters} />} /> 
                <Route exact path="GameMode" element={ <GameMode setFilters={setFilters}  />} /> 
                <Route exact path="Scores" element={ <ScoreTable/>} /> 
                <Route exact path="/" element={ <MainPage   />} /> 
                <Route path="*" element={<ErrorPage  />} />
            </Routes>
         </div>
         </BrowserRouter>
      </>
    );
  }

  export default App;