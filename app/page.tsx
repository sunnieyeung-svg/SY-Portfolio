import Image from "next/image";
import { BunbunPrompt } from "./bunbun-prompt";

export default function Home() {
  return (
    <div className="portfolio-layout">
      <aside className="sidebar">
        <a className="brand" href="#home" aria-label="Sunnie, home">
          <Image
            src="/images/logo.png"
            alt="Sunnie"
            width={193}
            height={49}
            priority
          />
        </a>

        <div className="profile">
          <p className="profile-title">ui/ux &amp; brand designer</p>
          <p className="profile-location">New York, NY</p>
        </div>

        <nav className="primary-nav" aria-label="Main navigation">
          <a href="#work">work</a>
          <a href="#about">about</a>
          <a href="#play">play</a>
        </nav>

        <BunbunPrompt />

        <footer className="sidebar-footer">
          <p>Get in touch</p>
          <span>contact details coming soon</span>
        </footer>
      </aside>

      <main id="main-content" className="main-content">
        <section id="home" className="hero" aria-labelledby="hero-title">
          <h1 id="hero-title" className="hero-title">
            <span>i believe design</span>
            <span>should be intuitive</span>
            <span>and funnnnnn</span>
          </h1>
        </section>

        <section id="work" className="content-section" aria-labelledby="work-title">
          <div className="section-copy">
            <p className="eyebrow">01 / selected work</p>
            <h2 id="work-title">work</h2>
            <p>
              Sunnie&apos;s project pages aren&apos;t published yet. Check back
              soon for her case studies.
            </p>
          </div>
        </section>

        <section id="about" className="content-section" aria-labelledby="about-title">
          <div className="section-copy">
            <p className="eyebrow">02 / a little about Sunnie</p>
            <h2 id="about-title">about</h2>
            <p>
              Sunnie is a New York based UI/UX and brand designer studying
              Advertising and Digital Design at FIT. She brings an empathetic
              perspective to design, thinking about how people experience and
              understand what she makes.
            </p>
            <p>
              She is interested in UI/UX, brand design, and motion, with Figma
              and After Effects/Jitter among the tools she wants to highlight.
            </p>
          </div>
        </section>

        <section id="play" className="content-section" aria-labelledby="play-title">
          <div className="section-copy">
            <p className="eyebrow">03 / things Sunnie likes to make</p>
            <h2 id="play-title">play</h2>
            <p>
              Personality with a purpose, thoughtful digital experiences, and
              a little motion—design should feel intuitive and fun.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
