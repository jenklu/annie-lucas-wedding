import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import './wedding-navbar';
import './entry-page';
import './main.css';
import { buttonStyles, paragraphStyle } from './styles.ts';

@customElement('bride-and-groom')
export class BrideAndGroom extends LitElement {
  @state()
  private currentPage = 0;

  private pages = [
    html`
      <div class="page-content">
        <h1>2017.1</h1>
        <img src="/bride-and-groom/math-class.png" style="width:90%" />
        <p>Annie and I met in Math 170A in Spring 2017.</p>
        <p>
          On the first day of class, Annie was sitting with some friends, and I happened to sit down
          two seats away from her.
        </p>
        <p>
          Right before class, our mutual friend Nava walked in and sat between us: "Do you guys know
          each other?"
        </p>
        <p>We didn't...But thanks to Nava, we started hanging out and doing homework together.</p>
      </div>
    `,
    html`
      <div class="page-content">
        <h1>2017.2</h1>
        <img src="/bride-and-groom/rose-bowl-2017.png" style="align-self:center; height:15vh" />
        <p>
          By late spring, Annie and I had awkwardly, drunkenly held hands once while I walked her
          back from a frat party, but we were otherwise "just friends".
        </p>
        <p>
          I decided to give her a huge panic attack anyway by asking her to my frat formal. After
          mulling it over with friends, Annie agreed to go and we had a blast. This grainy photo is
          the only record of that first date.
        </p>
      </div>
    `,
    html`
      <div class="page-content">
        <h1>2017.3</h1>
        <img src="/bride-and-groom/yosemite-2017.jpg" style="align-self:center; width:65%" />
        <p>
          After coming back for our junior year, on October 17th 2017, we decided to officially
          "start dating".
        </p>
        <p>
          We also took our first trip together later that fall, with a group of Annie's friends to
          Yosemite. This was also my first time at Yosemite — lots of new territory!
        </p>
      </div>
    `,
    html`
      <div class="page-content">
        <h1>2018.1</h1>
        <div style="height:fit-content;">
          <img src="/bride-and-groom/date-party-2018.jpg" style="max-height:30vh;max-width:40%" />
          <img
            src="/bride-and-groom/old-people-party-2018.jpg"
            style="max-height:30vh;max-width:40%;margin-left:10%"
          />
        </div>
        <p>
          In the first half of 2018, Annie and I really got to know each other. We had a blast
          dressing up for each others' date parties and getting a sneak preview of what it might be
          like to grow old together.
        </p>
      </div>
    `,
    html`
      <div class="page-content">
        <h1>2018.2</h1>
        <div style="height:fit-content;">
          <img src="/bride-and-groom/amsterdam-2018.jpg" style="max-width:30%;max-height:30vh" />
          <img
            src="/bride-and-groom/copenhagen-2018.jpg"
            style="max-width:30%;max-height:30vh; margin-left:3%"
          />
          <img
            src="/bride-and-groom/barcelona-2018.jpg"
            style="max-width:30%;max-height:30vh; margin-left:3%"
          />
        </div>
        <p>
          Annie and I both got internships back in my hometown of Boston the 2018 summer. The
          highlight of that summer was a trip to Amsterdam, Copenhagen, and Barcelona.
        </p>
      </div>
    `,
    html`
      <div class="page-content">
        <h1>2019.1</h1>
        <div style="height:fit-content;">
          <img src="/bride-and-groom/thailand-2019.jpg" style="max-width:30%;max-height:25vh" />
          <img
            src="/bride-and-groom/pinning-2019.jpg"
            style="max-width:30%;max-height:25vh;margin-left:3%"
          />
          <img
            src="/bride-and-groom/grad-2019.jpg"
            style="max-width:30%;max-height:25vh;margin-left:3%"
          />
        </div>
        <p>We made the most of our last couple quarters of college.</p>
        <p>
          After a spring break tour of Thailand, I "pinned" Annie, which in southern fraternity
          speak means "we're going to get engaged in a couple months", but in California fraternity
          apparently means "we're going to have a big party and then get engaged 5 years later".
        </p>
      </div>
    `,
    html`
      <div class="page-content">
        <h1>2019.2</h1>
        <img
          src="/bride-and-groom/flight-receipt-2019.png"
          style="align-self:center;max-height:25vh"
        />
        <p>
          After graduation, Annie and I made the tough decision to take jobs on opposite sides of
          the country: the tech scene drew me to Annie's home region of the Bay Area, while Liberty
          Mutual stole her away to my hometown of Boston.
        </p>
        <p>
          Although the decision to swap hometowns was hard, the decision to try out long distance
          wasn't. We committed to lots of BOS<>SFO travel and managed to see each other a couple
          times a month.
        </p>
      </div>
    `,
    html`
      <div class="page-content">
        <h1>2020.1</h1>
        <img
          src="/bride-and-groom/annie-covid-2020.jpg"
          style="align-self:center;max-height:25vh"
        />
        <p>
          While most things in the world weren't great in the first half of 2020, Annie's decision
          to move back to her parents' place in Sonoma while I was living in San Francisco made my
          life a whole lot better.
        </p>
        <p>The beautiful outdoors of the Bay Area were a great respite from COVID-hunkering.</p>
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

  static localStyles = [
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
        color: #8b4513;
        text-align: left;
      }
      .page-content h1 {
        margin-bottom: 0px;
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
  static styles = [paragraphStyle, BrideAndGroom.localStyles];
}

declare global {
  interface HTMLElementTagNameMap {
    'bride-and-groom': BrideAndGroom;
  }
}
