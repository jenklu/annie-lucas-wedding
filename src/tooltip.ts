import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import './styles';
import { buttonStyles } from './styles';
@customElement('lucas-tooltip')
export class LucasTooltip extends LitElement {
  @property({ type: String }) text = 'Coming soon!';
  @state() private open = false;

  static localStyles = css`
    :host {
      position: relative;
      display: inline-block;
      cursor: pointer;
    }

    .tooltip {
      position: absolute;
      top: 120%;
      left: 50%;
      transform: translateX(-50%);
      padding: 0.5rem 1rem;
      border-radius: 5px;
      white-space: nowrap;
      font-size: 1.25rem;
      z-index: 10;
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
      pointer-events: none;
    }

    .tooltip.open {
      opacity: 1;
      pointer-events: auto;
    }
  `;
  static styles = [LucasTooltip.localStyles, buttonStyles];
  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this._handleDocumentClick);
  }

  disconnectedCallback() {
    document.removeEventListener('click', this._handleDocumentClick);
    super.disconnectedCallback();
  }

  private _handleDocumentClick = (e: MouseEvent) => {
    if (!this.contains(e.target as Node)) {
      this.open = false;
    }
  };

  private _handleClick = (e: MouseEvent) => {
    // Prevent default if it's an <a>
    const target = e.composedPath()[0] as HTMLElement;
    if (target.tagName === 'A') {
      e.preventDefault();
    }

    e.stopPropagation();
    this.open = !this.open;
  };

  render() {
    return html`
      <div @click=${this._handleClick}>
        <slot></slot>
        <button class="tooltip ${this.open ? 'open' : ''}">${this.text}</button>
      </div>
    `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'lucas-tooltip': LucasTooltip;
  }
}
