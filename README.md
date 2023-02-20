# Frontend-take-home-technical-test

## Brief

Create a website that gets news from the GNews api:

    https://gnews.io/?ref=apilist.fun

Your website must:    

  1) Include a search area
  2) Include a results area
  3) Include tests
  4) Be hosted on a publicly accessible URL, so we can see it working

## Solution 

For my solution, I've used React, JavaScript and Cypress. The motivation for using the tech stack is: I have a lot of experience using React and JS and I know that this combination would allow me to create a fast single-page application with a nice and sleek UI. I've used Cypress for testing as it's an accessible tool that allows you to have confidence that your pages are mounting correctly, and that your API calls are working and the data they return is being rendered properly on screen. 

Within React, I've used packages such as 'react-router-dom', 'reactjs-popup', 'react-social-icons'. Packages such as these can provide subtle but beneficial impacts on the user experience. 

I would have liked to implement pagination within the app, however the free tier of the API only allows for a maximum of 10 articles to be returned and you are limited to 100 API calls per day. This is something I would look to do to improve the app.

## Application features 

- A landing page dashboard that gives the user an overview of what they can expect in the app and a way to access all features
- A navbar for additional ease of routing throughout the app 
- A search page functionality where users can search for and see articles in different languages and countries 
- A trending page functionality where users can search for and see articles by different categories in certain languages and countries 
- Responsive CSS for smaller screen sizes 

## Deployed link

https://frontend-callasd.netlify.app/

## App demo 

https://user-images.githubusercontent.com/112335053/220074411-6a92d9c9-f47b-4ed5-abd8-52ece86522a1.mp4

## Running the app locally 

Running React:
```
npm i
npm start
```

Testing:
```
npx cypress open
```
