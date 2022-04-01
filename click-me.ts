import type { TemplateResult } from "lit";
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("click-me")
export class ClickMe extends LitElement {

  @property({ type: Number, reflect: true }) count: number = 0;

  render(): TemplateResult {
    return html`
      <button @click=${() => this.count++}>
        You clicked me ${this.count} times.
      </button>
    `;
  }

}
