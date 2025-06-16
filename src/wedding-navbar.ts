import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import './tooltip';

/**
 * The navbar for the app
 *
 * @slot - This element has a slot
 */
@customElement('wedding-navbar')
export class WeddingNavbar extends LitElement {
  @state() private _activeTab: string = '';
  @state() private _activeSubtab: string = '';
  @state() private _expandedTabs: Set<string> = new Set();

  connectedCallback() {
    super.connectedCallback();
    this._setActiveFromHash();
    window.addEventListener('hashchange', this._setActiveFromHash);
  }
  disconnectedCallback() {
    window.removeEventListener('hashchange', this._setActiveFromHash);
    super.disconnectedCallback();
  }

  private _setActiveFromHash = () => {
    const hash = location.hash.replace(/^#\//, '');
    const [tab, subtab] = hash.split('/');
    this._activeTab = tab || '';
    this._activeSubtab = subtab || '';
    // When a tab becomes active, expand it
    if (tab) {
      this._expandedTabs.add(tab);
    }
    this.requestUpdate();
  };

  private _navigate(tab: string, subtab: string = '', disabled = false) {
    if (disabled) return;
    this._expandedTabs.clear();
    location.hash = `#/${tab}${subtab ? '/' + subtab : ''}`;
  }

  private _toggleSubtabs(tab: string) {
    if (this._expandedTabs.has(tab)) {
      this._expandedTabs.delete(tab);
    } else {
      this._expandedTabs.add(tab);
    }
    this.requestUpdate();
  }

  render() {
    // Map of unfinished pages (routes that do not exist yet)
    const unfinished: Record<string, boolean> = {
      rsvp: true,
      registry: true,
      'dress-code': true,
      travel: true, // parent, actual travel info main page doesn't exist
      lodging: true,
      'local-recommendations': true,
      'people-and-pics': true, // parent, people-and-pics landing doesn't exist
      'bride-groom': true,
      'wedding-party': true,
    };

    // Define your navigation structure (now includes "home" at front)
    const NAV = [
      { label: 'Home', key: 'home' },
      { label: 'RSVP', key: 'rsvp' },
      { label: 'Registry', key: 'registry' },
      { label: 'Schedule', key: 'schedule' },
      { label: 'Dress Code', key: 'dress-code' },
      {
        label: 'Travel',
        key: 'travel',
        subtabs: [
          { label: 'Lodging', key: 'lodging' },
          { label: 'Getting There', key: 'getting-there' },
          { label: 'Local Recommendations', key: 'local-recommendations' },
        ],
      },
      {
        label: 'People & Pics',
        key: 'people-and-pics',
        subtabs: [
          { label: 'Bride & Groom', key: 'bride-groom' },
          { label: 'Wedding Party', key: 'wedding-party' },
          { label: 'Engagement Photos', key: 'engagement-photos' }, // this one IS finished!
        ],
      },
    ];

    return html`
      <nav>
        <div class="nav-container">
          <div class="tabs-grid">
            ${NAV.map(
              (tab) => html`
                <div class="tabcol">
                  ${tab.subtabs
                    ? // If the tab has subtabs, make it toggle the subtabs
                      html`
                        <div
                          class="main-tab grouping ${this._activeTab === tab.key ? 'active' : ''}"
                          @click="${() => this._toggleSubtabs(tab.key)}"
                          tabindex="0"
                          role="button"
                        >
                          ${tab.label}
                        </div>
                      `
                    : unfinished[tab.key]
                      ? // If unfinished, show tooltip
                        html`
                          <lucas-tooltip text="Coming soon!">
                            <div
                              class="main-tab ${this._activeTab === tab.key ? 'active' : ''}"
                              @click="${() => this._navigate(tab.key, '', true)}"
                              tabindex="0"
                              role="button"
                            >
                              ${tab.label}
                            </div>
                          </lucas-tooltip>
                        `
                      : // Otherwise, it's a working nav item
                        html`
                          <div
                            class="main-tab ${this._activeTab === tab.key ? 'active' : ''}"
                            @click="${() => this._navigate(tab.key)}"
                            tabindex="0"
                            role="button"
                          >
                            ${tab.label}
                          </div>
                        `}
                  ${tab.subtabs && this._expandedTabs.has(tab.key)
                    ? html`
                        <div class="subtabs-row">
                          ${tab.subtabs.map((subtab) =>
                            unfinished[subtab.key]
                              ? html`
                                  <lucas-tooltip text="Coming soon!">
                                    <div
                                      class="subtab ${this._activeSubtab === subtab.key
                                        ? 'active'
                                        : ''}"
                                      @click="${() => this._navigate(tab.key, subtab.key, true)}"
                                      tabindex="0"
                                      role="button"
                                    >
                                      ${subtab.label}
                                    </div>
                                  </lucas-tooltip>
                                `
                              : html`
                                  <div
                                    class="subtab ${this._activeSubtab === subtab.key
                                      ? 'active'
                                      : ''}"
                                    @click="${() => this._navigate(tab.key, subtab.key)}"
                                    tabindex="0"
                                    role="button"
                                  >
                                    ${subtab.label}
                                  </div>
                                `
                          )}
                        </div>
                      `
                    : ''}
                </div>
              `
            )}
          </div>
        </div>
      </nav>
    `;
  }

  static styles = css`
    nav {
      background: none;
      padding: 1.2rem 0 0 0;
    }
    .nav-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .tabs-grid {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 1.5rem;
      width: 100%;
      max-width: 1800px;
    }

    .tabcol {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 130px;
      flex: 1 1 0px;
    }

    .main-tab {
      background: darkgrey;
      border-radius: 9px;
      color: white;
      font-size: 2.1rem;
      font-family: inherit;
      font-weight: 400;
      margin-bottom: 0.5rem;
      padding: 0.5em;
      text-align: center;
      cursor: pointer;
      transition: background 0.18s;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      user-select: none;
      border: 2px solid transparent;
    }
    .main-tab.active {
      background: lightgrey;
      color: #222;
      border-color: #bca;
      font-weight: 500;
    }
    .main-tab.grouping {
      cursor: pointer;
      opacity: 1;
      background: darkgrey
      border: 2px solid transparent;
      font-weight: 500;
      color: #f6f3ef;
      box-shadow: none;
    }

    .main-tab[aria-disabled='true'] {
      opacity: 0.8;
      pointer-events: none;
    }

    .subtabs-row {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      margin-top: 0.2rem;
      min-width: 110px;
    }
    .subtab {
      background: darkgrey;
      border-radius: 7px;
      color: #f3f3f3;
      font-size: 1.15rem;
      margin: 0;
      padding: 0.35em 0.7em;
      text-align: center;
      cursor: pointer;
      user-select: none;
      border: 2px solid transparent;
      transition:
        background 0.18s,
        color 0.12s;
      font-weight: 400;
    }
    .subtab.active,
    .subtab:focus {
      background: lightgrey;
      color: #252525;
      border-color: #bca;
      font-weight: 500;
    }
    .subtab[aria-disabled='true'] {
      opacity: 0.8;
      pointer-events: none;
    }

    @media (max-width: 900px) {
      .tabs-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.9rem 0.5rem;
        width: 98vw;
        padding: 0 2vw;
      }
      .tabcol {
        align-items: stretch;
        min-width: unset;
      }
      .main-tab {
        font-size: 1.25rem;
        padding: 0.45em 0.6em;
      }
      .subtabs-row {
        align-items: stretch;
        min-width: unset;
      }
      .subtab {
        font-size: 1rem;
        padding: 0.32em 0.5em;
      }
    }
  `;
}
