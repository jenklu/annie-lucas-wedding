import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import "./wedding-navbar";
import "./entry-page";
import "./main.css";

const IMAGE_PATH = "/engagement-photos/";

const allImageNames: string[] = [
  "DSC00784-AH Portraits.jpg",
  "DSC00786-AH Portraits.jpg",
  "DSC00771-AH Portraits.jpg",
  "DSC00807-AH Portraits.jpg",
  "DSC00996-AH Portraits.jpg",
  "DSC01105-AH Portraits.jpg",
  "DSC01131-AH Portraits.jpg",
  "DSC01157-AH Portraits.jpg",
  "DSC00879-AH Portraits.jpg",
  "DSC00931-AH Portraits.jpg",
  "DSC01008-AH Portraits.jpg",
  "DSC01037-AH Portraits.jpg",
  "DSC01117-AH Portraits.jpg",
  "DSC00773-AH Portraits.jpg",
  "DSC00787-AH Portraits.jpg",
  "DSC00813-AH Portraits.jpg",
  "DSC00920-AH Portraits.jpg",
  "DSC00950-AH Portraits.jpg",
  "DSC00956-AH Portraits.jpg",
  "DSC00804-AH Portraits.jpg",
  "DSC00808-AH Portraits.jpg",
  "DSC00839-AH Portraits.jpg",
  "DSC00899-AH Portraits.jpg",
  "DSC00791-AH Portraits.jpg",
  "DSC00830-AH Portraits.jpg",
  "DSC00831-AH Portraits.jpg",
  "DSC00842-AH Portraits.jpg",
  "DSC00896-AH Portraits.jpg",
  "DSC00917-AH Portraits.jpg",
  "DSC00772-AH Portraits.jpg",
  "DSC00872-AH Portraits.jpg",
  "DSC00960-AH Portraits.jpg",
  "DSC00992-AH Portraits.jpg",
  "DSC01153-AH Portraits.jpg",
  "DSC00867-AH Portraits.jpg",
  "DSC00984-AH Portraits.jpg",
  "DSC01016-AH Portraits.jpg",
  "DSC01029-AH Portraits.jpg",
  "DSC01033-AH Portraits.jpg",
  "DSC01161-AH Portraits.jpg",
  "DSC00853-AH Portraits.jpg",
  "DSC00862-AH Portraits.jpg",
  "DSC00864-AH Portraits.jpg",
  "DSC00999-AH Portraits.jpg",
  "DSC01106-AH Portraits.jpg",
  "DSC00859-AH Portraits.jpg",
  "DSC00919-AH Portraits.jpg",
  "DSC01034-AH Portraits.jpg",
  "DSC01076-AH Portraits.jpg",
  "DSC01113-AH Portraits.jpg",
  "DSC01125-AH Portraits.jpg",
  "DSC01004-AH Portraits.jpg",
  "DSC01024-AH Portraits.jpg",
  "DSC01043-AH Portraits.jpg",
  "DSC01147-AH Portraits.jpg",
  "DSC00811-AH Portraits.jpg",
  "DSC00922-AH Portraits.jpg",
  "DSC00934-AH Portraits.jpg",
  "DSC01017-AH Portraits.jpg",
  "DSC01080-AH Portraits.jpg",
  "DSC01123-AH Portraits.jpg",
  "DSC00936-AH Portraits.jpg",
  "DSC01015-AH Portraits.jpg",
  "DSC01104-AH Portraits.jpg",
  "DSC00847-AH Portraits.jpg",
  "DSC01000-AH Portraits.jpg",
  "DSC01031-AH Portraits.jpg",
  "DSC01145-AH Portraits.jpg",
  "DSC01079-AH Portraits.jpg",
  "DSC01143-AH Portraits.jpg",
];
/**
 * The engagement photos view
 *
 */
@customElement("engagement-photos")
export class EngagementPhotos extends LitElement {
  render() {
    return html`
      <wedding-navbar></wedding-navbar>
      <div class="photo-grid">
        ${allImageNames.map(
          (fileName) => html`
            <img
              src="${IMAGE_PATH}${fileName}"
              alt="${fileName}"
              loading="lazy"
            />
          `
        )}
      </div>
    `;
  }

  static styles = css`
    .photo-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
      gap: 10px;
      padding: 10px;
    }

    .photo-grid img {
      width: 100%;
      height: auto;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 500px) {
      .photo-grid {
        grid-template-columns: repeat(auto-fill, 100%);
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "engagement-photos": EngagementPhotos;
  }
}
