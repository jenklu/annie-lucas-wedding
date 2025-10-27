import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { paragraphStyle } from './styles';

@customElement('dress-code')
export class DressCode extends LitElement {
  render() {
    return html`
      <div class="page-container">
        <img id="fixed-background-image" src="/dress-code-background.jpg" />
        <h1>Dress Code</h1>
        <div class="content">
          <p>
            The dress code for the wedding is Garden Formal. We are excited to share the special day
            with everyone and care more about your presence than your attire.
          </p>
          <p>Here are some suggestions for attire:</p>
          <p>Men: Any color suit and tie.</p>
          <p>
            Ladies: Mid- to floor-length dresses or dressy jumpsuits. Note that some areas of Deer
            Park Villa have gravel, so stiletto heels may be uncomfortable. Please reserve the color
            white for the bride.
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
  static styles = [DressCode.localStyles, paragraphStyle];
}

declare global {
  interface HTMLElementTagNameMap {
    'dress-code': DressCode;
  }
}
