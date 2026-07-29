import { a as require_react, o as __toESM, t as require_jsx_runtime } from "../index.js";
//#region app/page.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var programs = [
	{
		number: "01",
		title: "Listen to the whole story",
		text: "We begin with the person—not the addiction—understanding their social, vocational, physical and personal life."
	},
	{
		number: "02",
		title: "Shape an individual pathway",
		text: "Together, we create a staged program that reflects each participant’s circumstances, strengths and needs."
	},
	{
		number: "03",
		title: "Build strength over time",
		text: "Structure, creativity, work experience, community and long-term support help each person move towards independence."
	}
];
var approaches = [
	"An individual recovery program",
	"Therapies & creative activities",
	"Community-based work experience",
	"Support towards independence",
	"Long-term care & connection",
	"Quality in every aspect of care"
];
var wellnessDimensions = [
	{
		key: "physical",
		name: "Physical",
		value: "Health of body"
	},
	{
		key: "vocational",
		name: "Vocational",
		value: "Strength of will"
	},
	{
		key: "emotional",
		name: "Emotional",
		value: "Love of peace"
	},
	{
		key: "intellectual",
		name: "Intellectual",
		value: "Clarity of thought"
	},
	{
		key: "spiritual",
		name: "Spiritual",
		value: "Charity of spirit"
	},
	{
		key: "social",
		name: "Social",
		value: "Harmony of soul"
	}
];
var variants = [
	{
		id: "quiet",
		label: "01 — Dawn stillness"
	},
	{
		id: "nature",
		label: "02 — Open horizon"
	},
	{
		id: "structured",
		label: "03 — Sacred balance"
	}
];
var heroMessages = {
	quiet: {
		lead: "Creating a",
		accent: "new beginning."
	},
	nature: {
		lead: "Awakening the",
		accent: "will to be well."
	},
	structured: {
		lead: "Offering",
		accent: "wellness to all."
	}
};
var heroImageAlt = {
	quiet: "Golden sunrise illuminating mist-covered mountain ranges",
	nature: "An expansive blue sky crossed by soft, feather-like clouds",
	structured: "A blue twilight sky warming to orange along the horizon"
};
function Brand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		className: "brand",
		href: "#top",
		"aria-label": "Regenesis home",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "brand-mark",
			children: "R"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Regenesis" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Creating a new beginning" })] })]
	});
}
function Home() {
	const [variant, setVariant] = (0, import_react.useState)("quiet");
	const heroMessage = heroMessages[variant];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "top",
		className: `site theme-${variant}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "concept-switcher",
			"aria-label": "Choose a design direction",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Three Regenesis directions" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: variants.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: variant === item.id ? "active" : "",
				onClick: () => setVariant(item.id),
				"aria-pressed": variant === item.id,
				children: item.label
			}, item.id)) })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page-shell",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Main navigation",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#about",
								children: "Who we are"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#approach",
								children: "What we offer"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#program",
								children: "How it works"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "text-link",
						href: "#contact",
						children: ["Make an enquiry ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "↗" })]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "hero",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-copy",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Regenesis · Freedom from addiction"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
								heroMessage.lead,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: heroMessage.accent })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "hero-intro",
								children: "A benevolent, non-denominational organisation offering an individual, part-time pathway for people seeking freedom from addiction."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hero-actions",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "primary-btn",
									href: "#about",
									children: ["Discover Regenesis ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "secondary-link",
									href: "#contact",
									children: "Begin a conversation"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hero-art",
						role: "img",
						"aria-label": heroImageAlt[variant],
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Freedom begins",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"with being seen",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"as a whole person."
						] })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "about",
					className: "intro-section",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-label",
						children: "Who we are"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
						"A place to",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"begin again."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Regenesis was established in response to the growing impact of addiction and the need for more accessible, effective support. We recognise that every experience of addiction is different—and every way forward must be different too." })] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "approach",
					className: "approach-grid",
					"aria-label": "What Regenesis offers",
					children: approaches.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: String(index + 1).padStart(2, "0") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: item })] }, item))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "dimensions-section",
					"aria-labelledby": "dimensions-title",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "dimensions-copy",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "section-label",
								children: "The whole-person model"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								id: "dimensions-title",
								children: [
									"Six dimensions.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"One whole person."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Regenesis addresses more than addiction alone. The program considers the connected physical, vocational, emotional, intellectual, spiritual and social dimensions of a person’s life." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "diagram-note",
								children: "Adapted from Regenesis’ original Dimensions of Wellness illustration."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "wellness-diagram",
						role: "img",
						"aria-label": "Six connected dimensions of wellness: physical, vocational, emotional, intellectual, spiritual and social",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "triangle triangle-up" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "triangle triangle-down" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "diagram-centre",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Dimensions of" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Wellness" })]
							}),
							wellnessDimensions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `dimension-node node-${item.key}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: item.value }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: item.name })]
							}, item.key))
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "program",
					className: "program-section",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "program-heading",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "section-label",
								children: "Why the program works"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
								"Recovery shaped",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"around the person."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The program is part-time, non-residential and staged. Its rhythm and time commitment are tailored to the individual, with participants actively involved in shaping their own way forward." })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "program-steps",
						children: programs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.number }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: item.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.text })] })] }, item.number))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "about-section",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "quote-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "“Creating a new beginning for people who seek freedom from addiction.”" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "about-copy",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "section-label",
								children: "Our commitment"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Timely. Appropriate. Accessible." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Addiction affects more than the person experiencing it. Regenesis was designed to offer a thoughtful, responsive form of care with quality in its people, program, environment and after-care." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "—" }), " Respect for each person’s individual journey"] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "—" }), " Structure that builds strength and self-direction"] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "—" }), " Creativity as a pathway to renewal"] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "—" }), " Thorough support geared to individual need"] })
							] })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "for-section",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-label",
							children: "Who it is for"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "A supported path towards freedom." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "for-summary",
							children: "Joining begins with an interview, personal motivation and a genuine desire for freedom from addiction. Participation is for people aged 16 years or over, with contributions considered according to capacity."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "for-list",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "People struggling with drug or alcohol addiction" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "People needing after-care following detox or residential care" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "People experiencing relapse or at risk of relapse" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "People concerned about a mild or beginning addiction" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "People seeking social integration and renewed independence" })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "contact",
					className: "contact-section",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-label",
							children: "Enquiries & support"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Help make a new beginning possible." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Program enquiries are welcome. You can also support Regenesis by becoming a friend, joining as a member or making a donation towards accessible, long-term care." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "contact-actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "primary-btn light",
								href: "mailto:regenesis1@hotmail.com?subject=Program enquiry",
								children: ["Ask about the program ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "↗" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "secondary-link light-link",
								href: "mailto:regenesis1@hotmail.com?subject=Supporting Regenesis",
								children: "Support Regenesis"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "This is a design concept based on historical Regenesis material. Current program availability, eligibility, fees, charitable status and contact details should be confirmed before public launch." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Creating a new beginning." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Regenesis"
					] })
				] })
			]
		})]
	});
}
//#endregion
export { Home as default };
