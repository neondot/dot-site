import { DotComponent, html, register } from '@neondot/dot';

class BaseNavigator extends DotComponent {
  static get tag() { return 'base-navigator' }

  constructor() {
    super();

    this.$template = () => html`
      <style>
        @import '/components/BaseNavigator/index.css';
      </style>
      <nav>
        <div class="container">
          <div class="logo">
            <img src="/logo.png" />
          </div>
  
          <div class="links">
            <router-link exportparts="a" to="/">Welcome</router-link>
            <router-link exportparts="a" to="/doc">Classes</router-link>
            <router-link exportparts="a" to="/doc">Guides</router-link>

            <a href="https://github.com/neondot/dot" target="_blank">
              <img src="/github-logo.png" />
            </a>
          </div>
        </div>
      </nav>
    `;
  }
}

register(BaseNavigator);

export default BaseNavigator;
