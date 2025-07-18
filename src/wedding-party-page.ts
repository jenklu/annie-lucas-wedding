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
      <p>
        Despite photo evidence that they first met in a 2003 local ballet production of Coppelia,
        Gel and Annie truly became friends in 8th grade. Although they attended different middle
        schools, they were in the same Advanced Geometry class held early mornings at Sonoma Valley
        High. This means Lucas is actually the second important person to have come into Annie’s
        life because of a math class.
      </p>
      <p>
        Their friendship was cemented into a lifelong bond in the following years when they attended
        high school together. Senior year, when Gel’s family moved to Virginia, she moved into
        Annie’s house to finish out the school year in Sonoma. To this day, Annie’s parents enjoy
        bragging about the accomplishments of their second daughter, she’s a doctor!
      </p>
    `,
  },
  {
    name: 'Ciara Smith',
    title: 'Bridesmaid',
    headshot: '/bridal-party/ciara-cropped.jpg',
    description: html`
      <p>
        Ciara is Annie’s oldest friend. The pair met in preschool where Annie forced her friendship
        on Ciara because they had the same PowerPuff Girls lunchbox. Ciara recently tracked down and
        bought the exact lunchbox for Annie as a birthday present.
      </p>
      <p>
        Throughout their childhood, Ciara and Annie went to the same schools, played on the same
        youth sports teams, and were never far apart. They were always the two tallest girls in
        their class. With Ciara standing a few inches taller than Annie, they’ve been making boys
        feel short since 2000 (sorry Lucas). Don’t ask her the stereotypical “Do you play
        basketball?”, but as a contributor and podcast host for a basketball magazine, Ciara
        probably does know more about the game than you.
      </p>
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
      <p>
        While they were on the same soccer team in K-2nd grade, Lucas and Oliver didn't become
        friends until early in high school.
      </p>
      <p>
        They initially connected over hip-hop, weightlifting, and Call of Duty, and their friendship
        grew over trips to Harvard Square, pickup basketball/tennis, and the shared trauma of AP Bio
        lab reports.
      </p>
      <p>
        After high school, Lucas moved out to California while Oliver stayed in Boston, but they
        stayed in close touch. One of their best together was when Lucas and Annie visited Oliver in
        Tokyo and he took them on a 20k step walking tour through the city.
      </p>
      <p>
        Lucas enjoys Oliver's quick wit and book recommendations, even if he takes a while to read
        them.
      </p>
    `,
  },
  {
    name: 'Alex Drabkin',
    title: 'Officiant',
    headshot: '/bridal-party/alex-cropped.jpg',
    description: html`
      <p>
        Alex has the unique honor of being roommates with both the groom AND the bride: Alex and
        Lucas lived together for the first two years of the couple's relationship. Alex actually
        sent a Venmo request to Annie for rent once because she spent so much time at their frat
        house.
      </p>
      <p>
        Alex and Lucas initially bonded over their efforts to get their fraternity out of debt. They
        found themselves agreeing often as they pleaded their case for frugality to the rest of the
        fraternity.
      </p>
      <p>
        Lucas appreciates the variety of outdoor activities Alex partakes in and his ability to
        motivate others to join in these activities. He often recalls fondly the Spartan Race they
        prepared for: having a legitimate excuse to use the monkey bars next to the UCLA track to
        train was debatably more satifsying than actually finishing the race.
      </p>
    `,
  },
  {
    name: 'Andrew Kolodziej',
    title: 'Groomsman',
    headshot: '/bridal-party/kolo-cropped.jpg',
    description: html`
      <p>
        As with most of his Lucas' UCLA friends, drinking games and UCLA sports were the bedrock of
        Lucas and Andrew's friendship. Their friendship really blossomed when they lived together
        during their senior year at UCLA.
      </p>
      <p>
        Although they really grew close during senior year, they've been able to keep their
        long-distance friendship going with frequent meetups: San Francisco, LA, Temecula, Austin,
        and Philadelphia. They've been able to get 18 holes in during most of those trips.
      </p>
      <p>
        Lucas' favorite memory with "Kolo" was probably their first night in Austin, where Kolo was
        Lucas' local guide in his home state. Kolo started the night off at a Par 3 course with
        glow-in-the-dark balls, proceeded on to some great Tex-Mex, and ended the night by shutting
        down 6th Street. Night golf, good tacos, and live music are hard to beat!
      </p>
    `,
  },
  {
    name: 'Ben Hunter',
    title: 'Groomsman',
    headshot: '/bridal-party/ben-hunter-cropped.jpg',
    description: html`
      <p>
        Ben was Lucas' "little bro" in their fraternity. Despite standing 5+" taller than Lucas, Ben
        has felt in many ways like the little brother that Lucas often pleaded with his parents for
        as a kid.
      </p>
      <p>
        After college, Lucas moved to San Francisco, and frequently hung out with Ben when he
        visited his home back in Marin County. Ask Ben for local recommendations if you're coming
        from out of town!
      </p>
      <p>
        Lucas and Ben continue to bond over their Dead & Co. fandom, UCLA sports, and occasional
        rounds of golf. Lucas often thinks back to watching John Mayer and Bob Weir shred as the sun
        set on a beautiful LA night at the Hollywood Bowl with Ben.
      </p>
    `,
  },
  {
    name: 'Spencer Weissman',
    title: 'Groomsman',
    headshot: '/bridal-party/spencer-cropped.jpg',
    description: html`
      <p>
        Spencer and Lucas quickly hit it off as the only two East Coast Jews in a West Coast
        fraternity pledge class. Although Spencer is a New Yorker, Lucas found him easier to like
        after learning he was a Pittsburgh fan and not a Yankee/Giant fan.
      </p>
      <p>
        Their friendship today thrives on golf and UCLA sports. Spencer is the better golfer, but
        Lucas has gotten the better of him in most of their matches, even though he swears he's not
        sandbagging.
      </p>
      <p>
        Lucas appreciates Spencer's loyalty and willingness to always help out his close friends.
        Lucas relishes the memory of watching Mac Jones beat Spencer's Steelers at Heinz Field after
        a great golf day.
      </p>
    `,
  },
  {
    name: 'Solomon Mankin',
    title: 'Groomsman',
    headshot: '/bridal-party/sol-cropped.jpg',
    description: html`
      <p>
        Solomon and Lucas met in Little League and have been friends ever since. Lucas helped
        convince Solomon to move to New York a few years ago and since then they've made the most of
        their time in the city together, taking the Manhattan and Brooklyn bars by storm.
      </p>
      <p>
        Solomon is the life of every party he attends, and Lucas appreciates his "fun guy" attitude.
        One of Lucas' favorite nights out with Solomon was when he took over the drumset at a live
        band's show in Boston and adeptly filled in for a couple songs. He's excited to see what
        dance moves Solomon pulls out in California.
      </p>
    `,
  },
  {
    name: 'Ben Wu',
    title: 'Groomsman',
    headshot: '/bridal-party/ben-wu-cropped.jpg',
    description: html`
      <p>
        Ben has been one of Lucas' closest friends since middle school. He joined Lucas in NYC
        shortly after Solomon moved down. While Ben and Lucas still haven't been able to figure out
        their schedules to grab lunch even though their offices are on the same block, they make a
        point of seeing each other regularly on the weekends.
      </p>
      <p>
        Sports are at the center of Ben and Lucas' friendship. Aside from nights out with Solomon,
        they spend most of their time together playing pickup basketball at Thompkins Square Park in
        NYC, trading championships in their fantasy football league, watching the Celtics / Patriots
        together, or reminiscing on their high school football careers.
      </p>
    `,
  },
  {
    name: 'Daniel Quinn',
    title: 'Groomsman',
    headshot: '/bridal-party/dq-cropped.jpg',
    description: html`
      <p>
        Lucas and Daniel (or DQ, as high school friends affectionately refer to him) have been
        friends since elementary school.
      </p>
      <p>
        One of Lucas' favorite memories with DQ was the last day of a Las Vegas trip just after
        turning 21. Fed up with the strip after 7 too-long and too-hot days, Lucas and DQ rented a
        car and drove out to the Hoover Dam, an American engineering marvels. The weather wasn't any
        better, but it was nice to get off the strip and see a real work of infrastructure.
      </p>
      <p>
        DQ may come in last in the fantasy football league every year, but Lucas appreciates his
        willingness to stay in the league and give it the old college try.
      </p>
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
