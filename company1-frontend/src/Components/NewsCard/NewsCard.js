import React from 'react'
import './NewsCard.css'
import Popup from "reactjs-popup";

/* 
As I'm displaying news articles across two components, I've made a NewsCard component that can be re-used in both the 
Search and Trending component. This component is handed down an array of news articles as props, and displays the information
in individual cards. For a nicer user experience, I've added a pop-up to each card that allows the user to read more and find 
the link to the original article.
*/

export default function NewsCard(props) {

  // Function that stops the pop-up from opening scrolled down to the bottom
  function handleClickScroll() {
    const element = document.getElementById('header-text');
    if (element) {
      element.scrollIntoView({ behavior: 'auto' });
    }
  };

  return (
    <div className='news-cards'>
      <div className='news-card-header'>
        <p>{props.title}</p>
      </div>
      <div className='news-card-middle'>
        <img src={props.image} alt='' />
      </div>
      <div className='news-card-bottom'>
        <h3>{props.description}</h3>
      </div>

      <Popup trigger={<button className='pop-up-button'> See more </button>} onOpen={handleClickScroll} >
        <div className="news-popup-container">
          <div className="news-popup">
            <p id='header-text'>{props.title}</p>
            <img src={props.image} alt='' />
            <h3>{props.description}</h3>
            <p className='article-content'>{props.content}</p>
            <a href={props.url} target="_blank" rel="noreferrer"> Read full article </a>
          </div>
        </div>
      </Popup>
    </div>
  )
}
