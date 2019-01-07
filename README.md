# French Football League 1

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It aims to display all teams in French League 1. When you click on a specific team, you can access its details (year of creation, manager, stadium, players...).

## Run the project

First, you need to clone this repository.
Then, go to the project directory and run:

```
npm install // Install all dependencies
npm start // Run the app in development mode
```

The app will be available on [http://localhost:3000](http://localhost:3000).

## Routes

This app has two main routes:

- `/`: main page, displays all teams in French League 1
- `/team/:id`: displays the details for a given team

## Browsers support

This app has been tested on Chrome, Firefox and Edge. Since I don't have an Apple device, I was not able to test it on Safari. It does not support Internet Explorer (but I can add polyfills if needed).

It is responsive.

## Dependencies

- `styled-components`: CSS framework to style React components
- `react-router`: needed for routing between pages
- `material-ui/core` and `material-ui/icons`: components library implementing Google's Material Design and its set of icons

## What could be improved?

- Some big components could be splitted into multiple components (`TeamDetails` for example).
- Override Material UI theme to use the custom theme defined inside the app.
