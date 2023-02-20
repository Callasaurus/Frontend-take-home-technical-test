/* eslint-disable no-undef */

/* 
Please note - for testing purposes, I imported the 'dummydata' array from the dummy.js file and prepopulated the 'articles'
state in the Search and Trending components. I did this to limit the amount of API calls in the testing as I'm limited to 
only 100 calls per day. If you want to run the tests, comment out the useEffects in the Search and Trending components and 
prepopulate the article states with the dummydata array. 
*/

describe('testing that all routing, searches and API calls work correctly', () => {
  it('passes all tests', () => {

    // Successfully loads the dashboard page, clicks onto the search functionality and the correct articles are loaded. Successfully redirects to article when linked clicked
    cy.visit('http://localhost:3000/');
    cy.get('.card-container > :nth-child(1)').click();
    cy.get(':nth-child(1) > .news-card-header > p').should('contain', 'African Americans');
    cy.get(':nth-child(1) > .pop-up-button').click();
    cy.get('.news-popup > a').click();

    // Successfully loads the Search page, selects English language, country as England, searches 'Football' and the correct results are brought back. Successfully redirects to article when linked clicked 
    cy.visit('http://localhost:3000/');
    cy.get('.card-container > :nth-child(1)').click();
    cy.get('.dropdown-container > :nth-child(1)').select('English');
    cy.get('.dropdown-container > :nth-child(2)').select('England');
    cy.get('input').type('Football');
    cy.get('.search-input > button').click();
    cy.get(':nth-child(1) > .news-card-header > p').should('contain', 'Football news LIVE');
    cy.get(':nth-child(1) > .pop-up-button').click();
    cy.get('.news-popup > a').click();

    // Clicks on the GNews card on the dashboard and successfully redirected 
    cy.visit('http://localhost:3000/');
    cy.get('.card-container > :nth-child(3)').click();

    // Successfully loads the dashboard page, clicks onto the trending functionality and the correct articles are loaded. Successfully redirects to article when linked clicked
    cy.visit('http://localhost:3000/');
    cy.get('.card-container > :nth-child(2)').click();
    cy.get(':nth-child(10) > .news-card-header > p').should('contain', 'Union address');
    cy.get(':nth-child(10) > .pop-up-button').click();
    cy.get('.news-popup > a').click();

    // Successfully loads the Trending page, selects English language, country as US, category as 'Sports' and the correct results are brought back. Successfully redirects to article when linked clicked
    cy.visit('http://localhost:3000/');
    cy.get('.card-container > :nth-child(2)').click();
    cy.get('.dropdown-container > :nth-child(1)').select('English');
    cy.get('.dropdown-container > :nth-child(2)').select('US');
    cy.get('.dropdown-container > :nth-child(3)').select('Sports');
    cy.get('.trending-button').click();
    cy.get(':nth-child(2) > .news-card-header > p').should('contain', 'postgame banter');
    cy.get('.news-popup > a').click();

  })
})