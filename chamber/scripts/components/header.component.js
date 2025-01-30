export function Header() {
  return `
    <header>
      <section class="header__navbar">
        <div class="header__nav">
          <h1 class="header__title">
            <a href="/wdd231/chamber">Chamber of Commerce</a>
          </h1>
          <div class="header__icon" id="nav-hamburger">
            ☰
          </div>
        </div>
        <nav class="nav" id="nav">
          <ul class="nav__menu">
            <li class="nav__menu-item">
              <a href="/wdd231/chamber" class="nav__menu-link">Home</a>
            </li>
            <li class="nav__menu-item">
              <a href="/wdd231/chamber/directory.html" class="nav__menu-link">Directory</a>
            </li>
            <li class="nav__menu-item">
              <a href="/wdd231/chamber/join.html" class="nav__menu-link">Join</a>
            </li>
            <li class="nav__menu-item">
              <a href="" class="nav__menu-link">Discovery</a>
            </li>
          </ul>
        </nav>
      </section>

      <section class="hero">
        <img src="images/chamber-hero.jpg" alt="Hero Image" class="hero__image">
        <div class="hero__content">
          <h1 class="hero__title">Welcome to Our Website</h1>
          <p class="hero__subtitle">Discover amazing features and services</p>
        </div>
        <a href="#" class="hero__button">Get Started</a>
      </section>
    </header>
  `;
}
