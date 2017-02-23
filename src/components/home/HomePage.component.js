import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component{
    render() {
        return(
            <div className="jumbotron">
                <h1>React.js</h1>
                <h2>... using Redux, SASS, and Webpack.</h2>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    }
}

export default HomePage;