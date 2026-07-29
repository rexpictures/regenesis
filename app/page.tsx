"use client";

import { useState } from "react";

const programs = [
  {
    number: "01",
    title: "Listen to the whole story",
    text: "We begin with the person—not the addiction—understanding their social, vocational, physical and personal life.",
  },
  {
    number: "02",
    title: "Shape an individual pathway",
    text: "Together, we create a staged program that reflects each participant’s circumstances, strengths and needs.",
  },
  {
    number: "03",
    title: "Build strength over time",
    text: "Structure, creativity, work experience, community and long-term support help each person move towards independence.",
  },
];

const approaches = [
  "An individual recovery program",
  "Therapies & creative activities",
  "Community-based work experience",
  "Support towards independence",
  "Long-term care & connection",
  "Quality in every aspect of care",
];

const wellnessDimensions = [
  { key: "physical", name: "Physical", value: "Health of body" },
  { key: "vocational", name: "Vocational", value: "Strength of will" },
  { key: "emotional", name: "Emotional", value: "Love of peace" },
  { key: "intellectual", name: "Intellectual", value: "Clarity of thought" },
  { key: "spiritual", name: "Spiritual", value: "Charity of spirit" },
  { key: "social", name: "Social", value: "Harmony of soul" },
];

const variants = [
  { id: "quiet", label: "01 — Dawn stillness" },
  { id: "nature", label: "02 — Open horizon" },
  { id: "structured", label: "03 — Sacred balance" },
] as const;

type Variant = (typeof variants)[number]["id"];

const heroMessages: Record<Variant, { lead: string; accent: string }> = {
  quiet: { lead: "Creating a", accent: "new beginning." },
  nature: { lead: "Awakening the", accent: "will to be well." },
  structured: { lead: "Offering", accent: "wellness to all." },
};

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Regenesis home">
      <span className="brand-mark">R</span>
      <span>
        <strong>Regenesis</strong>
        <small>Creating a new beginning</small>
      </span>
    </a>
  );
}

