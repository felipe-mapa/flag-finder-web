# FLAG FINDER WEB APP
A search engine to filter country flags by their characteristics and to give the user some information about each country and flag. It is a WordPress Theme coded in React.js. 

I have been always fascinated for flags, so for a university project I developed an [Augmented Reality flag reader](https://github.com/felipe-mapa/Flag-Reader). However, none of the AR packages out in the market could recognize every flag because of the color limitation all of them had. So, I decided to develop a search engine where people can type flag’s characteristics and it would filter down to the flag they’re looking for as well as some interesting facts.

## URL

[WEBSITE](http://flagfinderapp.com/)

## Setup Instructions

### Development

1. package.json-> "homepage": "/wp-content/themes/flag-finder-theme/"

2. countryAction.js -> Switch 9 commented lines

3. Run npm start and watch-css (different terminals)

### Deployment

1 - package.json -> "homepage": "http://flagfinderapp.com/wp-content/themes/flag-finder-theme"

2 - countryAction.js -> Switch 9 commented lines

## Reflections

- It was my first independent React project, where I could improve a lot my React skills. 
- It was also the first website which I used WordPress as the backend, being able to learn how it works and how to create a theme.
- To be able to link React and WordPress I used [Create React WP Theme](https://github.com/devloco/create-react-wptheme/commit/61cab882028b8c2596beed9df2b44bcc1c0b869c), which is base on Create React App.

- ### **Database**

One of the reasons I used Wordpress (apart from learning something new) was because it has got a easy to use REST API. 
I retrieved the data using Axios, and manipulated and managed it with Redux and Thunk.

- ### **SEO**

To handle the SEO of over 200 pages in a single page app, I used [React Helmet](https://github.com/nfl/react-helmet) which would dynamically change the page meta data depending on the country selected using pre-defined variables.
When a page is open it filter the country's name, colors and continent and use these variables to build the meta tags.

- ### **Email**

I decided to use a JS library to handle the email sending instead of coding it in PHP (as I have done in most of the past websites I've developed) or using WordPress plugins. The reason for that was because I wanted a JS solution to send email, so I could learn something new in case I need to use in the future.