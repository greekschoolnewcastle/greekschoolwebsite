class SiteHeader extends HTMLElement {
  connectedCallback() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    this.innerHTML = `
      <header class="bg-primary text-white sticky top-0 z-50 shadow-md">
        <nav class="section-container">
          <div class="flex items-center justify-between py-4">
            <!-- Logo/School Name -->
            <div class="flex items-center space-x-3">
              <div class="text-xl md:text-2xl font-heading font-bold">
                Greek Community School of Newcastle
              </div>
            </div>

            <!-- Mobile Menu Button -->
            <button
              id="mobile-menu-button"
              class="md:hidden p-2 rounded hover:bg-primary-light/20 transition-colors"
              aria-label="Toggle menu"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center space-x-6">
              ${this.renderNavLinks(currentPage)}
              <div class="border-l border-white/30 pl-6">
                <button class="text-sm hover:text-accent transition-colors" title="Language switcher (coming soon)">
                  EN
                </button>
              </div>
            </div>
          </div>

          <!-- Mobile Navigation -->
          <div id="mobile-menu" class="hidden md:hidden pb-4 border-t border-white/20 mt-4 pt-4">
            <div class="flex flex-col space-y-3">
              ${this.renderNavLinks(currentPage, true)}
            </div>
          </div>
        </nav>
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
      { href: 'index.html', label: 'Home' },
      { href: 'about.html', label: 'About' },
      { href: 'admissions.html', label: 'Admissions' },
      { href: 'gallery.html', label: 'Gallery' },
      { href: 'get-involved.html', label: 'Get Involved' },
      { href: 'contact.html', label: 'Contact' },
    ];

    return links.map(link => {
      const isActive = currentPage === link.href || (currentPage === '' && link.href === 'index.html');
      const activeClass = isActive ? 'text-accent font-semibold' : 'hover:text-accent';
      const baseClass = isMobile ? 'py-2 text-base' : 'text-sm';

      return `<a href="${link.href}" class="${baseClass} ${activeClass} transition-colors">${link.label}</a>`;
    }).join('');
  }
}

customElements.define('site-header', SiteHeader);
