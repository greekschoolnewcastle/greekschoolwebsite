class ImageLightbox extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div id="lightbox" class="fixed inset-0 bg-black/90 z-50 hidden items-center justify-center p-4">
        <button
          id="lightbox-close"
          class="absolute top-4 right-4 text-white text-4xl hover:text-accent transition-colors"
          aria-label="Close lightbox"
        >
          &times;
        </button>
        <img
          id="lightbox-image"
          src=""
          alt=""
          class="max-w-full max-h-[90vh] object-contain rounded-lg"
        >
        <p id="lightbox-caption" class="absolute bottom-4 left-0 right-0 text-center text-white text-lg px-4"></p>
      </div>
    `;

    const lightbox = this.querySelector('#lightbox');
    const lightboxImage = this.querySelector('#lightbox-image');
    const lightboxCaption = this.querySelector('#lightbox-caption');
    const closeBtn = this.querySelector('#lightbox-close');

    // Close lightbox handlers
    closeBtn?.addEventListener('click', () => this.close());
    lightbox?.addEventListener('click', (e) => {
      if (e.target === lightbox) this.close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
    });

    // Store references for open method
    this.lightbox = lightbox;
    this.lightboxImage = lightboxImage;
    this.lightboxCaption = lightboxCaption;
  }

  open(src, alt) {
    // Get higher resolution image by modifying Unsplash URL
    const highResSrc = src.replace(/w=\d+/, 'w=1600').replace(/&h=\d+/, '');
    this.lightboxImage.src = highResSrc;
    this.lightboxImage.alt = alt;
    this.lightboxCaption.textContent = alt;
    this.lightbox.classList.remove('hidden');
    this.lightbox.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.lightbox.classList.add('hidden');
    this.lightbox.classList.remove('flex');
    document.body.style.overflow = '';
  }
}

customElements.define('image-lightbox', ImageLightbox);

// Initialize gallery images to open lightbox
document.addEventListener('DOMContentLoaded', () => {
  const galleryImages = document.querySelectorAll('.gallery-image');
  const lightbox = document.querySelector('image-lightbox');

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      lightbox?.open(img.src, img.alt);
    });
  });
});
