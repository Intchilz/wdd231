export function Footer() {
  const current_year = new Date().getFullYear();
  const lastModifiedDate = new Date().toLocaleDateString();
  return `
    <footer class="footer" id="footer">
      <section class="footer__section">
        <h3>Chamber of Commerce</h3>
        <p>
          21-15th Street<br>
          Nkana-East, Kitwe
        </p>
        <p>info@chamberofcommerce.com</p>
        <p>+260 974 894 139</p>
      </section>
      <section class="footer__section inline display:flex flex:justify:center">
        <div class="icon">
          <img src="images/youtube-logo.svg" alt="">
        </div>
        <div class="icon">
          <img src="images/twitter-logo.svg" alt="">
        </div>
        <div class="icon">
          <img src="images/linkedin-logo.svg" alt="">
        </div>
      </section>
      <section class="footer__section">
        <p>WDD231 Class Project</p>
        <p>Louis Chilumba</p>
        <p>&copy;${current_year} Chamber of Commerce</p>
        <p>Last modified: <span>${lastModifiedDate}</span></p>
      </section>
    </footer>
  `;
}
