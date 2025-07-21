import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { paragraphStyle } from './styles';

@customElement('getting-there')
export class GettingThere extends LitElement {
  render() {
    return html`
      <div class="page-container">
        <img id="fixed-background-image" src="/travel-background.png" />
        <h1>Getting to Marin</h1>
        <div class="content">
          <p>For those flying in for the wedding, the most convenient airports are:</p>
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
            All of these airports are roughly a 40-60 minute drive from downtown San Rafael.
            <a href="https://maps.app.goo.gl/R3VRAkSydBbWBuhr8" target="_blank"
              >San Jose International Airport</a
            >
            is a reasonable option if the flights are more convenient; it adds about 20-30 minutes
            to the drive. To get from the airport to Marin, we recommend renting a car or using
            Uber/Lyft.
          </p>
          <p>
            If you prefer public transportation, the
            <a href="https://www.marinairporter.com/" target="_blank">Marin Airporter</a> has
            service from SFO to San Rafael, although it does not stop downtown.
            <a href="https://groometransportation.com/sonoma-county/sfo-oak/" target="_blank"
              >Groome Transportation</a
            >
            has service from the Oakland airport to downtown San Rafael.
          </p>
        </div>
        <h1>Getting to the wedding</h1>
        <div class="content">
          <p>
            The wedding and reception will be at:
            <br />
            <a
              href="https://maps.app.goo.gl/6dA7DkMBPako2Hr58"
              target="_blank"
              rel="noopener noreferrer"
              >Deer Park Villa</a
            >
            <br />
            367 Bolinas Rd
            <br />
            Fairfax, CA 94930.
          </p>
          <p>
            On the day of the wedding, shuttles wil be available between the hotel block in downtown
            San Rafael and the venue.
          </p>
          <p>
            If you prefer to find your own way to and from the wedding, Deer Park has a large
            parking lot.
          </p>
          <p>
            If you plan to partake in our open bar and can't take the shuttle, Fairfax has Uber and
            Lyft available to get you home.
          </p>
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
    }
  `;
  static styles = [GettingThere.localStyles, paragraphStyle];
}

declare global {
  interface HTMLElementTagNameMap {
    'getting-there': GettingThere;
  }
}
