import { useEffect, useState } from "react";
import Country from "./Country";
import './CSS/Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [countryVisited, setCountryVisited] = useState ([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[]);
    const visitedCountryList = country => {
        console.log('Working');
        console.log(country);
        const arr = [...countryVisited, country];
        setCountryVisited(arr);
    }

    return (
        <div>
            
            
            <h3>Countries: {countries.length}</h3>
            <div>
            <h3>Visited: {countryVisited.length}</h3>
            <ul>
                {
                    countryVisited.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </ul>
            </div>
            <div className="country-div">
            {
                countries.map(country=>
                <Country visitedCountryList={visitedCountryList} key={country.cca3} country={country}> </Country>)
            }

            </div>
            
        </div>
    );
};

export default Countries;