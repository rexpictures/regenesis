"use client";

import { useEffect, useState } from "react";

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

const charitablePurposes = [
  {
    key: "health",
    title: "Advancing health",
    items: [
      "Developing and providing integrated wellness coaching to individuals of all ages with ongoing wellness challenges.",
      "Developing and providing wellness retreats, workshops and courses addressing ongoing wellness challenges.",
    ],
  },
  {
    key: "education",
    title: "Advancing education",
    items: [
      "Providing life skills programs, including integrated wellness programs and alternative education pathways for young people and all ages.",
    ],
  },
  {
    key: "welfare",
    title: "Advancing social & public welfare",
    items: [
      "Creating focus groups and training for health practitioners to promote and deliver integrated wellness coaching.",
    ],
  },
  {
    key: "research",
    title: "Other purposes beneficial to the public",
    items: [
      "Supporting research and evidence validation for integrated wellness coaching.",
    ],
  },
];

const wellnessCentre = { name: "Emotional", value: "Love of peace" };

// Ordered clockwise from the top point of the star.
const wellnessDimensions = [
  { key: "physical", name: "Physical", value: "Health of body" },
  { key: "vocational", name: "Vocational", value: "Strength of will" },
  { key: "intellectual", name: "Intellectual", value: "Clarity of thought" },
  { key: "spiritual", name: "Spiritual", value: "Charity of spirit" },
  { key: "social", name: "Social", value: "Harmony of soul" },
];

type StarVertex = { x: number; y: number };

// Ordered as the pentagram is drawn, so each entry is also a visible star tip.
const STAR_VERTICES: StarVertex[] = [
  { x: 50, y: 0 },
  { x: 79.39, y: 90.45 },
  { x: 2.45, y: 34.55 },
  { x: 97.55, y: 34.55 },
  { x: 20.61, y: 90.45 },
];

const STAR_POINTS: string = STAR_VERTICES.map((vertex) => `${vertex.x},${vertex.y}`).join(" ");

const variants = [
  { id: "quiet", label: "01 — Dawn stillness" },
  { id: "nature", label: "02 — Open horizon" },
  { id: "structured", label: "03 — Sacred balance" },
] as const;

type Variant = (typeof variants)[number]["id"];

const heroSlogans: Record<Variant, string> = {
  quiet: "Creating a new beginning.",
  nature: "Awakening the will to be well.",
  structured: "Offering wellness to all.",
};

