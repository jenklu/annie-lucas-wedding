import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('getting-there')
export class GettingThere extends LitElement {
  render() {
    return html`
      <div class="page-container">
        <img id="fixed-background-image" src="/travel-background.png" />
        <h1>Getting to Marin</h1>
        <div class="content">
          For those traveling from out of town, the easiest airports to fly into are:
          <ul>
            <li>
              <a href="https://maps.app.goo.gl/KL4C2Sko4GpVMWUA6" target="_blank"
                >SFO (San Francisco International Airport)</a
              >
            </li>
            <li>
              <a href="https://maps.app.goo.gl/sbuz8zpL9jskiLEm7" target="_blank"
                >OAK (Oakland International Airport)</a
              >
            </li>
            <li>
              <a href="https://maps.app.goo.gl/UKrhrx5VpdiHE33z5" target="_blank"
                >STS (Sonoma County Airport)</a
              >
            </li>
          </ul>
          <p>
            These airports are roughly a 40-60 minute drive from downtown San Rafael.
            <a href="https://maps.app.goo.gl/R3VRAkSydBbWBuhr8" target="_blank"
              >San Jose International Airport</a
            >
            could also be a reasonable option if the flights are more convenient, it adds 20-30
            minutes to the drive. The easiest way to get to Marin from the airport is to Uber/Lyft
            or rent a car.
          </p>
          <p>
            If you prefer public transportation, the
            <a href="https://www.marinairporter.com/" target="_blank">Marin Airporter</a> also has
            service to San Rafael, although it does not stop downtown.
          </p>
        </div>
        <h1>Getting to the wedding</h1>
        <div class="content">
          <p>
            The wedding will be held at
            <a
              href="https://maps.app.goo.gl/6dA7DkMBPako2Hr58"
              target="_blank"
              rel="noopener noreferrer"
              >Deer Park Villa</a
            >, which is located at 367 Bolinas Rd, Fairfax, CA 94930. There will be buses to and
            from the hotel block in downtown San Rafael to the venue.
          </p>
          <p>
            Fairfax is full of windy roads which can be difficult for out-of-towners to navigate. As
            such, if you do not plan to take the bus, we encourage you to travel to the wedding via
            rideshare so we can make the most of our toasts 🥂🍻🍸
          </p>
        </div>
      </div>
    `;
  }

  static styles = css`
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
    /* :host {
      background-image: url('/travel-background.png');
      background-size: cover;
      background-repeat: no-repeat;
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      z-index: -1;
    } */
    h1 {
      color: #333;
      margin-bottom: 2rem;
    }

    .content {
      margin-bottom: 3rem;
      background-color: #ab99af;
      border-radius: 5px;
      padding: 1rem;
      width: 75vw;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'getting-there': GettingThere;
  }
}
