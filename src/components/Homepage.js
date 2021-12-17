import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const Home = () => {
    const { url } = useRouteMatch();

    return (
        <div className='homePage'>
            <h1>Pizza Order Form!</h1>
            <Link to = {`${url}pizza`}><button id='order-pizza'>Order Pizza!</button></Link>
        </div>
    )
}

export default Home;