const heroImageAlt: Record<Variant, string> = {
  quiet: "Golden sunrise illuminating mist-covered mountain ranges",
  nature: "An expansive blue sky crossed by soft, feather-like clouds",
  structured: "A blue twilight sky warming to orange along the horizon",
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

function useScrollReveal(): void {
  useEffect(() => {
    const nodes: HTMLElement[] = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (nodes.length === 0) return;

    const canAnimate: boolean =
      typeof IntersectionObserver !== "undefined" &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canAnimate) {
      nodes.forEach((node) => node.classList.add("reveal-in"));
      return;
    }

    nodes.forEach((node) => node.classList.add("reveal-init"));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("reveal-in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

export default function Home() {
  const [variant, setVariant] = useState<Variant>("quiet");
  const heroSlogan = heroSlogans[variant];

  useScrollReveal();

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
            <h1>Regenesis</h1>
            <p className="hero-slogan">{heroSlogan}</p>
            <p className="hero-intro">
              A benevolent, non-denominational organisation offering an individual, part-time
              pathway for people seeking freedom from addiction.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#wellness">
                Discover Regenesis <span>→</span>
              </a>
              <a className="secondary-link" href="#contact">
                Begin a conversation
              </a>
            </div>
          </div>
          <div className="hero-art" role="img" aria-label={heroImageAlt[variant]}>
            <p>Freedom begins<br />with being seen<br />as a whole person.</p>
          </div>
        </section>

        <section id="wellness" className="wellness-blurb" data-reveal>
          <p className="section-label">Our vision</p>
          <h2>
            Offering wellness
            <br />
            throughout life.
          </h2>
          <p>
            Wellness is a multifaceted active process that culminates in a fulfilling and
            purposeful life. It is a conscious, self-directed and continuous process of
            achieving full potential as an individual and takes into account multiple
            components, which involve physical well-being, lifestyle, spiritual well-being,
            mental wellbeing, and the environment.
          </p>
          <figure className="wellness-source">
            <blockquote>
              According to the WHO, wellness has two cardinal concerns: the achievement of
              individuals’ fullest potential physically, psychologically, socially, spiritually
              and economically, and carrying out individuals’ expectations in the family,
              community, place of worship, workplace and other settings.
            </blockquote>
            <figcaption>World Health Organization</figcaption>
          </figure>
        </section>

        <section id="purpose" className="purpose-section" aria-labelledby="purpose-title">
          <div className="purpose-heading" data-reveal>
            <p className="section-label">Our object</p>
            <h2 id="purpose-title">Charitable purposes<br />we exist to pursue.</h2>
            <p className="purpose-note">Constitution, clause 6</p>
          </div>
          <div className="purpose-grid">
            {charitablePurposes.map((purpose, index) => (
              <article key={purpose.key} data-reveal>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{purpose.title}</h3>
                <ul>
                  {purpose.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="intro-section" data-reveal>
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
            <article key={item} data-reveal>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item}</h3>
            </article>
          ))}
        </section>

        <section className="dimensions-section" aria-labelledby="dimensions-title">
          <div className="dimensions-copy" data-reveal>
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
          <div className="wellness-diagram" data-reveal role="img" aria-label="Emotional wellness at the centre of a five-pointed star, surrounded by the physical, vocational, intellectual, spiritual and social dimensions">
            <svg className="star-graphic" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
              <defs>
                <linearGradient id="star-gradient" x1="0.15" y1="0" x2="0.85" y2="1">
                  <stop className="star-stop-start" offset="0%" />
                  <stop className="star-stop-mid" offset="52%" />
                  <stop className="star-stop-end" offset="100%" />
                </linearGradient>
              </defs>
              <circle className="star-orbit" cx="50" cy="50" r="54" />
              <circle className="star-ring-inner" cx="50" cy="50" r="24" />
              <polygon className="star-glow" points={STAR_POINTS} fillRule="evenodd" />
              <polygon points={STAR_POINTS} fillRule="evenodd" />
              {STAR_VERTICES.map((vertex) => (
                <circle
                  key={`${vertex.x}-${vertex.y}`}
                  className="star-tip"
                  cx={vertex.x}
                  cy={vertex.y}
                  r="1.7"
                />
              ))}
            </svg>
            <div className="diagram-centre">
              <span>{wellnessCentre.value}</span>
              <strong>{wellnessCentre.name}</strong>
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
          <div className="program-heading" data-reveal>
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
              <article key={item.number} data-reveal>
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
          <div className="quote-card" data-reveal>
            <p>“Creating a new beginning for people who seek freedom from addiction.”</p>
          </div>
          <div className="about-copy" data-reveal>
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
          <div data-reveal>
            <p className="section-label">Who it is for</p>
            <h2>A supported path towards freedom.</h2>
            <p className="for-summary">
              Joining begins with an interview, personal motivation and a genuine desire for
              freedom from addiction. Participation is for people aged 16 years or over, with
              contributions considered according to capacity.
            </p>
          </div>
          <div className="for-list" data-reveal>
            <p>People struggling with drug or alcohol addiction</p>
            <p>People needing after-care following detox or residential care</p>
            <p>People experiencing relapse or at risk of relapse</p>
            <p>People concerned about a mild or beginning addiction</p>
            <p>People seeking social integration and renewed independence</p>
          </div>
        </section>

        <section id="contact" className="contact-section" data-reveal>
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
