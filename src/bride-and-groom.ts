import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import './wedding-navbar';
import './entry-page';
import './main.css';
import { buttonStyles } from './styles.ts';

@customElement('bride-and-groom')
export class BrideAndGroom extends LitElement {
  @state()
  private currentPage = 0;

  private pages = [
    html`
      <div class="page-content">
        <svg width="100%" height="25%" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="#D2B48C" stroke="#8B4513" stroke-width="3" />
          <text x="100" y="110" font-size="24" text-anchor="middle" fill="#8B4513">Page 1</text>
        </svg>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    `,
    html`
      <div class="page-content">
        <svg width="100%" height="25%" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="#D2B48C" stroke="#8B4513" stroke-width="3" />
          <text x="100" y="110" font-size="24" text-anchor="middle" fill="#8B4513">Page 2</text>
        </svg>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id magna.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id magna.</p>
      </div>
    `,
    html`
      <div class="page-content">
        <svg width="100%" height="25%" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="#D2B48C" stroke="#8B4513" stroke-width="3" />
          <text x="100" y="110" font-size="24" text-anchor="middle" fill="#8B4513">Page 3</text>
        </svg>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id magna.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id magna.</p>
      </div>
    `,
    html`
      <div class="page-content">
        <svg width="100%" height="25%" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="#D2B48C" stroke="#8B4513" stroke-width="3" />
          <text x="100" y="110" font-size="24" text-anchor="middle" fill="#8B4513">Page 4</text>
        </svg>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id magna.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id magna.</p>
      </div>
    `,
    html`
      <div class="page-content">
        <svg width="100%" height="25%" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="#D2B48C" stroke="#8B4513" stroke-width="3" />
          <text x="100" y="110" font-size="24" text-anchor="middle" fill="#8B4513">Page 5</text>
        </svg>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id magna.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id magna.</p>
      </div>
    `,
    html`
      <div class="page-content">
        <svg width="100%" height="25%" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="#D2B48C" stroke="#8B4513" stroke-width="3" />
          <text x="100" y="110" font-size="24" text-anchor="middle" fill="#8B4513">Page 6</text>
        </svg>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id magna.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id magna.</p>
      </div>
    `,
  ];

  private nextPage() {
    const inc = this.isWideScreen ? 2 : 1;
    if (this.currentPage < this.pages.length - inc) {
      this.currentPage += inc;
    } else {
      this.currentPage += 1;
    }
  }

  private prevPage() {
    const inc = this.isWideScreen ? 2 : 1;
    if (this.currentPage >= inc) {
      this.currentPage -= inc;
    }
  }

  render() {
    const pageIncrement = this.isWideScreen ? 2 : 1;

    return html`
      <div class="book">
        <button @click=${this.prevPage} ?disabled=${this.currentPage === 0}>&lt;</button>
        <div class="page">
          ${this.pages[this.currentPage]}
          ${this.isWideScreen
            ? this.pages[this.currentPage + 1] || html`<div class="page-content empty"></div>`
            : ''}
        </div>
        <button
          @click=${this.nextPage}
          ?disabled=${this.currentPage >= this.pages.length - pageIncrement}
        >
          &gt;
        </button>
      </div>
    `;
  }

  private get isWideScreen() {
    return window.innerWidth >= 800;
  }

  static styles = [
    buttonStyles,
    css`
      .book {
        position: fixed;
        top: 15vh;
        left: 50%;
        transform: translateX(-50%);
        height: 83vh;
        display: flex;
        align-items: center;
        justify-content: center;
        color: darkgrey;
        background:
          linear-gradient(
            90deg,
            transparent 47%,
            rgba(0, 0, 0, 0.18) 49%,
            rgba(0, 0, 0, 0.4) 50%,
            rgba(0, 0, 0, 0.18) 51%,
            transparent 53%
          ),
          #ab99af;
        padding: 2rem;
        border: 3px solid #d2b48c;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
        z-index: -1;
      }

      .page {
        display: flex;
        gap: 0rem;
        height: 100%;
        overflow-y: visible;
      }

      .page-content {
        position: relative;
        width: 40vw;
        height: 90%;
        flex: 1;
        padding: 1rem;
        background-color: #fff8dc;
        background-image: url(/paper.png);
        background-repeat: repeat;
        background-blend-mode: multiply;
        box-shadow:
          inset 0 0 40px 10px rgba(0, 0, 0, 0.07),
          inset 0 0 5px rgba(0, 0, 0, 0.1);
        mask-image: radial-gradient(ellipse 90% 80% at 50% 50%, #000 80%, transparent 100%);
        -webkit-mask-image: radial-gradient(ellipse 90% 80% at 50% 50%, #000 80%, transparent 100%);
        display: flex;
        flex-direction: column;
        gap: 1rem;
        overflow: visible; /* to ensure shadows appear above and below */
      }

      /* Gutter shadow on inner edge of each page */
      .page-content:first-child::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 18px;
        height: 100%;
        pointer-events: none;
        z-index: 10;
        background: linear-gradient(to left, rgba(0, 0, 0, 0.13) 0%, transparent 100%);
      }
      .page-content:last-child::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 18px;
        height: 100%;
        pointer-events: none;
        z-index: 10;
        background: linear-gradient(to right, rgba(0, 0, 0, 0.13) 0%, transparent 100%);
      }

      .page-content::before {
        top: -10px; /* slightly above the content */
        background: radial-gradient(ellipse at bottom, rgba(0, 0, 0, 0.15), transparent);
      }

      .page-content::after {
        bottom: -10px; /* slightly below the content */
        background: radial-gradient(ellipse at top, rgba(0, 0, 0, 0.15), transparent);
      }

      .empty {
        background-color: transparent;
        border: none;
        box-shadow: none;
      }

      button {
        padding: 0.5rem 1rem;
        font-size: 1.5rem;
        cursor: pointer;
        background-color: #d2b48c;
        border: none;
        border-radius: 5px;
        color: #fff;
      }

      button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      @media (max-width: 1270px) {
        .book {
          top: 19vh;
          height: 70vh;
          padding: 0px;
        }
      }
      @media (max-width: 800px) {
        button {
          padding: 0.25rem 0.5rem;
          font-size: 1.5rem;
        }
        .page {
          flex-direction: column;
          gap: 0;
        }
        .page-content {
          width: 82vw;
        }
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'bride-and-groom': BrideAndGroom;
  }
}
