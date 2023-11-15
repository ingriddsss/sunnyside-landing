function Socials() {
  return (
    <div className="socials">
      <img src="icon-facebook.svg" />
      <img src="icon-instagram.svg" />
      <img src="icon-twitter.svg" />
      <img src="icon-pinterest.svg" />
    </div>
  );
}

export default function Footer() {
  return (
    <section className="footer">
      <img id="footer-logo" src="logo.svg" />
      <ul>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
      </ul>
      <Socials />
    </section>
  );
}
