import { DotRoute, html, register } from '../_snowpack/pkg/@neondot/dot.js';
import gsap from '../_snowpack/pkg/gsap.js';

class ViewHome extends DotRoute {
  static get tag() { return 'view-home' }

  constructor() {
    super();

    this.path = '/';

    this.$template = () => html`
      <home-hero></home-hero>

      <md-container ref="container" file="/content/README.txt"></md-container>
    `;
  }

  mounted() {
    this.$refs.container.load();
  }
}

register(ViewHome);

export default ViewHome;