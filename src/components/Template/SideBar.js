import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Shaumik&apos;Pathak</h2>
        <p><a href="mailto:shaumikpathak26@gmail.com">shaumikpathak26@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Shaumik. I like building things.
        I am a UC Davis Computer Science graduate
        with a statistics minor. I am full stack
        web developer and data scientist passionate
        about cloud Computation and Cloud Architecture.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Shaumik&apos;Pathak <Link to="/">shaumikpathak.github.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
