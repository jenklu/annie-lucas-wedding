import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { paragraphStyle } from './styles';

@customElement('lodging-page')
export class LodgingPage extends LitElement {
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
            This hotel is a 10 minute drive from the wedding venue, and the buses on wedding day
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
  `;
  static styles = [LodgingPage.localStyles, paragraphStyle];
}

declare global {
  interface HTMLElementTagNameMap {
    'lodging-page': LodgingPage;
  }
}
