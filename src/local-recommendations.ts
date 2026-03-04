import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { paragraphStyle } from './styles';

interface Recommendation {
  name: string;
  url: string;
  description?: string;
  /** Extra inline links within the description, rendered via raw HTML */
  descriptionHtml?: string;
}

interface Region {
  label: string;
  key: string;
  color: string;
  items: Recommendation[];
}

const REGIONS: Region[] = [
  {
    label: 'Marin',
    key: 'marin',
    color: 'rgba(103, 114, 72, 0.7)',
    items: [
      {
        name: 'Marin Headlands',
        url: 'https://www.nps.gov/goga/marin-headlands.htm',
        description:
          'A great place for views of the Golden Gate Bridge and Pacific Ocean. Parking can be tough to find but on a clear day the views are worth it!',
      },
      {
        name: 'Sol Food',
        url: 'https://www.solfoodrestaurant.com/',
        description:
          'A San Rafael staple for Puerto Rican food, in walking distance from the hotel block. ',
      },
      {
        name: 'Muir Woods',
        url: 'https://maps.google.com/?cid=8862899857279397881',
        description:
          'Walk through some of the tallest redwood trees in the world in this National Monument. Be sure to reserve parking in advance!',
      },
      {
        name: 'Sausalito',
        url: 'https://maps.google.com/?cid=13331686709265388014',
        descriptionHtml:
          'Walk around this cute town on the water. Grab a casual lunch or dinner at the <a href="https://maps.google.com/?cid=18267045352387921145" target="_blank" rel="noopener">Joinery</a> for great views of the bay.',
      },
      {
        name: 'Point Reyes National Seashore',
        url: 'https://www.nps.gov/pore/index.htm',
        description:
          "If you're up for a drive, head out to the National Seashore. There are great hiking options with some of the most impressive views of the Pacific you'll ever find. You have a great chance of seeing Tule Elk walking around, too.",
      },
    ],
  },
  {
    label: 'San Francisco',
    key: 'sf',
    color: 'rgba(191, 53, 43, 0.7)',
    items: [
      {
        name: 'Crissy Field / Palace of Fine Arts',
        url: 'https://maps.google.com/?cid=6563311607205213696',
        descriptionHtml:
          'Retrace one of Lucas and Annie\'s go-to COVID walks to get great views of the Golden Gate Bridge and take in the architecture of the <a href="https://maps.google.com/?cid=16816682395831545077" target="_blank" rel="noopener">Palace of Fine Arts</a>.',
      },
      {
        name: 'Presidio Golf Course',
        url: 'https://www.presidiogolf.com/',
        description:
          "For hilly golf and striking Eucalyptus trees, check out Lucas's favorite golf course!",
      },
      {
        name: 'Alcatraz Island',
        url: 'https://www.nps.gov/alca/planyourvisit/fees.htm',
        description:
          "Book tickets to catch a ferry and tour of the infamous prison. This was one of Annie's favorite field trip locations.",
      },
      {
        name: 'Philz Coffee',
        url: 'https://maps.google.com/?cid=532150655863087825',
        description:
          'A Bay Area staple with multiple locations, try Annie and Lucas\'s favorite drink: the iced Mint Mojito (ask for it "slightly sweet" if you like less sugar).',
      },
      {
        name: 'California Academy of Sciences',
        url: 'https://www.calacademy.org/',
        description:
          'A natural history and science museum with exhibits for all ages. A great jumping off point for a walk around Golden Gate Park.',
      },
    ],
  },
  {
    label: 'Sonoma',
    key: 'sonoma',
    color: 'rgba(171, 153, 175, 0.8)',
    items: [
      {
        name: 'Sonoma Plaza',
        url: 'https://www.sonomavalley.com/things-to-do/attractions/sonoma-plaza/',
        descriptionHtml:
          "The historic downtown of Sonoma (California's famous Bear Flag was first raised " +
          'here), now a great place to stroll around and take in the old Spanish architecture. ' +
          "Aside from the shops and restaurants, a number of Annie's favorite wineries like " +
          '<a href="https://maps.google.com/?cid=8015915211475609111" target="_blank" rel="noopener">Roche Winery</a> ' +
          "(great outdoor seating if it's nice out) and " +
          '<a href="https://maps.google.com/?cid=11274371147951220506" target="_blank" rel="noopener">Capo Isetta</a> ' +
          "have tasting rooms on the Plaza. A great option if you don't have time to go all the way " +
          'out to a winery, and/or just want to grab a glass before dinner.',
      },
      {
        name: 'Sonoma Overlook Trail',
        url: 'https://maps.google.com/?cid=6967116480225380780',
        description:
          "A moderate 2.4 mile hike walking distance from the Sonoma Plaza. On a clear day you'll have great views all the way out to SF.",
      },
      {
        name: 'Jack London State Historic Park',
        url: 'https://maps.google.com/?cid=4708289339685166735',
        description:
          'Explore where the author wrote some of his most famous novels while hiking around his old ranch. Be sure to check out the Wolf House ruins.',
      },
      {
        name: 'Sunflower Caff\u00e9',
        url: 'https://maps.google.com/?cid=6254479687207296454',
        description:
          'The quintessential place to get brunch in Sonoma. Sit in their back patio and fill up before wine tasting.',
      },
      {
        name: 'Bartholomew Park',
        url: 'https://maps.google.com/?cid=12383746258367724390',
        description:
          'A beautiful park/winery with dog friendly hiking trails and wine tastings in their gorgeous Oak Knoll.',
      },
      {
        name: 'Jacuzzi Family Vineyards',
        url: 'https://maps.google.com/?cid=1828706738933553106',
        description:
          "A winery that specializes in Italian varietals, located directly across the highway from their sister winery, Cline Cellars. Annie's dad has been a member for years and keeps Lucas and Annie stocked up with great Jacuzzi wine.",
      },
      {
        name: 'Sonoma Valley Wine Trolley',
        url: 'https://maps.google.com/?cid=5019831534397871204',
        description:
          "A fun way to tour Sonoma's wineries without having to worry about organizing your own transportation.",
      },
      {
        name: 'Sonoma Valley Inn',
        url: 'https://maps.google.com/?cid=7968055047677806634',
        description:
          'Just steps from the Sonoma Plaza, this is a convenient and affordable hotel option.',
      },
    ],
  },
];

