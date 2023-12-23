import {React} from 'react'
import { useState } from 'react';
import { useEffect } from "react";
import './RouteFinder.css'
function RouteFinder() {
    const [start, setStart] = useState('');
    const [destination, setDestination] = useState('')
    const [route, setRoute] = useState([]);
    const handleTransit = (e) => {
        e.preventDefault();
        fetch('http://127.0.0.1:8000/getRoute/add_eta', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                start: start,
                end: destination,
            }), 
        })
        .then(response => {
            if (response.ok) {
                console.log('Review submitted successfully');
                return fetch('http://127.0.0.1:8000/getRoute/etas');
            } else {
                console.error('Failed to submit review');
                throw new Error('Failed to submit review');
            }
        })
        .then(res => res.json())
        .then(res => {
            setRoute(res['eta']);
            console.log('Updated ETAs fetched successfully');
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };
    const handleWalk = (e) => {
        e.preventDefault();
        fetch('http://127.0.0.1:8000/getRoute/add_walk', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                start: start,
                end: destination,
            }), 
        })
        .then(response => {
            if (response.ok) {
                console.log('Review submitted successfully');
                return fetch('http://127.0.0.1:8000/getRoute/etas');
            } else {
                console.error('Failed to submit review');
                throw new Error('Failed to submit review');
            }
        })
        .then(res => res.json())
        .then(res => {
            setRoute(res['eta']);
            console.log('Updated ETAs fetched successfully');
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };
    const handleBike = (e) => {
        e.preventDefault();
        fetch('http://127.0.0.1:8000/getRoute/add_bike', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                start: start,
                end: destination,
            }), 
        })
        .then(response => {
            if (response.ok) {
                console.log('Review submitted successfully');
                return fetch('http://127.0.0.1:8000/getRoute/etas');
            } else {
                console.error('Failed to submit review');
                throw new Error('Failed to submit review');
            }
        })
        .then(res => res.json())
        .then(res => {
            setRoute(res['eta']);
            console.log('Updated ETAs fetched successfully');
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };
    
    useEffect(() => {
        fetch('http://127.0.0.1:8000/getRoute/etas')
        .then((res) => res.json())
        .then((res) => setRoute(res['eta']));
    }, []);
    return (
        <div id='RouteFinder'>
            <h2 id="h2">Transporter</h2>
            <h3 id="h3">Route Finder</h3>
            <br/>
            <div className="input-container">
                <label id="start" htmlFor="Start">Start:</label>
                <input 
                    value={start}
                    onChange={e => setStart(e.target.value)}
                    placeholder='Search Address'
                /> 
                <br/>
                <label id="Destination" htmlFor="Address">Destination:</label>
                <input
                    value={destination} 
                    onChange={e => setDestination(e.target.value)} 
                    placeholder='Search Address' 
                />
            </div>
            <br/>
            <div class = "buttons">
                <button id="transit" onClick={handleTransit}>Transit</button>
                <button id="walk" onClick={handleWalk}>Walk</button>
                <button id="bike" onClick={handleBike}>Bicycle</button>

            </div>
            <br/>
            <br/>
            <div id="routeDisplay">
                {route.length > 0 ? (
                    <p>ETA: {route[route.length - 1]}</p>                    
                ) : (
                    <p>No routes available.</p>
                )}
                
            </div>
            
        </div>
    );
}
export default RouteFinder;