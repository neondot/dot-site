import { DotRoute, html, register } from '../_snowpack/pkg/@neondot/dot.js';
import gsap from '../_snowpack/pkg/gsap.js';

class ViewDoc extends DotRoute {
  static get tag() { return 'view-doc' }

  constructor() {
    super();

    this.path = '/doc';

    this.$template = () => html`
      <h1 ref="title">Doc Page</h1>
    `;
  }
  
  mounted() {
    gsap.set(this.$refs.title, { y: 100, autoAlpha: 0 });
  }

  async enter() {
    gsap.to(this.$refs.title, { y: 0, autoAlpha: 1, duration: 0.8 });
  }
  
  async leave() {
    return gsap.to(this.$refs.title, { y: -100, autoAlpha: 0, duration: 3 });
  }
}

register(ViewDoc);

export default ViewDoc;