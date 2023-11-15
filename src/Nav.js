import React, { useRef } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  function handleToggleMenu() {
    setOpen(!open);
  }

  const navRef = useRef();

  return (
    <div className="nav">
      <img src="logo.svg" />
      <nav ref={navRef} style={{ display: open ? "inline" : "none" }}>
        <ul id="navbar">
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li id="contact">Contact</li>
        </ul>
      </nav>
      <button onClick={showNavbar}>
        <img id="hamburger" src="icon-hamburger.svg" />
      </button>
    </div>
  );
}
