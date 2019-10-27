import Particles from "react-particles-js";

import "./styles.scss";

export default function Header() {
  return (
    <article className="hero">
      <section className="hero__particles">
        <Particles
          params={{
            particles: {
              number: {
                value: 100
              }
            }
          }}
        />
      </section>
      <section className="hero__text">
        <h1>Converting designs into expiriances</h1>
      </section>
    </article>
  );
}
