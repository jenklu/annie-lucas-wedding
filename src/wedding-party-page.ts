import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import './wedding-party-card';

const BRIDESMAIDS = Array.from({ length: 9 }).map((_, i) => ({
  name: `Name ${i + 1}`,
  title: 'Bridesmaid',
  headshot: '/tab-image-ghibli.png',
  description: html`
    <p>
      Laura and Annie met on their very first day at UCLA and lived on the same dorm floor (shoutout
      HH2N) their freshman year. It quickly became clear that Annie had met her match, Laura was
      just as loud and talkative, if not more (the subject of many HH2N debates), as Annie herself.
    </p>
    <p>
      At UCLA, Laura and Annie went on to join the same sorority and later became roommates. Laura
      had a front row seat to Annie and Lucas's relationship from the very beginning. She played a
      pivotal role in planning their college pinning, engagement, and now their wedding.
    </p>
  `,
}));

const GROOMSMEN = Array.from({ length: 9 }).map((_, i) => ({
  name: `Name ${i + 1}`,
  title: 'Groomsman',
  headshot: '/tab-image-ghibli.png',
  description: html`
    <p>
      Laura and Annie met on their very first day at UCLA and lived on the same dorm floor (shoutout
      HH2N) their freshman year. It quickly became clear that Annie had met her match, Laura was
      just as loud and talkative, if not more (the subject of many HH2N debates), as Annie herself.
    </p>
    <p>
      At UCLA, Laura and Annie went on to join the same sorority and later became roommates. Laura
      had a front row seat to Annie and Lucas's relationship from the very beginning. She played a
      pivotal role in planning their college pinning, engagement, and now their wedding.
    </p>
  `,
}));

@customElement('wedding-party-page')
export class WeddingPartyPage extends LitElement {
  scrollToAltarCenter() {
    const altarImg = this.renderRoot.querySelector('.altar') as HTMLImageElement | null;
    const scrollContainer = this.renderRoot.querySelector(
      '.scroll-bg-container'
    ) as HTMLElement | null;

    if (altarImg && scrollContainer) {
      const scrollToCenter = () => {
        console.log('scrolling to center');
        const scrollTo =
          altarImg.offsetLeft + altarImg.offsetWidth / 2 - scrollContainer.clientWidth / 2;
        scrollContainer.scrollTo({ left: scrollTo, behavior: 'smooth' });
      };

      if (altarImg.complete) {
        scrollToCenter();
      } else {
        altarImg.addEventListener('load', scrollToCenter, { once: true });
      }
    } else {
      console.log(`altarImg: ${altarImg} scrollContainer: ${scrollContainer}`);
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
                ></wedding-party-card>
              `
            )}
            <img class="altar" src="/altar.png" alt="Altar with drapes & greenery" />
            ${GROOMSMEN.map(
              (member) => html`
                <wedding-party-card
                  .name=${member.name}
                  .title=${member.title}
                  .headshot=${member.headshot}
                  .description=${member.description}
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
      overflow-x: auto;
      overflow-y: hidden;
      box-sizing: border-box;
      /* Hide scrollbar for Chrome, Safari and Opera */
      z-index: -1;
    }

    .bg-content {
      position: relative;
      width: max-content;
      height: 100%;
      min-width: 100vw;
    }
    .altar {
      margin-left: -15vw;
      margin-right: -15vw;
      z-index: -1;
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
    @media (max-width: 1270px) {
      .party-scroll {
        margin-top: 27vh;
        height: 65vh;
      }
      .altar {
        margin-left: -50vw;
        margin-right: -50vw;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'wedding-party-page': WeddingPartyPage;
  }
}
