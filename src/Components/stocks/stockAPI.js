import React, { useState} from 'react';
import {currentDate} from './date';
import Back from '../backButton/back';
import './stockAPI.css';
import Footer from '../footer/footer';

export default function Stock() {
    /*--- API KEY ---*/
    const apikey = 'vEe00Mr4OrJW6dhyfrQXv5_2p9zvuvBv';
    /*--- State Variables ---*/
    const [input, setInput] = useState('');
    const [inputPlaceholder, setInputPlaceholder] = useState(' Enter Stock Here...');
    const [date, setDate] = useState('');
    const [prevInput, setPrevInput] = useState(input);
    const [prevDate, setPrevDate] = useState(date);
    const [info, setInfo] = useState({
        closing: '',
        opening: '',
        high: '',
        low: ''
    });
    let currDate = currentDate();

    /*--- Functions ---*/

    /*--- Updates Input Field (Stock Symbol) --*/
    const updateInput = (e) => {
        setInput(e.target.value.toUpperCase());
        setInputPlaceholder(e.target.value);
    }

    /*--- Updates Date Input ---*/
    const updateDate = (e) => {
            setDate(e.target.value);
            setPrevDate(date);
    }

    /*----- Handles user submit, parsing the data and then checking if data 
            is valid. If so, data is passed into array and rendered. If 
            invalid, user is alerted with error. Also checks if values have
            changed and only fetches data if they have. -----*/
    function Submit() {
        setDate(date);
        setPrevDate(date);
        console.log("Date", date);
        console.log("Prev Date", prevDate);
        if((input !== '' && date !== '')){
            if((prevInput !== input || date !== prevDate)){
                fetch(`https://api.polygon.io/v2/aggs/ticker/${input}/range/1/day/${date}/${date}?adjusted=true&sort=asc&limit=120&apiKey=${apikey}`)
                    .then((response) => { return response.json() })
                    .then(data => {
                        if(data.resultsCount !== 0){
                            setInfo({
                                symbol: data.ticker,
                                high: data['results'][0]['h'],
                                low: data['results'][0]['l'],
                                opening: data['results'][0]['o'],
                                closing: data['results'][0]['c']
                            })
                        } else {
                            alert('Invalid Entry. Either symbol or date is invalid');
                        }
                    });
                setPrevInput(input);
            }
        } else {
            alert('Please enter all fields.');
        }
    }

    /*--- Rendering Component ---*/
    return (
        <div id='content'>
            <div className='header'>
                <h1>Stock API</h1>
                <h3>Enter a Stock Symbol and Date to get the opening, closing,
                    high, and low of that stock for that day.
                </h3>
            </div>
            <div className='main'>
                <div className='inputs'>
                    <input type='text' placeholder={inputPlaceholder} value={input} onChange={updateInput}/>
                    <input type='date' onChange={updateDate} value={date} max={currDate}/>
                    <button onClick={Submit}>Submit</button>
                </div>
                <div className='return'>
                    <h1>Symbol: {input}</h1>
                    <div>High: {info.high}</div>
                    <div>Low: {info.low}</div>
                    <div>Opening: {info.opening}</div>
                    <div>Closing: {info.closing}</div>
                </div>
            </div>
            <Back />
            <Footer />
        </div>
    );
}