import {React} from 'react'
import './MainPage.css'
function MainPage(){
    return(
        <div id='MainPage'>
            
            <h2 id="h2">Transporter</h2>
            <h3 id='h3'>About</h3>
            <p>This webpage is meant to show users without their own transportation the best way to get to where they want to go. The website will leverage public transit systems  to find the optimal transport based on time. This is a developing site. Eventually the plan is to include more transportation systems (Uber, Lyft, etc). Credits to Google's API for making this</p>
            <p><b>Warning: </b>Since this site is still developing, you will need to manually enter the complete address - address, city, state, zip code</p>
            <p><b>Click Route Finder in the menu to start your search</b></p>
            <a href="https://developers.google.com/maps/documentation/directions" target = "_blank">
                <button id="mapsbutton">Google Directions API info</button>
            </a>
            <br/>
            <br/>
            <br/>
            <br/>
            
            <div id="transport logos">
                <img width = "300" src = "https://1000logos.net/wp-content/uploads/2020/09/Amtrak-Logo.png" id="amtrak"/>
                <img width = "150" src = "https://upload.wikimedia.org/wikipedia/commons/0/0a/WMATA_Metro_Logo_small.svg" id = "metro"/>
            </div>
        </div>
    );
}
export default MainPage;