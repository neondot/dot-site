import { DotComponent, html, register } from '@neondot/dot';

class BaseNavigator extends DotComponent {
  static get tag() { return 'base-navigator' }

  constructor() {
    super();

    this.$template = () => html`
      <style>
        @import 'components/BaseNavigator/index.css';
      </style>
      <nav class="">
        <router-link exportparts="a" to="/">Home</router-link>
        <router-link exportparts="a" to="/doc">Documentation</router-link>
      </nav>
    `;
  }
}

register(BaseNavigator);

export default BaseNavigator;
