# VP Dim Sum Restaurant Page

A single- page restaurant website for fictional dim sum restaurant in Yokohama. The whole site--every page-- is generated with JavaScript: each tab is its own module that builds it DOM from scratch, and switching tabs just clears the page and renders the next module.

## Built with

- JavaScript (ES modules)
- webpack 5 (HtmlWebpackPlugin, CSS and asset loaders)
- HTML and CSS, with the Kaushan Script display font

## Features

- Four tabs -- Home, Menu, About, Contact -- with no page reloads; the active tab is highlighted
- Home page with hero image, feature cards, opening hours and location
- Menu page generated from data; dim sum, main courses and desserts, each with descriptions and prices
- Every page is a separate module (`home.js`, `menu.js`, `about.js`, `contact.js`) exporting a single loader function, wired together by a small page-switching controller in `index.js`

## What I learned

- Building an entire UI with DOM methods instead of writing static HTML pages
- Splitting a front end into single responsibility modules and composing them at runtime
- Configuring webpack to handle CSS, images and webfonts as imports

## Run it locally

git clone https://github.com/Katusyo/restaurant.git
cd restaurant
npm install
npx webpack serve

## About

Built as part of The Odin Project's JavaScript course (Restaurant Page project).
