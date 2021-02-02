import { DotComponent, html, register } from '../../_snowpack/pkg/@neondot/dot.js';

class MdContainer extends DotComponent {
  static get tag() { return 'md-container' }
  static get observedAttributes() { return ['file'] }

  constructor() {
    super();

    this.$template = () => html`
      <style>
        @import 'components/MdContainer/index.css';
      </style>
      <div class="md-container">
        <div class="container" ref="container"></div>
      </div>
    `;
  }

  async mounted() {
    const response = await fetch(this.$attributes.file);
    const result = await response.text();
    this.$refs.container.innerHTML = result;
  }
}

register(MdContainer);

export default MdContainer;
