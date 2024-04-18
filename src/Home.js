import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import countryData from "./data.json";
import {useDarkMode} from "./DarkModeContext";

function Home() {
  const {isDarkMode} = useDarkMode();

  const [inputData, setInputData] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [nodata, setNoData] = useState("");

  useEffect(() => {
    setFilteredData(countryData);
  }, []);

  const handleInputData = (e) => {
    setInputData(e.target.value);
    filterData(e.target.value);
  };

  const filterData = (inputValue) => {
    const filtered = countryData.filter((country) =>
      country.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    if (filtered.length === 0) {
      setNoData(`${inputData} No Such Country Exists `);
    } else {
      setNoData("");
      setFilteredData(filtered);
    }
  };

  const hRegion = (e) => {
    const selectedRegion = e.target.value;

    if (selectedRegion === "") {
      setFilteredData(countryData);
    } else {
      let filteredByRegion;

      if (selectedRegion === "Africa") {
        filteredByRegion = countryData.filter(
          (country) => country.region === "Africa"
        );
      } else if (selectedRegion === "Americas") {
        filteredByRegion = countryData.filter(
          (country) => country.region === "Americas"
        );
      } else if (selectedRegion === "Asia") {
        filteredByRegion = countryData.filter(
          (country) => country.region === "Asia"
        );
      } else if (selectedRegion === "Europe") {
        filteredByRegion = countryData.filter(
          (country) => country.region === "Europe"
        );
      } else if (selectedRegion === "Oceania") {
        filteredByRegion = countryData.filter(
          (country) => country.region === "Oceania"
        );
      }

      setFilteredData(filteredByRegion);
    }
  };

  const searchBarStyles = {
    backgroundColor: isDarkMode ? "black" : "#FCFCFC",
    color: isDarkMode ? "white" : "black",
  };

  return (
    <>
      <div className="search-container" style={searchBarStyles}>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for a country..."
            className="search-input"
            value={inputData}
            onChange={handleInputData}
            style={{
              backgroundColor: isDarkMode ? "#1b3d40" : "white",
              color: isDarkMode ? "#fff" : "black",
              backgroundImage: isDarkMode
                ? "url(https://png.pngtree.com/png-vector/20220924/ourlarge/pngtree-search-flat-white-color-icon-search-tools-flat-magnify-vector-png-image_19938790.jpg)"
                : "url(https://www.nicepng.com/png/detail/5-55201_search-icon-png-grey.png)",
              border: isDarkMode
                ? "2px solid black"
                : "2px solid hsl(0, 30%, 96%)",
            }}
          />
        </div>

        <div className="filter-box">
          <select
            name="filterByRegion"
            className="filter-by-region"
            style={{
              backgroundColor: isDarkMode ? "#1b3d40" : "white",
              color: isDarkMode ? "#fff" : "black",
              border: isDarkMode
                ? "2px solid black"
                : "2px solid hsl(0, 30%, 96%)",
              backgroundImage: isDarkMode
                ? "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZz0EzgAnF0JfInKMpiIOHp63OGv7U3_rvzsKU1IwpOLfiajBlPiu0uVbw7KrmWeNRses&usqp=CAU)"
                : "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX///8jHyAAAAAhHyAhHR4fHR78/PwEAAAeGRqbm5skHiASDxDv7+/R0dEcFxiQjo9kYmP49/gPCwywrq/d3d00NDQaFRfGxMVxcXEQCQtta2xWVlY5OTm3t7eFhYXh4eFHRUZOTE1dWVpAPT4oJSYSExMvMDBRUVErKSp+fX7X1NXh3+CioqINAAVOIY+lAAAEJUlEQVR4nO3abWOaMBSG4SURQUFUVBQtVWuttVv//98b2tYqSfENBLf7+m7CkXjyEPz1CwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4H9U/wdmyDDsBDKY9wqcoTdPZugMC5whi/ckQyGELx/6Bc3QH0i/JmqhfPIKmiGTt4jElgrdYr7kYRh+zCCiRRkljgLxxYmKWKm9yNnN8D4qYIIj+rK5m1/UZDv3Cdp2bTe+UvJ37hMc04jEHkuOcx5/LJXYqzBo5Dz+cZ1wv0Kl7HmePxVvbquDCt1OjqOfZuIfVqjch2lug08f3P0Ck+H9VW6Dn2rkikMqfG7lNHbrOUyNrdzbt5qeTFeofDfOZejY9VV6bFlkrjDr7vfSz4VqyUYOIashLZWu0JLdHK75TD2pUr+VhFxfPe5aCn3gEm5h4lH/roWQneu+7G5Hais0uYOPOV3zmRq2pVUooqt2jek80Faosuzbb4afYmlpFarly+VB/O3FVfpv0M6ngV2k5fqima7RvziID10/NVZSr7/MaxO6yDT50rXbWLuwL/RkLT1UshG+5BckLtJdBXqJ4qIg3tYLFCpYlbBNHKqPbL1CIUfnXlh3lG6iH+OUeojxqS0NLdVenddSvcm7fgOtAh7KLtIztFThDs75/UwH6ZgrRNMqZ583GQaOXqIvTu+BLbXUB3Cisk6gDN6eQ32hOtGp+1gcaOtcJY8qb4Ve85m8maGlboL4KRrpx5TtQ/2slPO1nyV5Ul9nJwXx+tr4ySvzbREMF6pOuNBN1NZvfw7PKAVomFrqscXmzSLtM+rU5X1zsTS01OVLVsNIorb+EUuWGLWztZx0ct6cbWQ0/WGUPq9IhH6pUTubYeNuCufHjdsQtc+NCjfXXW3ONtJPeD+Er7axiU4qtkukbQK0/pRuCuJVjtrZ2lr3T0q2tTuTRG19lyji/UcBtkG8eVihch8OX61sT7XTJ2oVitrZhqZdw7f3O2TL1g99lS8rFLWz9V+NZxvfu1xsOPRV7mtR75IL4M0DrcKkTX4lFcOptlDXHUPeXHest1Sh7PWmUSZRW1+hSo7vqsCPMgxnG0kQ73ZsQ7OV6+rvEmnmIL54WwSGQ9+qRu1ssa231KYjfT30ONWN2tm0F51mzfC1wlE722/T2UaKUsGi0lE7mzcxHRcfVlj5qJ2tPjY8P+wt0KaQ4/troodMbyO+3UnUztYztNQvln0nUTvbsPZTS/XV3UTtbP3B0tRSm+GgUqfa1/BmpiAeVe1U+xr1J72lyqfqnWpf4zHVUmtl/YGkOH82z4S7n2Pt/U/ZF5S/2HV2FTo5/QOuYlrW10vG0LrbqJ1tOpPh9q/3szuO2kfEE1cGk39yhX6795wNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwI38B19Esw1raLWMAAAAASUVORK5CYII=)",
            }}
            onChange={hRegion}
          >
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>

      <h1
        style={{
          textAlign: "center",
          backgroundColor: isDarkMode ? "#1b3d40" : "white",
          color: isDarkMode ? "#fff" : "black",
        }}
      >
        {nodata}
      </h1>

      <div className="items-container" style={searchBarStyles}>
        {filteredData.map((country) => (
          <Link
            to={`/countryinfo/${country.name}`}
            style={{textDecoration: "none"}}
            key={country.name}
          >
            <div
              className="country"
              key={country.name}
              style={{
                backgroundColor: isDarkMode ? "#1b3d40" : "white",
                color: isDarkMode ? "#fff" : "black",
                boxShadow: isDarkMode
                  ? " 0px 0px 10px 0.5px black"
                  : " 0px 0px 10px 0.5px #E4E4E4",
              }}
            >
              <div className="image">
                <img src={country.flag} alt="" />
              </div>
              <div className="country-info">
                <div className="country-name">
                  <b>{country.name}</b>
                </div>
                <div className="population">
                  <b>Population:</b> {country.population}
                </div>
                <div className="region">
                  <b>Region: </b> {country.region}
                </div>
                <div className="capital">
                  <b>Capital:</b> {country.capital}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Home;
