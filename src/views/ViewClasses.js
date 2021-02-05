import { DotRoute, html, register } from '@neondot/dot';

class ViewClasses extends DotRoute {
  static get tag() { return 'view-classes' }

  constructor() {
    super();

    this.$path = /\/classes\/(?<file>.*)/i;

    this.$template = () => html`
      <md-container ref="container" file="/content/classes/${this.$params.file}.txt"></md-container>
    `;
  }

  mounted() {
    this.$refs.container.load();
  }
}

register(ViewClasses);

export default ViewClasses;