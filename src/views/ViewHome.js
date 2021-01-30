import { DotRoute, html, register } from '@neondot/dot';
import gsap from 'gsap';

class ViewHome extends DotRoute {
  static get tag() { return 'view-home' }

  constructor() {
    super();

    this.path = '/';

    this.$template = () => html`
      <h1 ref="title">Homepage</h1>
    `;
  }
  
  // mounted() {
  //   gsap.set(this.$refs.title, { y: 100, autoAlpha: 0 });
  // }

  // async enter() {
  //   gsap.to(this.$refs.title, { y: 0, autoAlpha: 1, duration: 0.8 });
  // }
  
  // async leave() {
  //   return gsap.to(this.$refs.title, { y: -100, autoAlpha: 0, duration: 3 });
  // }
}

register(ViewHome);

export default ViewHome;