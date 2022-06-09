import React, { useState, useEffect } from "react";
import Back from "../backButton/back";
import Footer from "../footer/footer";
import './bartAPI.css';
import bartMap from '../img/bartMap.png';

export default function Bart() {
    const apikey = 'ZTPD-5KY4-9N7T-DWEI';
    const [input, setInput] = useState('');
    const [bartData, setData] = useState([]);
    const [station, setStation] = useState();
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        setDestinations(
            destinationData()
        )
    }, []);

    const updateInput = (e) => {
        setInput(e.target.value.toUpperCase());
    }

    const destinationData = () => {
        fetch(`http://api.bart.gov/api/stn.aspx?cmd=stns&key=${apikey}&json=y`)
            .then((response) => { return response.json() })
            .then(data => {
                data = data['root']['stations']['station'];
                setDestinations(
                    data
                )
        })
    }

    function Submit() {
            if(input !== ''){
                fetch(`https://api.bart.gov/api/etd.aspx?cmd=etd&orig=${input}&key=${apikey}&json=y`)
                    .then((response) => { return response.json() })
                    .then(data => {
                        if(data){
                            if(data['root'].message === ''){
                                setStation(data['root']['station'][0].name);
                                setData(
                                    data['root']['station'][0]['etd']
                                );
                            } else {
                                alert("Unfortunately there are no trains stopping here right now.");                    
                            }
                        }
                });
            } else {
                alert('Please Select a valid BART station.');
            }
    }
    
    if(destinations !== undefined && destinations.length !== 0){
        return (
            <div>
                <div className="bartHeader">
                    <h1>BART Arrivals</h1>
                    <h3>Enter a BART station to get all BART info about trains passing through station</h3>
                </div>
                <div id="bartContent">
                    <div className="selection">
                        <select name='station' id='station' onChange={updateInput}>Please Select Station
                            <option value='' onChange={updateInput}>Please Select Station</option>
                            {destinations.map((destinations, key) => {
                                return (
                                        <option key={key} value={destinations.abbr} onChange={updateInput}>{destinations.name}</option>
                                )
                            })}
                        </select>
                        <button onClick={Submit}>Submit</button>
                        <h1>Station: {station}</h1>
                    </div>
                    <div className="bartInfo">
                            {bartData.map((bartData, key) => {
                                return (
                                    <div key={key} className='destination'>
                                        <h2>Destination: {bartData.destination}</h2>
                                        
                                            {bartData.estimate.map((estimate, key) => {
                                                return (
                                                    <div key={key}>
                                                        <div className="arrival">Arriving in {estimate.minutes} minutes.</div>
                                                    </div>
                                                )
                                            })}
                                   
                                    </div>
                                )
                            })}
                    </div>
                    <div className="bartMap">
                        SERVICE MAP
                        <div className="bartMapContainer">
                            
                            <img src={bartMap} alt='bartMap'/> 
                        </div>
                    </div>
                     <p>Data and Map Provided By ©Bart </p>
                </div>
                <Back />
                <Footer />
            </div>
        );
    }
}