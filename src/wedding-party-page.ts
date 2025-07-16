import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import './wedding-party-card';

const BRIDESMAIDS = [
  {
    name: 'Laura Nelson',
    title: 'Maid of Honor',
    headshot: '/bridal-party/laura-cropped.jpg',
    description: html`
      <p>
        Laura and Annie met on their very first day at UCLA and lived on the same dorm floor
        (shoutout HH2N) their freshman year. It quickly became clear that Annie had met her match,
        Laura was just as loud and talkative, if not more (the subject of many HH2N debates), as
        Annie herself.
      </p>
      <p>
        At UCLA, Laura and Annie went on to join the same sorority and later became roommates. Laura
        had a front row seat to Annie and Lucas's relationship from the very beginning. She played a
        pivotal role in planning their college pinning, engagement, and now their wedding.
      </p>
    `,
  },
  {
    name: 'Angelica Griggs-Demmin',
    title: 'Bridesmaid',
    headshot: '/bridal-party/gel-cropped.jpg',
    description: html`
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
    `,
  },
  {
    name: 'Ciara Smith',
    title: 'Bridesmaid',
    headshot: '/bridal-party/ciara-cropped.jpg',
    description: html`
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
    `,
  },
  {
    name: 'Tiffany Olin',
    title: 'Bridesmaid',
    headshot: '/bridal-party/tiff-cropped.jpg',
    description: html`
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
    `,
  },
  {
    name: 'Elizabeth Eagles',
    title: 'Bridesmaid',
    headshot: '/bridal-party/liz-cropped.jpg',
    description: html`
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
    `,
  },
  {
    name: 'Isabel Falls',
    title: 'Bridesmaid',
    headshot: '/bridal-party/iz-cropped.jpg',
    description: html`
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
    `,
  },
  {
    name: 'Liana Almony',
    title: 'Bridesmaid',
    headshot: '/bridal-party/liana-cropped.jpg',
    description: html`
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
    `,
  },
  {
    name: 'Tess Jenkins',
    title: 'Bridesmaid',
    headshot: '/bridal-party/tess-cropped.jpg',
    description: html`
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
    `,
  },
  {
    name: 'Maddie Jenkins',
    title: 'Bridesmaid',
    headshot: '/bridal-party/maddie-cropped.jpg',
    description: html`
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
    `,
  },
].reverse();

const GROOMSMEN = [
  {
    name: 'Oliver Schor',
    title: 'Best Man',
    headshot: '/bridal-party/oliver-cropped.jpg',
    description: html`
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
    `,
  },
  {
    name: 'Alex Drabkin',
    title: 'Officiant',
    headshot: '/bridal-party/alex-cropped.jpg',
    description: html`
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
    `,
  },
  {
    name: 'Andrew Kolodziej',
    title: 'Groomsman',
    headshot: '/bridal-party/kolo-cropped.jpg',
    description: html`
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
    `,
  },
  {
    name: 'Ben Hunter',
    title: 'Groomsman',
    headshot: '/bridal-party/ben-hunter-cropped.jpg',
    description: html`
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
    `,
  },
  {
    name: 'Spencer Weissman',
    title: 'Groomsman',
    headshot: '/bridal-party/spencer-cropped.jpg',
    description: html`
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
    `,
  },
  {
    name: 'Solomon Mankin',
    title: 'Groomsman',
    headshot: '/bridal-party/sol-cropped.jpg',
    description: html`
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
    `,
  },
  {
    name: 'Ben Wu',
    title: 'Groomsman',
    headshot: '/bridal-party/ben-wu-cropped.jpg',
    description: html`
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
    `,
  },
  {
    name: 'Daniel Quinn',
    title: 'Groomsman',
    headshot: '/bridal-party/dq-cropped.jpg',
    description: html`
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
    `,
  },
];

@customElement('wedding-party-page')
export class WeddingPartyPage extends LitElement {
  scrollToAltarCenter() {
    const altarWrapper = this.renderRoot.querySelector('.altar-wrapper') as HTMLElement | null;
    const altarImg = this.renderRoot.querySelector('.altar') as HTMLImageElement | null;
    const scrollContainer = this.renderRoot.querySelector(
      '.scroll-bg-container'
    ) as HTMLElement | null;

    if (altarWrapper && scrollContainer && altarImg) {
      const scrollToCenter = () => {
        console.log('scrolling to center');
        const scrollTo =
          altarWrapper.offsetLeft + altarWrapper.offsetWidth / 2 - scrollContainer.clientWidth / 2;
        scrollContainer.scrollTo({ left: scrollTo, behavior: 'smooth' });
      };

      if (altarImg.complete) {
        scrollToCenter();
      } else {
        altarImg.addEventListener('load', scrollToCenter, { once: true });
      }
    } else {
      console.log(`altarImg: ${altarWrapper} scrollContainer: ${scrollContainer}`);
    }
  }

