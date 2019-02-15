import { html, LitElement } from "lit-element";

class XApp extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {};
  }

  render() {
    return html`
      X-APP
    `;
  }
}

customElements.define(`x-app`, XApp);
