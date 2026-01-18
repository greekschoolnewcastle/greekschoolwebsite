class SiteHeader extends HTMLElement {
  connectedCallback() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    this.innerHTML = `
      <header class="bg-gradient-to-r from-primary to-[color-mix(in_srgb,var(--color-primary)_85%,var(--color-primary-light))] text-white sticky top-0 z-50 shadow-lg backdrop-blur-sm">
        <nav class="section-container">
          <div class="flex items-center justify-between py-4">
            <!-- Logo/School Name -->
            <a href="index.html" class="flex items-center space-x-3 group">
              <div class="text-xl md:text-2xl font-heading font-bold transition-colors group-hover:text-accent">
                <span class="lang-en">Greek Community School of Newcastle</span>
                <span class="lang-el">Ελληνικό Σχολείο Νιούκαστλ</span>
              </div>
            </a>

            <!-- Mobile Menu Button -->
            <button
              id="mobile-menu-button"
              class="md:hidden p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center space-x-1 lg:space-x-2">
              ${this.renderNavLinks(currentPage)}
              <div class="border-l border-white/30 pl-6">
                <button
                  data-lang-toggle
                  onclick="window.langUtils?.toggleLanguage()"
                  class="text-sm hover:text-accent transition-colors font-semibold"
                  title="Switch language"
                >
                  EL
                </button>
              </div>
            </div>
          </div>

          <!-- Mobile Navigation -->
          <div id="mobile-menu" class="hidden md:hidden pb-4 border-t border-white/20 mt-4 pt-4 animate-fade-in">
            <div class="flex flex-col space-y-1">
              ${this.renderNavLinks(currentPage, true)}
              <button
                data-lang-toggle
                onclick="window.langUtils?.toggleLanguage()"
                class="py-2 text-base text-left hover:text-accent transition-colors font-semibold"
                title="Switch language"
              >
                EL
              </button>
            </div>
          </div>
        </nav>
        <!-- Subtle bottom border with accent -->
        <div class="h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>
      </header>
    `;

    // Setup mobile menu toggle
    const menuButton = this.querySelector('#mobile-menu-button');
    const mobileMenu = this.querySelector('#mobile-menu');

    menuButton?.addEventListener('click', () => {
      mobileMenu?.classList.toggle('hidden');
    });
  }

  renderNavLinks(currentPage, isMobile = false) {
    const links = [
      { href: 'index.html', labelEn: 'Home', labelEl: 'Αρχική' },
      { href: 'about.html', labelEn: 'About', labelEl: 'Σχετικά' },
      { href: 'admissions.html', labelEn: 'Admissions', labelEl: 'Εγγραφές' },
      { href: 'gallery.html', labelEn: 'Gallery', labelEl: 'Συλλογή' },
      { href: 'get-involved.html', labelEn: 'Get Involved', labelEl: 'Συμμετοχή' },
      { href: 'contact.html', labelEn: 'Contact', labelEl: 'Επικοινωνία' },
    ];

    return links.map(link => {
      const isActive = currentPage === link.href || (currentPage === '' && link.href === 'index.html');

      if (isMobile) {
        const activeClass = isActive
          ? 'text-accent font-semibold bg-white/10'
          : 'hover:text-accent hover:bg-white/5';
        return `<a href="${link.href}" class="py-3 px-4 text-base ${activeClass} transition-all duration-300 rounded-lg">
          <span class="lang-en">${link.labelEn}</span>
          <span class="lang-el">${link.labelEl}</span>
        </a>`;
      }

      const activeClass = isActive
        ? 'text-accent font-semibold'
        : 'hover:text-accent';
      return `
        <a href="${link.href}" class="relative px-3 py-2 text-sm ${activeClass} transition-all duration-300 group">
          <span class="lang-en">${link.labelEn}</span>
          <span class="lang-el">${link.labelEl}</span>
          <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : ''}"></span>
        </a>
      `;
    }).join('');
  }
}

customElements.define('site-header', SiteHeader);
