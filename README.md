# SPA News - React

React demo project. This project uses [News API](https://newsapi.org/) under the hood.

Demo: [Click to see DEMO](https://react-spa-ilker.herokuapp.com/)

![SPA News](https://i.imgur.com/6r1BEHp.jpg)

## Getting Started

This project created for a Meetup talk about Server Side Rendering with React.

There is also a Server Side Rendered version of same project.

- [Visit Repo](https://github.com/ilkeraltin/react-ssr-news)
- [Click to see DEMO](https://react-ssr-ilker.herokuapp.com/)

### Installing

First clone project and install dependencies

```sh
$ mkdir react-news && cd react-news
$ git clone https://github.com/ilkeraltin/react-spa-news.git
$ npm install
```

Navigate to [News API](https://newsapi.org/) and grab your API key.

Find config.js in root folder and update API Key.

```javascript
const config = {
  apikey: 'enter-your-api-key'
};
```

Run on local

```sh
$ npm run dev
```

Navigate to [http://localhost:3001](http://localhost:3001)

## Deployment

Deployment build

```sh
$ npm run build:prod
```

You can deploy this project to:

- [Heroku](https://www.heroku.com/)

## Built With

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
