import React from 'react'
import './Dashboard.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer';
import { useNavigate } from "react-router-dom";
import newsimageone from '../../Images/newsimageone.jpg'
import newsimagetwo from '../../Images/newsimagetwo.jpg'
import newsimagethree from '../../Images/newsimagethree.jpg'
import newsimagefour from '../../Images/newsimagefour.jpg'
import news from '../../Images/news.png'
import trending from '../../Images/trending.png'
import search from '../../Images/search.png'

/* 
I wanted to create a dashboard landing page to give a nice user experience. Images are displayed and a brief description of 
what the user can do and expect on the site is given. Cards are used to allow users to navigate throughout the site. 
*/

export default function Dashboard() {

    const navigate = useNavigate();

    const navigateSearch = () => {
        navigate('/search', { replace: true });
    };

    const navigateTrending = () => {
        navigate('/trending', { replace: true });
    };

    return [
        <Navbar />,
        <div className='dashboard-container'>
            <div className='dashboard-header'>
                <h1> Instant news from across the globe. Powered by GNews. </h1>
            </div>
            <div className='dashboard-image-container'>
                <img className='dashboard-images' src={newsimageone} alt='' />
                <img className='dashboard-images' src={newsimagetwo} alt='' />
                <img className='dashboard-images' src={newsimagethree} alt='' />
                <img className='dashboard-images' src={newsimagefour} alt='' />
            </div>
            <div className='card-container'>
                <div onClick={navigateSearch} className='component-cards'>
                    <div className='card-header'>
                        <h2> Search for news </h2>
                    </div>
                    <div className='card-main'>
                        <img src={search} alt='' />
                    </div>
                    <div className='card-bottom'>
                        <p> You can use our search feature to find relevant and fitting news for your needs.
                            Simply type in what you want and browse through our optimised search results. </p>
                    </div>
                </div>
                <div onClick={navigateTrending} className='component-cards'>
                    <div className='card-header'>
                        <h2> Find trending articles </h2>
                    </div>
                    <div className='card-main'>
                        <img src={trending} alt='' />
                    </div>
                    <div className='card-bottom'>
                        <p> We have trending articles across a wide variety of different news categories.
                            Find the most customised, popular, relevant and impactful news with ease. </p>
                    </div>
                </div>
                <div onClick={() => { window.open("https://gnews.io/", "_blank").focus(); }} className='component-cards'>
                    <div className='card-header'>
                        <h2> Discover GNews </h2>
                    </div>
                    <div className='card-main'>
                        <img src={news} alt='' />
                    </div>
                    <div className='card-bottom'>
                        <p> We are powered by GNews. GNews allows us to search for current and historic
                            news articles  and collect the current top headlines articles based on Google News rankings. </p>
                    </div>
                </div>
            </div>
        </div>,
        <Footer />
    ]
}
