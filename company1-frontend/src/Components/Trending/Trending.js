import React, { useState, useEffect } from 'react'
import './Trending.css'
import NewsCard from '../NewsCard/NewsCard'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
// import { dummydata } from '../../data'

const APIKEY = process.env.REACT_APP_APIKEY

/* 
This component allows the user to search for specific trending news articles. Using the GNews API documentation, I've also 
implemented functionality that lets the user choose a country, language and category for the articles they want to be retuned. 
*/

export default function Trending() {
    const [language, setLanguage] = useState('en')
    const [country, setCountry] = useState('us')
    const [category, setCategory] = useState('general')
    const [articles, setArticles] = useState([])

    // useEffect calling the API and returning some of the 'general' articles so something is displayed on page load 
    useEffect(() => {
        async function getExampleArticles() {
            const examples = await fetch(`https://gnews.io/api/v4/search?q=example&apikey=${APIKEY}&lang=en&country=us&max=10`);
            const data = await examples.json();
            console.log(data)
            setArticles(data.articles)
        }
        getExampleArticles();
    }, [])

    // Category preference, language preference and country preference are plugges into the url for the API call
    async function getTrendingArticles() {
        const examples = await fetch(`https://gnews.io/api/v4/top-headlines?category=${category}&lang=${language}&country=${country}&max=10&apikey=${APIKEY}`);
        const data = await examples.json();
        setArticles(data.articles)
    }

    // Function that updates the state of the language based on what is chosen in the language dropdown
    function chooseLanguage(e) {
        if (e.target.value === 'en') {
            setLanguage('en')
        } if (e.target.value === 'fr') {
            setLanguage('fr')
        } if (e.target.value === 'de') {
            setLanguage('de')
        } if (e.target.value === 'es') {
            setLanguage('es')
        } if (e.target.value === 'it') {
            setLanguage('it')
        }
    }

    // Function that updates the state of the country based on what is chosen in the country dropdown
    function chooseCountry(e) {
        if (e.target.value === 'gb') {
            setCountry('gb')
        } if (e.target.value === 'us') {
            setCountry('us')
        } if (e.target.value === 'fr') {
            setCountry('fr')
        } if (e.target.value === 'de') {
            setCountry('de')
        } if (e.target.value === 'es') {
            setCountry('es')
        } if (e.target.value === 'it') {
            setCountry('it')
        }
    }

    // Function that updates the state of the category based on what is chosen in the category dropdown
    function chooseCategory(e) {
        if (e.target.value === 'general') {
            setCategory('general')
        } if (e.target.value === 'world') {
            setCategory('world')
        } if (e.target.value === 'nation') {
            setCategory('nation')
        } if (e.target.value === 'business') {
            setCategory('business')
        } if (e.target.value === 'entertainment') {
            setCategory('entertainment')
        } if (e.target.value === 'sports') {
            setCategory('sports')
        } if (e.target.value === 'science') {
            setCategory('science')
        } if (e.target.value === 'health') {
            setCategory('health')
        }
    }

    return [
        <Navbar />,
        <div className='trending-container'>
            <div className='trending-header'>
                <h1> Find trending news by category, country and language. </h1>
            </div>
            <div className='dropdown-container-trending'>
                <select className='country-lang-options-trending' onChange={chooseLanguage}>
                    <option> Choose language... </option>
                    <option value='en'> English </option>
                    <option value='fr'> French </option>
                    <option value='de'> German </option>
                    <option value='es'> Spanish </option>
                    <option value='it'> Italian </option>
                </select>
                <select className='country-lang-options-trending' onChange={chooseCountry}>
                    <option> Choose country... </option>
                    <option value='gb'> England </option>
                    <option value='us'> US </option>
                    <option value='fr'> France </option>
                    <option value='de'> Germany </option>
                    <option value='es'> Spain </option>
                    <option value='it'> Italy </option>
                </select>
                <select className='country-lang-options-trending' onChange={chooseCategory}>
                    <option> Choose category... </option>
                    <option value='general'> General </option>
                    <option value='world'> World </option>
                    <option value='nation'> Nation </option>
                    <option value='business'> Business </option>
                    <option value='entertainment'> Entertainment </option>
                    <option value='sports'> Sports </option>
                    <option value='science'> Science </option>
                    <option value='health'> Health </option>
                </select>
                <button onClick={getTrendingArticles} className='trending-button'> Search </button>
            </div>
            <ul className='articles-container'>
                {articles.map((item) => {
                    return (<NewsCard title={item.title} image={item.image} description={item.description} content={item.content} url={item.url} />)
                })}
            </ul>
        </div>,
        <Footer />
    ]
}
