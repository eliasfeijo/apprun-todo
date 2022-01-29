import { app, Component } from 'apprun';

export default class About extends Component {
  state = 'About';

  iconArrowRight = () => {
    return (
      <span class="link-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </span>
    )
  }

  view = state => {
    return (
      <div id="about">
        <p>This site was made by <b>Elias Feijó</b>, using the following technologies:</p>
        <ul id="list-technologies">
          <li>
            {this.iconArrowRight()}
            <a href="https://apprun.js.org/" target="_blank" rel="noopener noreferrer">
              AppRun
            </a>
          </li>
          <li>
            {this.iconArrowRight()}
            <a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer">
              Webpack
            </a>
          </li>
          <li>
            {this.iconArrowRight()}
            <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
              Typescript
            </a>
          </li>
          <li>
            {this.iconArrowRight()}
            <a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer">
              HTML
            </a>
            &nbsp;and&nbsp;
            <a href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer">
              CSS
            </a>
          </li>
        </ul>
      </div>
    )
  }

  update = {

  };
}

