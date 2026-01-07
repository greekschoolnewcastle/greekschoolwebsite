class HeroSection extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title') || '';
    const subtitle = this.getAttribute('subtitle') || '';
    const background = this.getAttribute('background') || 'primary';

    const bgClasses = {
      'primary': 'bg-primary',
      'primary-light': 'bg-primary-light',
      'primary-pale': 'bg-primary-pale',
      'gradient': 'bg-gradient-to-r from-primary to-primary-light'
    };

    const textColor = background === 'primary-pale' ? 'text-primary' : 'text-white';

    this.innerHTML = `
      <section class="${bgClasses[background] || bgClasses.primary} ${textColor}">
        <div class="section-container py-16 md:py-24">
          <div class="max-w-4xl mx-auto text-center">
            ${title ? `<h1 class="mb-6">${title}</h1>` : ''}
            ${subtitle ? `<p class="text-lg md:text-xl leading-relaxed opacity-90">${subtitle}</p>` : ''}
            <slot></slot>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('hero-section', HeroSection);
