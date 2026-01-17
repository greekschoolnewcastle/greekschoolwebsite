class HeroSection extends HTMLElement {
  connectedCallback() {
    // Support both single language and bilingual attributes
    const title = this.getAttribute('title') || '';
    const titleEn = this.getAttribute('title-en') || title;
    const titleEl = this.getAttribute('title-el') || title;

    const subtitle = this.getAttribute('subtitle') || '';
    const subtitleEn = this.getAttribute('subtitle-en') || subtitle;
    const subtitleEl = this.getAttribute('subtitle-el') || subtitle;

    const background = this.getAttribute('background') || 'primary';
    const image = this.getAttribute('image') || '';

    const bgClasses = {
      'primary': 'bg-primary',
      'primary-light': 'bg-primary-light',
      'primary-pale': 'bg-primary-pale',
      'gradient': 'bg-gradient-to-r from-primary to-primary-light'
    };

    const textColor = background === 'primary-pale' ? 'text-primary' : 'text-white';

    const imageStyle = image ? `background-image: linear-gradient(rgba(30, 58, 95, 0.85), rgba(30, 58, 95, 0.85)), url('${image}'); background-size: cover; background-position: center;` : '';
    const bgClass = image ? '' : (bgClasses[background] || bgClasses.primary);

    // Render bilingual title if different
    const titleHtml = titleEn || titleEl ? `
      <h1 class="mb-6">
        <span class="lang-en">${titleEn}</span>
        <span class="lang-el">${titleEl}</span>
      </h1>
    ` : '';

    // Render bilingual subtitle if different
    const subtitleHtml = subtitleEn || subtitleEl ? `
      <p class="text-lg md:text-xl leading-relaxed opacity-90">
        <span class="lang-en">${subtitleEn}</span>
        <span class="lang-el">${subtitleEl}</span>
      </p>
    ` : '';

    this.innerHTML = `
      <section class="${bgClass} ${textColor}" style="${imageStyle}">
        <div class="section-container py-16 md:py-24">
          <div class="max-w-4xl mx-auto text-center">
            ${titleHtml}
            ${subtitleHtml}
            <slot></slot>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('hero-section', HeroSection);
