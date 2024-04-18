import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import CountryInfo from "./CountryInfo";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {DarkModeProvider} from "./DarkModeContext";

function App() {
  return (
    <>
      <DarkModeProvider>
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route
              path="/countryinfo/:country"
              element={<CountryInfo></CountryInfo>}
            ></Route>
          </Routes>
        </Router>
      </DarkModeProvider>
    </>
  );
}

export default App;
