import { useState } from "react";
import './CSS/Country.css';

const Country = ({country, visitedCountryList}) => {
    const {name, flags, population, area} = country;
    const myStyle = {
    border: '2px solid skyblue',
    margin: '15px',
    padding: '15px',
    borderRadius: '16px'
    }
    const [visited, setVisited] = useState(false);
    const clickMe = () => {
        setVisited(!visited);
    }
    
    return (
        <div style={myStyle} className={`${visited?'visited':'not-visited'}`}>
            <p>Name: {name?.common}</p>
            <img  src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <button onClick={clickMe}>{visited ? 'Visited': 'Visit'}</button>
            <br></br>
            <button onClick={()=>visitedCountryList(country)}>Mark as Visited</button>
            <br></br>
            <small>
               {
                visited ? 'I have visited':'Not Yet'
               }
            </small>
            
        </div>
    );
};

export default Country;