@customElement('local-recommendations')
export class LocalRecommendations extends LitElement {
  @state() private _activeRegion: string = 'marin';

  private get _region(): Region {
    return REGIONS.find((r) => r.key === this._activeRegion) ?? REGIONS[0];
  }

  private _setRegion(key: string) {
    this._activeRegion = key;
  }

  render() {
    const region = this._region;

    return html`
      <div class="page-container">
        <img id="fixed-background-image" src="/local-recommendations-background.png" />
        <h1>Local Recommendations</h1>

        <div class="tabs" style="--active-color: ${region.color}">
          ${REGIONS.map(
            (r) => html`
              <button
                class="tab ${r.key === this._activeRegion ? 'active' : ''}"
                style="${r.key === this._activeRegion ? `--tab-color: ${r.color}` : ''}"
                @click="${() => this._setRegion(r.key)}"
              >
                ${r.label}
              </button>
            `
          )}
        </div>

        <div class="cards" style="--region-color: ${region.color}">
          ${region.items.map(
            (item) => html`
              <div class="card">
                <h2>${item.name}</h2>
                ${item.descriptionHtml
                  ? html`<p .innerHTML="${item.descriptionHtml}"></p>`
                  : html`<p>${item.description}</p>`}
                <a class="maps-link" href="${item.url}" target="_blank" rel="noopener">
                  More info
                </a>
              </div>
            `
          )}
        </div>
      </div>
    `;
  }

  static localStyles = css`
    :host {
      display: block;
    }

    .page-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 1rem 3rem;
      max-width: 600px;
      margin: 0 auto;
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
      margin-bottom: 1.5rem;
      text-align: center;
    }

    /* --- Tabs --- */
    .tabs {
      display: flex;
      width: 100%;
      gap: 0;
      margin-bottom: 1.5rem;
      border-bottom: 2px solid #ddd;
    }

    .tab {
      flex: 1;
      background: none;
      border: none;
      font-family: inherit;
      font-size: 1.2rem;
      padding: 0.6rem 0.5rem;
      cursor: pointer;
      color: #666;
      border-bottom: 3px solid transparent;
      transition:
        color 0.2s,
        border-color 0.2s;
      margin-bottom: -2px;
    }

    .tab.active {
      color: var(--tab-color, #333);
      border-bottom-color: var(--tab-color, #333);
      font-weight: 600;
    }

    /* --- Cards --- */
    .cards {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
    }

    .card {
      background-color: var(--region-color, #ab99af);
      border-radius: 8px;
      padding: 1.2rem 1rem;
      animation: fadeInCard 0.25s ease-out;
    }

    @keyframes fadeInCard {
      from {
        opacity: 0;
        transform: translateY(6px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .card h2 {
      margin: 0 0 0.5rem;
      font-size: 1.25rem;
      color: #fff;
      font-weight: 600;
    }

    .card p {
      margin: 0 0 0.75rem;
      color: #f5f5f5;
      line-height: 1.5;
      text-align: left;
    }

    .card p a {
      color: #fff;
      font-weight: 600;
    }

    .maps-link {
      display: inline-block;
      background: rgba(255, 255, 255, 0.2);
      color: #fff;
      text-decoration: none;
      font-family: 'EB Garamond', sans-serif;
      font-size: 0.95rem;
      padding: 0.35rem 0.75rem;
      border-radius: 5px;
      transition:
        background 0.15s,
        transform 0.15s;
    }

    .maps-link:hover,
    .maps-link:active {
      background: rgba(255, 255, 255, 0.35);
    }

    /* Desktop: allow slightly wider */
    @media (min-width: 1270px) {
      .page-container {
        max-width: 700px;
      }
    }
  `;

  static styles = [LocalRecommendations.localStyles, paragraphStyle];
}

declare global {
  interface HTMLElementTagNameMap {
    'local-recommendations': LocalRecommendations;
  }
}
