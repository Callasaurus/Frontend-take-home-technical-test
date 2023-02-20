import React, { useState, useEffect } from 'react'
import './Search.css'
import NewsCard from '../NewsCard/NewsCard'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
// import { dummydata } from '../../data'

const APIKEY = process.env.REACT_APP_APIKEY

/* 
This component allows the user to search for specific news articles. Using the GNews API documentation, I've also implemented 
functionality that lets the user choose a country and language for the articles they want to be retuned. 
*/

export default function Search() {

    const [input, setInput] = useState('')
    const [articles, setArticles] = useState([])
    const [language, setLanguage] = useState('en')
    const [country, setCountry] = useState('us')

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

    // Function that is tracking user input and then updating the input state with it. This is then plugged into the url for the API call to get back customised content
    function handleChange(e) {
        setInput(e.target.value);
        console.log(input)
    }

    // User input, language preference and country preference are plugges into the url for the API call
    async function getArticlesBySearch() {
        const examples = await fetch(`https://gnews.io/api/v4/search?q=${input}&apikey=${APIKEY}&lang=${language}&country=${country}&max=10`);
        const data = await examples.json();
        setArticles(data.articles)
        setInput('')
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

    return [
        <Navbar />,
        <div className='search-container'>
            <div className='search-header'>
                <h1> Search for news in a number of countries and languages. </h1>
            </div>
            <div className='dropdown-container'>
                <select className='country-lang-options' onChange={chooseLanguage}>
                    <option> Choose language... </option>
                    <option value='en'> English </option>
                    <option value='fr'> French </option>
                    <option value='de'> German </option>
                    <option value='es'> Spanish </option>
                    <option value='it'> Italian </option>
                </select>
                <select className='country-lang-options' onChange={chooseCountry}>
                    <option> Choose country... </option>
                    <option value='gb'> England </option>
                    <option value='us'> US </option>
                    <option value='fr'> France </option>
                    <option value='de'> Germany </option>
                    <option value='es'> Spain </option>
                    <option value='it'> Italy </option>
                </select>
            </div>
            <div className='search-input'>
                <input onChange={handleChange} value={input} />
                <button onClick={getArticlesBySearch}> Search </button>
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
