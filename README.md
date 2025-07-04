#  0x00-semantic_html — Semantic HTML and Accessibility

##  Project Context

This project is part of the **ALX Intermediate Front-End Curriculum**. It focuses on building semantically correct HTML structures, improving accessibility using ARIA attributes, and adhering to W3C and WCAG 2.2 AA standards.

---

##  Learning Objectives

- Understand and apply semantic HTML elements (`<header>`, `<main>`, `<article>`, `<section>`, `<footer>`, etc.)
- Use ARIA roles and attributes to enhance accessibility for assistive technologies
- Structure content meaningfully to improve SEO, screen reader compatibility, and maintainability
- Build accessible forms using `aria-*` attributes and landmark roles

---

##  File Descriptions

###  0-index.html

**Objective**: Build a simple HTML structure with a header, main content area, and footer.

- Introduced foundational semantic tags:
  - `<header>`, `<main>`, `<article>`, `<section>`, `<footer>`
- Established basic document metadata (`<meta>`, `<title>`)
- Included simple content and footer copyright

---

###  1-index.html

**Objective**: Build multi-page navigation and use `<nav>` with list elements.

- Extended header with a `<nav>` and `<ul>` for navigation links
- Pages referenced: `home.html`, `about.html`, `services.html`, `contact.html`
- Demonstrated semantic grouping of navigation links for better accessibility

---

###  2-index.html

**Objective**: Create a blog post layout using structured semantic HTML.

- Nested an `<article>` inside `<main>` to represent a blog post
- Introduced multiple `<section>` tags:
  - **Introduction**
  - **Main Content**
  - **Conclusion**
- Used:
  - `<figure>`, `<figcaption>`, `<code>` to provide accessible visual and semantic context
  - `<time datetime="...">` to semantically represent publication dates
- Footer included article metadata such as author and publication date

---

###  3-index.html

**Objective**: Add an accessible HTML form using ARIA roles and live regions.

- Appended a new `<section>` inside `<main>` for the contact form
- Form features:
  - `aria-labelledby="form-title"` for screen reader context
  - Role: `role="form"`
  - Input fields with:
    - `<label for="...">` bindings
    - `aria-required="true"`
  - Submit button with `aria-label="Submit the form"`
  - Live region:
    - `<div role="alert" aria-live="polite">` for non-intrusive screen reader feedback
- Ensures compatibility with assistive technologies (NVDA, JAWS, VoiceOver)

---

##  Accessibility & Standards Compliance

| Feature                        | Compliance Target     | Description                                                                 |
|-------------------------------|------------------------|-----------------------------------------------------------------------------|
| Semantic Structure            | HTML5 W3C              | Uses tags according to their intended structural roles                      |
| ARIA Roles & Attributes       | WAI-ARIA 1.1           | `aria-live`, `aria-labelledby`, `aria-required`, `role="form"`             |
| Accessibility Guidelines      | WCAG 2.2 AA            | Forms, navigation, and content structures accessible to screen readers     |
| Responsive Meta Tag           | Mobile First           | Ensures mobile-friendly rendering via `viewport` meta tag                  |
| Time & Date Markup            | ISO 8601               | `<time datetime="YYYY-MM-DD">` for machine-readable dates                  |

---

##  Technologies Used

- HTML5 (Semantic HTML)
- ARIA (Accessible Rich Internet Applications)
- W3C-compliant markup
- Git/GitHub for version control
- VSCode & Vim for editing
- WAVE, Axe DevTools for accessibility auditing

---

##  Usage

To test locally:

```bash
# Clone the repo if needed
git clone https://github.com/<your-username>/alx-intermediate-frontend.git
cd alx-intermediate-frontend/0x00-semantic_html

# Open any file in your browser
open 3-index.html       # macOS
xdg-open 3-index.html   # Linux
start 3-index.html      # Windows
