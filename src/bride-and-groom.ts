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
        <svg width="25%" height="25%" viewBox="0 0 200 200">
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
        <svg width="25%" height="25%" viewBox="0 0 200 200">
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
        <svg width="25%" height="25%" viewBox="0 0 200 200">
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
        <svg width="25%" height="25%" viewBox="0 0 200 200">
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
        <svg width="25%" height="25%" viewBox="0 0 200 200">
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
        <svg width="25%" height="25%" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="#D2B48C" stroke="#8B4513" stroke-width="3" />
          <text x="100" y="110" font-size="24" text-anchor="middle" fill="#8B4513">Page 6</text>
        </svg>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id magna.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id magna.</p>
      </div>
    `,
    html`
      <div class="page-content">
        <svg width="25%" height="25%" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="#D2B48C" stroke="#8B4513" stroke-width="3" />
          <text x="100" y="110" font-size="24" text-anchor="middle" fill="#8B4513">Page 7</text>
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
      this.flipAndTurn('next');
    }
  }

  private prevPage() {
    const inc = this.isWideScreen ? 2 : 1;
    if (this.currentPage >= inc) {
      this.flipAndTurn('prev');
    }
  }
  private flipAndTurn(direction: 'next' | 'prev') {
    const inc = this.isWideScreen ? 2 : 1;
    const delta = direction === 'next' ? inc : -inc;

    this.animatePageFlip(direction); // add CSS class
    setTimeout(() => (this.currentPage += delta), 450); // ≈ animation duration
  }

  private animatePageFlip(direction: 'next' | 'prev') {
    const pageEls = this.shadowRoot?.querySelectorAll('.page-content');
    if (!pageEls) return;
    let pageToTurn = pageEls[0];
    if (pageEls.length > 1 && direction == 'next') {
      pageToTurn = pageEls[1];
    }
    // Animate the visible pages
    pageToTurn.classList.remove('flip-next', 'flip-prev');
    // Force reflow to restart animation
    void (pageToTurn as HTMLElement).offsetWidth;
    pageToTurn.classList.add(direction === 'next' ? 'flip-next' : 'flip-prev');
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
        height: 75vh;
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
        padding: 2rem 1rem;
        border: 3px solid #d2b48c;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
        z-index: -1;
      }

      .page {
        display: flex;
        gap: 0rem;
        height: 100%;
        overflow-y: scroll;
        background-color: #fff8dc;
        background-image: url(/paper.png);
        background-repeat: repeat;
        background-blend-mode: multiply;
      }

      .page-content {
        position: relative;
        width: 40vw;
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
      .page-content p {
        margin: 0;
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

      .page-content.flip-prev {
        animation: pageFlipPrev 0.75s cubic-bezier(0.4, 0.2, 0.2, 1);
        transform-origin: 100% 50%;
        z-index: 100;
      }
      .page-content.flip-next {
        animation: pageFlipNext 0.75s cubic-bezier(0.4, 0.2, 0.2, 1);
        transform-origin: 0% 50%;
        z-index: 100;
      }
      @keyframes pageFlipNext {
        0% {
          transform: perspective(1000px) rotateY(0deg);
          box-shadow: none;
        }
        40% {
          box-shadow: 0 0 32px 0px rgba(0, 0, 0, 0.18);
        }
        100% {
          transform: perspective(1000px) rotateY(-170deg);
          box-shadow: 0 0 32px 0px rgba(0, 0, 0, 0.18);
        }
      }
      @keyframes pageFlipPrev {
        0% {
          transform: perspective(1000px) rotateY(0deg);
          box-shadow: none;
        }
        40% {
          box-shadow: 0 0 32px 0px rgba(0, 0, 0, 0.18);
        }
        100% {
          transform: perspective(1000px) rotateY(170deg);
          box-shadow: 0 0 32px 0px rgba(0, 0, 0, 0.18);
        }
      }
      @media (max-width: 1270px) {
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
        .book {
          top: 18vh;
          height: 65vh;
          background: #ab99af;
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
