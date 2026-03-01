import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { buttonStyles, paragraphStyle } from './styles';

@customElement('registry-page')
export class RegistryPage extends LitElement {
  render() {
    return html`
      <div class="page-container">
        <img id="fixed-background-image" src="/registry-background.png" />
        <h1>Our Registries</h1>
        <div class="registry-cards">
          <a
            href="https://withjoy.com/annie-and-lucas-jun-26/registry"
            target="_blank"
            class="registry-card"
          >
            <img src="/withjoy-logo.webp" alt="WithJoy" class="registry-logo" />
            <p>View Our WithJoy Registry</p>
          </a>
          <a
            href="https://crateandbarrel.com/gift-registry/annie-thornton-and-lucas-jenkins/r7458811"
            target="_blank"
            class="registry-card"
          >
            <img src="/Crate-Barrel-logo.png" alt="Crate & Barrel" class="registry-logo" />
            <p>View Our Crate & Barrel Registry</p>
          </a>
        </div>
      </div>
    `;
  }

  static localStyles = css`
    .page-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 60vh;
      padding-top: 5vh;
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
      margin-bottom: 3vh;
      text-align: center;
    }

    .registry-cards {
      display: flex;
      flex-direction: row;
      gap: 2vw;
      align-items: stretch;
      justify-content: center;
      width: 100%;
      max-width: 60vw;
      padding: 0 1vw;
    }

    .registry-card {
      flex: 1;
      background-color: #ab99af;
      border-radius: 5px;
      padding: 3vh 2vw;
      text-decoration: none;
      color: inherit;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      text-align: center;
      transition: transform 0.2s ease;
      cursor: pointer;
    }

    .registry-card:hover {
      transform: translateY(-0.5vh);
    }

    .registry-logo {
      max-width: 15vw;
      height: 8vh;
      margin-bottom: 1.5vh;
      object-fit: contain;
    }

    .registry-card h2 {
      margin: 0 0 1vh 0;
      font-size: 2rem;
    }

    .registry-card p {
      margin: 0;
      font-size: 2rem;
    }

    @media (max-width: 1270px) {
      .page-container {
        justify-content: space-between;
        flex-direction: column;
      }

      h1 {
        margin-bottom: 4vh;
      }

      .registry-cards {
        flex-direction: column;
        max-width: 80vw;
        gap: 3vh;
      }

      .registry-card {
        padding: 3vh 4vw;
      }

      .registry-logo {
        max-width: 35vw;
        max-height: 6vh;
        margin-bottom: 1.5vh;
      }

      .registry-card h2 {
        font-size: 1.5rem;
        margin-bottom: 1vh;
      }

      .registry-card p {
        font-size: 1rem;
      }
    }
  `;
  static styles = [RegistryPage.localStyles, buttonStyles, paragraphStyle];
}

declare global {
  interface HTMLElementTagNameMap {
    'registry-page': RegistryPage;
  }
}
