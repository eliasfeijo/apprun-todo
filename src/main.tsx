import app from 'apprun';
import About from './components/About';
import Home from './components/Home';
import './styles/main.css';

const HOME_TITLE = "Todo Application";
const ABOUT_TITLE = "About";

const state = {
  pageTitle: HOME_TITLE,
  page: <Home />
}

const view = (state) => {
return (
  <div id="app">
    <nav>
      <a href={process.env.NODE_ENV === 'production' ? '/apprun-todo/': '/'} id="link-home">Home</a>
      <a href="#about" id="link-about">About</a>
    </nav>
    <h1>{state.pageTitle}</h1>
    {state.page}
  </div>
);
}

const update = {
  "/": (state) => {
    return { pageTitle: HOME_TITLE, page: <Home /> }
  },
  "#about": (state) => {
    return { pageTitle: ABOUT_TITLE, page: <About /> }
  }
};

app.start(document.body, state, view, update);
