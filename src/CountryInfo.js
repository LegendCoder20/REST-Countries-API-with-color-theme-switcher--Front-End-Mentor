import {useEffect} from "react";
import countryData from "./data.json";
import {useParams, Link} from "react-router-dom";
import {useDarkMode} from "./DarkModeContext";

function CountryInfo() {
  const {country} = useParams();
  const decodeCountry = decodeURIComponent(country);
  console.log(decodeCountry);

  const {isDarkMode} = useDarkMode();

  const foundCountry = countryData.find((e) => decodeCountry === e.name);
  // console.log(foundCountry);

  if (!foundCountry) {
    return <p> Data Not Found </p>;
  }
  const currencies = foundCountry.currencies.map((currency) => currency.name);
  // console.log(currencies);

  const languages = foundCountry.languages.map((language) => language.name);
  // console.log(languages);

  const borderCountries =
    foundCountry.borders && foundCountry.borders.length > 0
      ? countryData
          .filter((c) => foundCountry.borders.includes(c.alpha3Code))
          .slice(0, 3)
      : [];

  return (
    <>
      <div
        className="main-info-container"
        style={{
          backgroundColor: isDarkMode ? "hsl(207, 26%, 17%)" : "white",
          color: isDarkMode ? "#ffffffde" : "black",
        }}
      >
        <div
          id="back-button"
          className={isDarkMode ? "back-button-dark" : "back-button-light"}
        >
          <Link to="/">
            <button>← Back</button>
          </Link>
        </div>

        <div className="country-info-container">
          <div className="country-flag">
            <img src={foundCountry.flags.png} alt="" />
          </div>
          <div className="country-detailed-info">
            <div className="country-main-name">
              <h1>{foundCountry.name} </h1>
            </div>
            <div className="specific-country-info">
              <div className="country-primary-info">
                <p>
                  <b>Native Name: </b> {foundCountry.nativeName}
                </p>
                <p>
                  <b>Population: </b>
                  {foundCountry.population}
                </p>
                <p>
                  <b>Region: </b>
                  {foundCountry.region}
                </p>
                <p>
                  <b>Sub Region: </b>
                  {foundCountry.subregion}
                </p>
                <p>
                  <b>Capital: </b>
                  {foundCountry.capital}
                </p>
              </div>
              <div className="country-secondary-info">
                <p>
                  <b>Top Level Domain: </b>
                  {foundCountry.topLevelDomain}
                </p>
                <p>
                  <b>Currencies: </b>
                  {currencies}
                </p>
                <p>
                  <b>Languages: </b>
                  {languages.join(", ")}
                </p>
              </div>
            </div>

            <div className="border-countries">
              <div className="border">
                <b id="border-country">Border Countries: </b>
              </div>
              <p>
                {borderCountries.length === 0 ? (
                  <div
                    className="border-countries-names"
                    style={{
                      backgroundColor: isDarkMode
                        ? "hsl(209, 23%, 22%)"
                        : "white",
                      border: isDarkMode
                        ? "2px solid hsl(209, 23%, 22%)"
                        : "2px solid hsl(0, 30%, 96%)",
                      boxShadow: isDarkMode
                        ? "0px 0px 10px 0.5px black"
                        : "0px 0px 5px 0.5px hsl(0, 5%, 88%)",
                    }}
                  >
                    No Border
                  </div>
                ) : (
                  borderCountries.map((c, index) => (
                    <div
                      className="border-countries-names"
                      style={{
                        backgroundColor: isDarkMode
                          ? "hsl(209, 23%, 22%)"
                          : "white",
                        border: isDarkMode
                          ? "2px solid hsl(209, 23%, 22%)"
                          : "2px solid hsl(0, 30%, 96%)",
                        boxShadow: isDarkMode
                          ? "0px 0px 10px 0.5px black"
                          : "0px 0px 5px 0.5px hsl(0, 5%, 88%)",
                      }}
                      key={index}
                    >
                      {c.name}
                    </div>
                  ))
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryInfo;
