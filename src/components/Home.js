import React from "react";
import {Link} from 'react-router-dom';

function Home(props) {

    return(
        <div className="home">
            <header>
                <nav>
                    <h1>Lambda Eats</h1>
                    <Link to='/'> Home </Link> <br/> <br/>
                    <Link to='/pizza'> 
                        <button className="button">Order pizza</button>  
                     </Link> <br/> <br/>
                </nav>
            </header>
            <div className="home-content">
                <img src="https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg"/>
                
            </div>
        </div>
    )
}

export default Home;

