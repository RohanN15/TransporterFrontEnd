import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function SearchHistory(){
    const [history, setHistory] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/getRoute/etas')
        .then((res) => res.json())
        .then((res) => setHistory(res['route']));
    }, []);
    return (
        <div id="SearchHistory">
            <h2 id="h2">History</h2>
            <div id="historyDisplay">
                {history.map((route) => (
                    <p key={route}>{route}</p>
                ))}
        </div>
        </div>
        
    );
    
}

export default SearchHistory;