  scrollToLaura() {
    console.log('scrolling to laura');
    const scrollContainer = this.renderRoot.querySelector(
      '.scroll-bg-container'
    ) as HTMLElement | null;
    const lauraCard = this.renderRoot.querySelector('#nelson') as HTMLElement | null;
    if (scrollContainer && lauraCard) {
      // Scroll so the left edge of guidance is at the left edge of the container
      scrollContainer.scrollTo({ left: lauraCard.offsetLeft - 40, behavior: 'smooth' });
    }
  }

  scrollToOliver() {
    console.log('scrolling to oliver');
    const scrollContainer = this.renderRoot.querySelector(
      '.scroll-bg-container'
    ) as HTMLElement | null;
    const oliverCard = this.renderRoot.querySelector('#schor') as HTMLElement | null;
    if (scrollContainer && oliverCard) {
      scrollContainer.scrollTo({ left: oliverCard.offsetLeft, behavior: 'smooth' });
    }
  }

  render() {
    return html`
      <div class="scroll-bg-container">
        <div class="bg-content">
          <img class="altar-bg" src="/wedding-party-background.png" alt="Altar background" />
          <div class="party-scroll">
            ${BRIDESMAIDS.map(
              (member) => html`
                <wedding-party-card
                  .name=${member.name}
                  .title=${member.title}
                  .headshot=${member.headshot}
                  .description=${member.description}
                  id=${member.name.split(' ')[1].toLowerCase()}
                ></wedding-party-card>
              `
            )}
            <div class="altar-wrapper">
              <div class="guidance">
                <div class="arrow-wrapper" @click=${() => this.scrollToLaura()}>
                  <img src="/chevron.svg" class="arrows flipped" />

                  <h3>Bridesmaids</h3>
                </div>
                <div class="arrow-wrapper" @click=${() => this.scrollToOliver()}>
                  <img src="/chevron.svg" class="arrows" />
                  <h3>Groomsmen</h3>
                </div>
              </div>
              <img class="altar" src="/altar.png" alt="Altar with drapes & greenery" />
            </div>
            ${GROOMSMEN.map(
              (member) => html`
                <wedding-party-card
                  .name=${member.name}
                  .title=${member.title}
                  .headshot=${member.headshot}
                  .description=${member.description}
                  id=${member.name.split(' ')[1].toLowerCase()}
                ></wedding-party-card>
              `
            )}
          </div>
        </div>
      </div>
    `;
  }

  static styles = css`
    .scroll-bg-container {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 100vh;
      overflow-x: scroll;
      overflow-y: hidden;
      box-sizing: border-box;
      z-index: -1;
    }

    .bg-content {
      position: relative;
      width: max-content;
      height: 100%;
      min-width: 100vw;
    }
    .altar-wrapper {
      position: relative;
      display: inline-block; /* so it still behaves like one flex item */
      z-index: -1;
    }

    .altar {
      margin-left: -15vw;
      margin-right: -15vw;
      z-index: -1;
      height: 100%;
    }
    .altar-bg {
      position: fixed;
      inset: 0;
      height: 100vh;
      width: 100vw;
      object-fit: cover;
      z-index: -1;
      animation: fadeIn 1s ease-in forwards;
      pointer-events: none;
      user-select: none;
    }
    .party-scroll {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: stretch;
      margin-top: 15vh;
      height: 83vh;
      width: max-content;
      z-index: 2;
      box-sizing: border-box;
      gap: 2vw;
    }
    .guidance {
      display: none;
    }
    @media (max-width: 1270px) {
      .party-scroll {
        margin-top: 19vh;
        height: 70vh;
      }

      .altar {
        display: block; /* avoid unwanted whitespace */
        margin: 0; /* kill the negative margins you were using */
      }

      .guidance {
        position: absolute; /* <-- removed from layout */
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); /* <- key line */
        display: flex;
        justify-content: space-between;
        align-items: center;
        /*pointer-events: none; /* taps go to content underneath */
        z-index: 2; /* over the altar image */
        width: 95vw;
        & .arrows {
          height: 10vh;
        }
        & .arrow-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          padding: 15px;
          box-sizing: border-box;
          h3 {
            margin: 0;
          }
        }
        & .arrows.flipped {
          transform: rotateY(180deg);
        }
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'wedding-party-page': WeddingPartyPage;
  }
}