export default function Home() {
  const [variant, setVariant] = useState<Variant>("quiet");
  const heroMessage = heroMessages[variant];

  return (
    <main id="top" className={`site theme-${variant}`}>
      <div className="concept-switcher" aria-label="Choose a design direction">
        <span>Three Regenesis directions</span>
        <div>
          {variants.map((item) => (
            <button
              key={item.id}
              className={variant === item.id ? "active" : ""}
              onClick={() => setVariant(item.id)}
              aria-pressed={variant === item.id}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="page-shell">
        <header>
          <Brand />
          <nav aria-label="Main navigation">
            <a href="#about">Who we are</a>
            <a href="#approach">What we offer</a>
            <a href="#program">How it works</a>
          </nav>
          <a className="text-link" href="#contact">
            Make an enquiry <span>↗</span>
          </a>
        </header>

        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Regenesis · Freedom from addiction</p>
            <h1>
              {heroMessage.lead}
              <br />
              <em>{heroMessage.accent}</em>
            </h1>
            <p className="hero-intro">
              A benevolent, non-denominational organisation offering an individual, part-time
              pathway for people seeking freedom from addiction.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#about">
                Discover Regenesis <span>→</span>
              </a>
              <a className="secondary-link" href="#contact">
                Begin a conversation
              </a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="sun" />
            <div className="land land-one" />
            <div className="land land-two" />
            <div className="water-lines" />
            <p>Freedom begins<br />with being seen<br />as a whole person.</p>
          </div>
          <div className="hero-note">
            <span>01</span>
            <p>Part-time and non-residential</p>
            <span>02</span>
            <p>Individual and community-based</p>
          </div>
        </section>

        <section id="about" className="intro-section">
          <p className="section-label">Who we are</p>
          <div>
            <h2>A place to<br />begin again.</h2>
            <p>
              Regenesis was established in response to the growing impact of addiction and the
              need for more accessible, effective support. We recognise that every experience of
              addiction is different—and every way forward must be different too.
            </p>
          </div>
        </section>

        <section id="approach" className="approach-grid" aria-label="What Regenesis offers">
          {approaches.map((item, index) => (
            <article key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item}</h3>
            </article>
          ))}
        </section>

        <section className="dimensions-section" aria-labelledby="dimensions-title">
          <div className="dimensions-copy">
            <p className="section-label">The whole-person model</p>
            <h2 id="dimensions-title">Six dimensions.<br />One whole person.</h2>
            <p>
              Regenesis addresses more than addiction alone. The program considers the connected
              physical, vocational, emotional, intellectual, spiritual and social dimensions of
              a person’s life.
            </p>
            <p className="diagram-note">
              Adapted from Regenesis’ original Dimensions of Wellness illustration.
            </p>
          </div>
          <div className="wellness-diagram" role="img" aria-label="Six connected dimensions of wellness: physical, vocational, emotional, intellectual, spiritual and social">
            <div className="triangle triangle-up" />
            <div className="triangle triangle-down" />
            <div className="diagram-centre">
              <span>Dimensions of</span>
              <strong>Wellness</strong>
            </div>
            {wellnessDimensions.map((item) => (
              <div key={item.key} className={`dimension-node node-${item.key}`}>
                <small>{item.value}</small>
                <strong>{item.name}</strong>
              </div>
            ))}
          </div>
        </section>

        <section id="program" className="program-section">
          <div className="program-heading">
            <p className="section-label">Why the program works</p>
            <h2>Recovery shaped<br />around the person.</h2>
            <p>
              The program is part-time, non-residential and staged. Its rhythm and time
              commitment are tailored to the individual, with participants actively involved in
              shaping their own way forward.
            </p>
          </div>
          <div className="program-steps">
            {programs.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section">
          <div className="quote-card">
            <p>“Creating a new beginning for people who seek freedom from addiction.”</p>
          </div>
          <div className="about-copy">
            <p className="section-label">Our commitment</p>
            <h2>Timely. Appropriate. Accessible.</h2>
            <p>
              Addiction affects more than the person experiencing it. Regenesis was designed to
              offer a thoughtful, responsive form of care with quality in its people, program,
              environment and after-care.
            </p>
            <ul>
              <li><span>—</span> Respect for each person’s individual journey</li>
              <li><span>—</span> Structure that builds strength and self-direction</li>
              <li><span>—</span> Creativity as a pathway to renewal</li>
              <li><span>—</span> Thorough support geared to individual need</li>
            </ul>
          </div>
        </section>

        <section className="for-section">
          <div>
            <p className="section-label">Who it is for</p>
            <h2>A supported path towards freedom.</h2>
            <p className="for-summary">
              Joining begins with an interview, personal motivation and a genuine desire for
              freedom from addiction. Participation is for people aged 16 years or over, with
              contributions considered according to capacity.
            </p>
          </div>
          <div className="for-list">
            <p>People struggling with drug or alcohol addiction</p>
            <p>People needing after-care following detox or residential care</p>
            <p>People experiencing relapse or at risk of relapse</p>
            <p>People concerned about a mild or beginning addiction</p>
            <p>People seeking social integration and renewed independence</p>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <p className="section-label">Enquiries & support</p>
          <h2>Help make a new beginning possible.</h2>
          <p>
            Program enquiries are welcome. You can also support Regenesis by becoming a friend,
            joining as a member or making a donation towards accessible, long-term care.
          </p>
          <div className="contact-actions">
            <a className="primary-btn light" href="mailto:regenesis1@hotmail.com?subject=Program enquiry">
              Ask about the program <span>↗</span>
            </a>
            <a className="secondary-link light-link" href="mailto:regenesis1@hotmail.com?subject=Supporting Regenesis">
              Support Regenesis
            </a>
          </div>
          <small>
            This is a design concept based on historical Regenesis material. Current program
            availability, eligibility, fees, charitable status and contact details should be
            confirmed before public launch.
          </small>
        </section>

        <footer>
          <Brand />
          <p>Creating a new beginning.</p>
          <p>© {new Date().getFullYear()} Regenesis</p>
        </footer>
      </div>
    </main>
  );
}
