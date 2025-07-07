#  0x00-semantic_html — Semantic HTML and Accessibility

##  Project Context

This project is part of the **ALX Intermediate Front-End Curriculum**. It focuses on building semantically correct HTML structures, improving accessibility using ARIA attributes, and adhering to W3C and WCAG 2.2 AA standards.

alx-intermediate-frontend/
│
├── 0x00-html_advanced/
│   ├── 0-index.html
│   ├── 1-index.html
│   ├── 2-index.html
│   ├── 3-index.html
│   └── 4-index.html

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

# Clone the repo if needed
git clone https://github.com/<your-username>/alx-intermediate-frontend.git
cd alx-intermediate-frontend/0x00-semantic_html

# Open any file in your browser
open 3-index.html       # macOS
xdg-open 3-index.html   # Linux
start 3-index.html      # Windows

# CSS Grid and Flexbox: Creating Complex, Responsive Layouts using Tailwind

##  Project Overview

This project is a hands-on exploration of **Tailwind CSS**, emphasizing the creation of complex, responsive, and aesthetically pleasing layouts using **utility-first CSS** principles. It includes a progressive series of tasks that build foundational and advanced knowledge in **CSS Grid**, **Flexbox**, and responsive design with Tailwind.

---

##  Learning Objectives

- **Tailwind Configuration:** Master installation and configuration of Tailwind CSS for modern development environments.
- **Responsive Layouts:** Build scalable, responsive user interfaces using Tailwind’s utility classes and responsive modifiers.
- **Grid and Flexbox Mastery:** Combine CSS Grid and Flexbox to implement sophisticated page structures.
- **Design Precision:** Leverage Tailwind utilities to implement modern UI patterns with elegant spacing, color schemes, and layout techniques.
- **Production Readiness:** Apply best practices in responsive design, accessibility, and frontend development workflows.

---

##  Requirements

- Node.js installed on local machine.
- Basic proficiency with HTML, CSS, JavaScript.
- Familiarity with a code editor (e.g., VSCode) and browser DevTools.
- Tailwind CSS installed via **npm** or **CDN**.
- GitHub repository for version control.
- Modern browser for rendering and testing.
- Internet access for Tailwind documentation and CDN.

---

##  Tasks Breakdown

### 0. **Setting Up and Installing Tailwind CSS with Configuration**
- **Objective:** Install Tailwind CSS and configure the build process.
- **Files:** `tailwind.config.js`, `src/input.css`, `src/output.css`
- **Command:**
  ```bash
  npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
  

### 1. **Creating a Responsive CSS Grid Layout**
- **Objective:** Create a 3-column responsive layout using Tailwind’s grid utilities.
- **Files:** `1-index.html`
- **Key Concepts:** `grid-cols-3`, `gap-4`, responsive media queries, `bg-blue-*`, padding utilities.

### 2. **Building a Complex Page Layout with Nested Grids**
- **Objective:** Implement a nested grid layout for advanced sectioning.
- **Files:** `2-index.html`
- **Key Concepts:** `grid-cols-2`, `gap-4`, nested grids, utility-based coloring (`bg-blue-400`, `bg-red-500`).

### 3. **Flexbox Basics – Build a Simple Navigation Bar**
- **Objective:** Create a horizontal navigation bar with responsive behavior.
- **Files:** `3-nav_index.html`
- **Key Concepts:** `flex`, `space-x-5`, `hover:bg-gray-500`, `rounded-lg`, responsive media query for column stacking.

### 4. **Create a Responsive Flexbox Layout**
- **Objective:** Implement a two-column responsive layout using Flexbox.
- **Files:** `4-flexbox_index.html`
- **Key Concepts:** `flex`, `w-1/3`, `w-2/3`, `bg-gray-300`, `bg-gray-500`, responsive media queries.

### 5. **Combine CSS Grid and Flexbox for a Multi-Section Layout**
- **Objective:** Combine grid and flexbox to build a hybrid layout structure.
- **Files:** `5-gridflex_index.html`
- **Key Concepts:** `grid-cols-1`, `lg:grid-cols-3`, `lg:col-span-2`, `flex`, utility background classes (`bg-red-200`, etc.).

### 6. **Build a Responsive Image Gallery Using CSS Grid**
- **Objective:** Add a responsive gallery section using CSS Grid.
- **Files:** `6-imageGallery.html`
- **Key Concepts:** `grid-cols-3`, responsive grid modifiers, image responsiveness, layout composition.

### 7. **Manual Review**
- **Objective:** Submit the project for manual QA review.
- **Repository:** `alx-intermediate-frontend`
- **Directory:** `0x02-tailwind-css`

---

##  Notes

- Ensure the Tailwind CLI or CDN remains active while testing layouts.
- Follow accessibility best practices (e.g., color contrast, semantic tags).
- Validate responsive behavior across multiple screen sizes.
- Use browser DevTools to inspect grid and flexbox layouts.

---
 
