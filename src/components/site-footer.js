class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-primary text-white mt-auto">
        <div class="section-container section-padding">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <!-- Contact Information -->
            <div>
              <h4 class="text-xl font-semibold mb-4 text-accent">
                <span class="lang-en">Contact Us</span>
                <span class="lang-el">Επικοινωνία</span>
              </h4>
              <div class="space-y-2 text-sm">
                <p>
                  <strong>Email:</strong><br>
                  <a href="mailto:contact@greekschoolnewcastle.co.uk?subject=Enquiry%20from%20Website" class="hover:text-accent transition-colors">
                    contact@greekschoolnewcastle.co.uk
                  </a>
                </p>
                <p>
                  <strong class="lang-en">Address:</strong>
                  <strong class="lang-el">Διεύθυνση:</strong><br>
                  St Mary's Catholic School<br>
                  Benton Park Road<br>
                  Newcastle Upon Tyne, NE7 7PE
                </p>
              </div>
            </div>

            <!-- Quick Links -->
            <div>
              <h4 class="text-xl font-semibold mb-4 text-accent">
                <span class="lang-en">Quick Links</span>
                <span class="lang-el">Γρήγοροι Σύνδεσμοι</span>
              </h4>
              <ul class="space-y-2 text-sm">
                <li><a href="about.html" class="hover:text-accent transition-colors">
                  <span class="lang-en">About Us</span>
                  <span class="lang-el">Σχετικά με Εμάς</span>
                </a></li>
                <li><a href="admissions.html" class="hover:text-accent transition-colors">
                  <span class="lang-en">Admissions</span>
                  <span class="lang-el">Εγγραφές</span>
                </a></li>
                <li><a href="gallery.html" class="hover:text-accent transition-colors">
                  <span class="lang-en">Gallery</span>
                  <span class="lang-el">Συλλογή</span>
                </a></li>
                <li><a href="get-involved.html" class="hover:text-accent transition-colors">
                  <span class="lang-en">Get Involved</span>
                  <span class="lang-el">Συμμετοχή</span>
                </a></li>
                <li><a href="contact.html" class="hover:text-accent transition-colors">
                  <span class="lang-en">Contact</span>
                  <span class="lang-el">Επικοινωνία</span>
                </a></li>
                <li><a href="https://drive.google.com/drive/folders/1yZcet2rPvEx9IdV0NZd4bxi-EobRkEsU?usp=drive_link" target="_blank" class="hover:text-accent transition-colors">
                  <span class="lang-en">Policies</span>
                  <span class="lang-el">Πολιτικές</span>
                </a></li>
              </ul>
            </div>

            <!-- Social Media & School Hours -->
            <div>
              <h4 class="text-xl font-semibold mb-4 text-accent">
                <span class="lang-en">Connect With Us</span>
                <span class="lang-el">Συνδεθείτε Μαζί Μας</span>
              </h4>
              <div class="space-y-4">
                <div>
                  <a
                    href="https://www.facebook.com/GreekSchoolNewcastleUponTyne/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center space-x-2 hover:text-accent transition-colors text-sm"
                  >
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span class="lang-en">Follow us on Facebook</span>
                    <span class="lang-el">Ακολουθήστε μας στο Facebook</span>
                  </a>
                </div>
                <div class="text-sm">
                  <p class="font-semibold mb-2">
                    <span class="lang-en">School Hours:</span>
                    <span class="lang-el">Ώρες Λειτουργίας:</span>
                  </p>
                  <p>
                    <span class="lang-en">Children: Sat (10am-4:30pm)</span>
                    <span class="lang-el">Παιδιά: Σάβ (10πμ-4:30μμ)</span>
                  </p>
                  <p>
                    <span class="lang-en">Adults: Wednesdays (in-person, 6-8pm)</span>
                    <span class="lang-el">Ενήλικες: Τετάρτη (δια ζώσης, 6-8μμ)</span>
                  </p>
                  <p>
                    <span class="lang-en">Adults: Mondays (online, 6-8pm)</span>
                    <span class="lang-el">Ενήλικες: Δευτέρα (διαδικτυακά, 6-8μμ)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Copyright -->
          <div class="border-t border-white/20 pt-6 text-center text-sm">
            <p>
              <span class="lang-en">&copy; ${new Date().getFullYear()} Greek Community School of Newcastle. All rights reserved.</span>
              <span class="lang-el">&copy; ${new Date().getFullYear()} Ελληνικό Σχολείο Νιούκαστλ. Με επιφύλαξη παντός δικαιώματος.</span>
            </p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('site-footer', SiteFooter);
