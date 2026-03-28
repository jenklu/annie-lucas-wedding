import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { paragraphStyle } from './styles';

@customElement('lodging-page')
export class LodgingPage extends LitElement {
  @state() private parkingExpanded = false;

  render() {
    return html`
      <div class="page-container">
        <img id="fixed-background-image" src="/lodging-background.png" />
        <h1>Hotel Block</h1>
        <div class="content">
          <p>
            We have reserved a room block for Friday, June 19 and Saturday, June 20 at the
            <a
              href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1753291997435&key=GRP&app=resvlink"
              target="_blank"
            >
              AC Marriott San Rafael Downtown </a
            >. Please make sure you have entered the Group Code ALWALWA when booking to get the best
            rate.
            <a
              href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1753291997435&key=GRP&app=resvlink"
              target="_blank"
              >This link</a
            >
            will include the group code.
          </p>
          <p>
            This hotel is a 15 minute drive from the wedding venue, and the buses on wedding day
            will depart from and return to the hotel. In the heart of downtown San Rafael, it's a
            short walk from the welcome party location as well as shops, cafes, and restaurants.
          </p>
          <p>
            <strong
              >If you know you would like to stay in the room block, we encourage you to book as
              early as possible.</strong
            >
            We can expand the room block if it starts to fill up, but it becomes more difficult to
            do so as the wedding date approaches.
          </p>
          <div class="parking-section">
            <div class="parking-inline">
              <strong>Parking Options:</strong>
              <span class="dot">·</span>
              <a
                href="https://www.marriott.com/en-us/hotels/sfoar-ac-hotel-san-rafael-downtown/overview/"
                target="_blank"
                >Hotel Parking</a
              >
              <span class="dot">·</span>
              <a
                href="https://www.cityofsanrafael.org/downtown-parking-locations-costs/"
                target="_blank"
                >City Garages</a
              >
              <span class="dot">·</span>
              <button
                class="parking-toggle"
                @click="${() => (this.parkingExpanded = !this.parkingExpanded)}"
              >
                More Info ${this.parkingExpanded ? '▾' : '◂'}
              </button>
            </div>
            ${this.parkingExpanded
              ? html`
                  <div class="parking-detail">
                    <p>
                      <strong>On-site (AC Hotel):</strong> Covered parking is available for
                      approximately $29–$30 per day. Limited spaces — bottom lot 30, top lot 20.
                    </p>
                    <p>
                      <strong
                        ><a
                          href="https://www.cityofsanrafael.org/downtown-parking-locations-costs/#/maps-1/map/parking-garage/details/4958"
                          target="_blank"
                          >A Street Parking Garage</a
                        ></strong
                      >
                      (3 min walk) — 951 A St, San Rafael, CA 94901<br />
                      $1/hr, $10 daily max. Enter/exit on B St (one-way) or A St. Pay at the walk-up
                      pay station before leaving. EV charging on level 1.
                    </p>
                    <p>
                      <strong
                        ><a
                          href="https://www.cityofsanrafael.org/downtown-parking-locations-costs/#/maps-1/map/parking-garage/details/4889"
                          target="_blank"
                          >C Street Parking Garage</a
                        ></strong
                      >
                      (3 min walk) — 977 C St, San Rafael, CA 94901<br />
                      $1/hr, $10 daily max. Enter/exit on B St (one-way) or C St. Pay at the walk-up
                      pay station before leaving. EV charging on level 1.
                    </p>
                    <p>
                      <strong>Overnight parking:</strong> For 1–3 nights, you may park in the A or C
                      Street garages for $10/day. Parking is not allowed in the same spot for more
                      than 72 hours.
                    </p>
                    <p>
                      <strong>Weekend &amp; holiday note:</strong> City-owned lots and street
                      parking are <strong>free on Sundays and holidays</strong>. Friday, June 19 is
                      a City of San Rafael holiday — city lots will be free that day. Saturday
                      parking is enforced 8:00 am – 6:00 pm.
                    </p>
                  </div>
                `
              : ''}
          </div>
        </div>
        <h1>Other Options</h1>
        <div class="content">
          <p>
            Marin County has numerous accommodations, including AirBnBs and hotels. One piece of
            advice: while the Point Reyes area near the ocean is beautiful, the roads between Deer
            Park Villa and Point Reyes can be challenging to navigate at night, so at least for the
            night of the wedding, we would recommend staying in Fairfax or along the 101 corridor.
          </p>
          <p>
            This is far from an exhaustive list and we encourage you to look around, but a couple
            convenient options aside from the AC Marriott are:
          </p>
          <ul>
            <li>
              <a href="https://www.hotelfairfaxinn.com/">The Fairfax Inn</a>: A cute, clean motel
              located in downtown Fairfax. Just a half mile from the wedding venue and right next
              door to the after-party, this 12-room motel will be an extremely convenient option.
            </li>
            <li>
              <a
                href="https://www.marriott.com/en-us/hotels/sfoll-courtyard-san-francisco-larkspur-landing-marin-county/overview"
                >The Courtyard Marriott San Francisco Larkspur Landing</a
              >: Your standard Courtyard Marriott. About 15-20m from the wedding venue.
            </li>
          </ul>
        </div>
        <div class="roll-container">
          <img
            src="/roll.png"
            class="roll"
            @click="${() => window.location.assign('https://latlmes.com/breaking/dinner-rolls-1')}"
          />
        </div>
      </div>
    `;
  }

  static localStyles = css`
    .page-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    #fixed-background-image {
      position: fixed;
      inset: 0;
      height: 100vh;
      width: 100vw;
      object-fit: cover;
      z-index: -1;
      animation: fadeIn 1s ease-in forwards;
    }

    h1 {
      color: #333;
      margin-bottom: 2rem;
      text-align: center;
    }

    .content {
      margin-bottom: 3rem;
      background-color: #ab99af;
      border-radius: 5px;
      padding: 1rem;
      width: 75vw;
      & strong {
        font-weight: 700;
      }
    }
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    .parking-section {
      margin-top: 1rem;
    }
    .parking-inline {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      align-items: center;
      justify-content: center;
      font-family: 'EB Garamond', sans-serif;
      font-weight: 300;
    }
    .dot {
      color: rgba(0, 0, 0, 0.4);
    }
    .parking-toggle {
      font-family: 'EB Garamond', sans-serif;
      font-weight: 300;
      font-size: inherit;
      padding: 0.1em 0.5em;
      border-radius: 999px;
      border: 1px solid rgba(0, 0, 0, 0.3);
      background: rgba(255, 255, 255, 0.25);
      cursor: pointer;
    }
    .parking-toggle:hover {
      background: rgba(255, 255, 255, 0.4);
    }
    .parking-detail {
      margin-top: 0.75rem;
      padding-top: 0.75rem;
      border-top: 1px solid rgba(0, 0, 0, 0.2);
      text-align: left;
    }
    .parking-detail p {
      margin: 0.5rem 0;
      text-align: left;
    }
    .roll-container {
      align-self: flex-end;
      padding-right: 8px;
      padding-bottom: 8px;
    }
    .roll {
      height: 15px;
      animation-name: spin;
      animation-duration: 2000ms; /* Adjust for desired speed */
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  `;
  static styles = [LodgingPage.localStyles, paragraphStyle];
}

declare global {
  interface HTMLElementTagNameMap {
    'lodging-page': LodgingPage;
  }
}
