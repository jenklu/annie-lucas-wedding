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
        <p>Annie and I met in Math 170A in Spring 2017.</p>
        <p>
          On the first day of class, Annie was sitting with some friends, and I happened to sit down
          two seats away from her.
        </p>
        <p>
          Right before class, our mutual friend Nava walked in and sat between us: "Do you guys know
          each other?"
        </p>
        <p>We didn't...but thanks to Nava, we started hanging out and doing homework together.</p>
        <img src="/bride-and-groom/2017-math-class.png" style="width:95%" />
      </div>
    `,
    html`
      <div class="page-content">
        <h1>2017.2</h1>
        <img src="/bride-and-groom/2017-rose-bowl.png" style="align-self:center; height:15vh" />
        <p>
          By late spring, Annie and I had awkwardly, drunkenly held hands once while I walked her
          back from a frat party, but we were otherwise "just friends".
        </p>
        <p>
          I decided to give her a panic attack anyway by asking her to my frat formal. After mulling
          it over with friends, Annie agreed to go and we had a blast. This grainy photo is the only
          record of that first date.
        </p>
      </div>
    `,
    html`
      <div class="page-content">
        <h1>2017.3</h1>
        <img src="/bride-and-groom/2017-yosemite.jpg" style="align-self:center; width:65%" />
        <p>
          After coming back for junior year, we decided to officially start dating on October 17th,
          2017.
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
          <img src="/bride-and-groom/2018-date-party.jpg" style="max-height:30vh;max-width:40%" />
          <img
            src="/bride-and-groom/2018-old-people-party.jpg"
            style="max-height:30vh;max-width:40%;margin-left:10%"
          />
        </div>
        <p>
          In the first half of 2018, Annie and I really got to know each other. We had a blast
          dressing up for each other's date parties and getting a sneak preview of what it might be
          like to grow old together.
        </p>
      </div>
    `,
    html`
      <div class="page-content">
        <h1>2018.2</h1>
        <p>
          Annie and I both got internships back in my hometown of Boston the 2018 summer. The
          highlight of that summer was a trip to Amsterdam, Copenhagen, and Barcelona.
        </p>
        <div style="height:fit-content;">
          <img src="/bride-and-groom/2018-amsterdam.jpg" style="max-width:30%;max-height:30vh" />
          <img
            src="/bride-and-groom/2018-copenhagen.jpg"
            style="max-width:30%;max-height:30vh; margin-left:3%"
          />
          <img
            src="/bride-and-groom/2018-barcelona.jpg"
            style="max-width:30%;max-height:30vh; margin-left:3%"
          />
        </div>
      </div>
    `,
    html`
      <div class="page-content">
        <h1>2019.1</h1>
        <div style="height:fit-content;">
          <img src="/bride-and-groom/2019-thailand.jpg" style="max-width:30%;max-height:30vh" />
          <img
            src="/bride-and-groom/2019-pinning.jpg"
            style="max-width:30%;max-height:30vh;margin-left:3%"
          />
          <img
            src="/bride-and-groom/2019-grad.jpg"
            style="max-width:30%;max-height:30vh;margin-left:3%"
          />
        </div>
        <p>We made the most of our last couple quarters of college.</p>
        <p>
          After a spring break tour of Thailand, I "pinned" Annie. In southern Greek-life-speak,
          that means "we're going to get engaged in a couple months". In California Greek, it
          apparently means "have a big party and then get engaged 5 years later".
        </p>
      </div>
    `,
    html`
      <div class="page-content">
        <h1>2019.2</h1>
        <p>
          After graduation, Annie and I made the tough decision to take jobs on opposite sides of
          the country: I was drawn to the tech of the Bay Area, while Liberty Mutual stole her away
          to my hometown of Boston.
        </p>
        <p>
          Although the decision to swap hometowns was hard, the decision to try out long distance
          wasn't. We committed to lots of BOS<>SFO travel and managed to see each other a couple
          times a month.
        </p>
        <img
          src="/bride-and-groom/2019-flight-receipt.png"
          style="align-self:center;max-height:25vh;max-width:95%"
        />
      </div>
    `,
    html`
      <div class="page-content">
        <h1>2020.1</h1>
        <img
          src="/bride-and-groom/2020-annie-covid.jpg"
          style="align-self:center;max-height:24vh"
        />
        <p>
          While most things in the world weren't great in the first half of 2020, Annie's decision
          to move back to her parents' place in Sonoma while I was living in San Francisco made my
          life a whole lot better.
        </p>
        <p>The beautiful outdoors of the Bay Area were a great respite from COVID-hunkering.</p>
      </div>
    `,
    html`
      <div class="page-content">
        <h1>2020.2</h1>
        <p>
          While back in Sonoma, Annie spent almost every weekend with me in SF. We often drove over
          the Golden Gate to hike around Fairfax and say hi to her grandparents in Deer Park.
        </p>
        <p>
          As COVID restrictions loosened, we ventured further from the Bay, visiting my family back
          on the East Coast and spending a long weekend with friends in Tahoe.
        </p>
        <img
          src="/bride-and-groom/2020-wine-tasting.jpg"
          style="align-self:center;max-height:25vh"
        />
      </div>
    `,
    html`
      <div class="page-content">
        <h1>2021.1</h1>
        <div style="height:fit-content;">
          <img src="/bride-and-groom/2021-annie-golf.jpg" style="max-height:30vh;max-width:40%" />
          <img
            src="/bride-and-groom/2021-annie-shaving-moustache.jpg"
            style="max-height:30vh;max-width:40%;margin-left:10%"
          />
        </div>
        <p>
          We took advantage of remote work to spend a month in Palm Springs, where Annie reached the
          pinnacle of her golfing career (at least until we leave NYC?)
        </p>
        <p>
          However, the pinnacle of Annie's time in Palm Springs was when I let her shave my
          year-long COVID stache.
        </p>
      </div>
    `,
    html`
      <div class="page-content">
        <h1>2021.2</h1>
        <img src="/bride-and-groom/2021-bk-brewery.jpg" style="align-self:center;max-height:23vh" />
        <p>
          After our successful cohabitation experiment in Palm Springs, Annie and I decided to move
          in together. Liberty Mutual was enforcing return-to-office and didn't have one in the Bay,
          so we needed to find a new city.
        </p>
        <p>
          We checked out Seattle in July, but ultimately chose NYC. We moved back East and found a
          spot in the East Village after a month of apartment-hunting from a Williamsburg AirBnB.
        </p>
      </div>
    `,
    html`
      <div class="page-content">
        <h1>2022.1</h1>
        <p>
          2022 saw us settling into NYC life. It was a year of many firsts, mostly fun: Annie's
          first time skiing (in the Catskills), Annie's first time in Hawaii, our first time going
          to a Michelin star restaurant, and our first time in Nashville.
        </p>
        <p>
          It was also our first time living directly above a restaurant and dealing with all the
          roaches and mice that entails. At the end of the year when our lease was up, we hopped
          across town to our current abode in the Meatpacking District.
        </p>
        <img
          src="/bride-and-groom/2022-catskills-selfie.jpg"
          style="align-self:center;max-height:22vh"
        />
      </div>
    `,

    html`
      <div class="page-content">
        <h1>2023.1</h1>
        <div style="height:fit-content;">
          <img src="/bride-and-groom/2023-annie-tennis.jpg" style="max-height:30vh;max-width:30%" />
          <img
            src="/bride-and-groom/2023-italy-colosseum.jpg"
            style="max-height:30vh;max-width:62%;margin-left:5%"
          />
        </div>
        <p>
          In 2023 we picked up a shared hobby of playing (bad) tennis. Annie's subsequent shoulder
          dislocation put this on hold for a while, but we're starting to pick it back up.
        </p>
        <p>
          I also went to Italy for the first time, and Annie showed me around all the places she'd
          explored 10+ years ago.
        </p>
      </div>
    `,
    html`
      <div class="page-content">
        <h1>2024.1</h1>
        <div style="height:fit-content;">
          <img src="/bride-and-groom/2024-costa-rica.jpg" style="max-height:33vh;max-width:25%" />
          <img
            src="/bride-and-groom/2024-dublin-guinness.jpg"
            style="max-height:33vh;max-width:45%;"
          />
          <img src="/bride-and-groom/2024-kinkaku-ji.jpg" style="max-height:33vh;max-width:25%;" />
        </div>
        <p>Once we nailed down how to travel together in 2023, we made the most of it in 2024.</p>
        <p>
          Annie's mom Joey started by taking us to Costa Rica, and later in the year we got our
          first passport stamps from Ireland, Korea, and Japan.
        </p>
      </div>
    `,
    html`
      <div class="page-content">
        <h1>2024.2</h1>
        <p>
          Annie and I go back to UCLA for the USC-UCLA game most years, so that was my convenient
          excuse to propose back at the same campus where we met.
        </p>
        <p>
          Of course, she's too smart for her own good and sniffed the plan out months in advance
          (texts are with the MoH Laura), but everything still worked out.
        </p>
        <div style="height:fit-content;">
          <img
            src="/bride-and-groom/2024-texts-with-laura.jpg"
            style="max-height:33vh;max-width:44%"
          />
          <img
            src="/engagement-photos/DSC00786-AH Portraits.jpg"
            style="max-height:33vh;max-width:52%"
          />
        </div>
      </div>
    `,
    html`
      <div class="page-content">
        <h1>2025.1</h1>
        <p>
          Wedding planning has been a focus of 2025, but we still managed to check off one more
          state each this year. Annie hit #28 with Florida in February. I was one back for a month,
          but caught up on a golf trip (without her) to South Carolina.
        </p>
        <img
          src="/bride-and-groom/2025-states-visited.jpg"
          style="align-self:center;max-height:24vh"
        />
      </div>
    `,
    html`<div class="page-content">
      <h1>2026 and beyond...</h1>
      <p>
        We didn’t have space to mention everyone by name, but if you’re reading this, you’ve played
        a role in our relationship.
      </p>
      <p>
        We can't wait for you all to be at Deer Park to help us celebrate the next chapter of this
        book!
      </p>
    </div>`,
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
        overflow: scroll; /* to ensure shadows appear above and below */
      }
      .page-content p {
        margin: 0;
        color: #8b4513;
        text-align: left;
      }
      .page-content h1 {
        margin-bottom: 0px;
      }
      .page-content:last-of-type h1 {
        text-align: right;
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
          & h1 {
            margin-top: 0;
          }
        }
        .page-content:last-of-type h1 {
          text-align: center;
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
