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
 
# 📁 ALX Intermediate Front-End Projects

This document consolidates the deliverables and technical documentation for three core projects in the ALX Intermediate Front-End curriculum:

* `0x00-semantic_html`
* `0x02-tailwind-css`
* `0x03-sass_scss`

---

## 📘 Project: Semantic HTML and Accessibility (`0x00-semantic_html`)

### 📚 Context

This project emphasizes the construction of semantically correct HTML structures with a focus on accessibility, aligning with W3C and WCAG 2.2 AA standards.

### 🎯 Learning Objectives

* Employ semantic HTML tags: `<header>`, `<main>`, `<section>`, `<footer>`, etc.
* Use ARIA roles and attributes for accessibility
* Improve SEO and screen reader compatibility
* Build accessible forms using `aria-*` and landmark roles

### 📁 File Descriptions

**0-index.html**

* Basic structure using semantic tags: `<header>`, `<main>`, `<footer>`

**1-index.html**

* Added navigation with `<nav>` and list elements for accessibility

**2-index.html**

* Blog post layout with `<article>`, `<section>`, `<figure>`, `<time>`

**3-index.html**

* Accessible form with `aria-labelledby`, `role="form"`, live region feedback

### ✅ Accessibility & Standards

| Feature                  | Compliance Target | Description                                 |
| ------------------------ | ----------------- | ------------------------------------------- |
| Semantic Structure       | HTML5 W3C         | Proper tag usage                            |
| ARIA Roles & Attributes  | WAI-ARIA 1.1      | Enhanced screen reader support              |
| Accessibility Guidelines | WCAG 2.2 AA       | Inclusive design compliance                 |
| Responsive Meta Tag      | Mobile First      | Meta viewport for responsive rendering      |
| Time & Date Markup       | ISO 8601          | `<time datetime="YYYY-MM-DD">` for machines |

### 🔧 Technologies

* HTML5
* ARIA attributes
* Git & GitHub
* VSCode, Vim
* WAVE & Axe DevTools

---

## 📘 Project: CSS Grid and Flexbox with Tailwind (`0x02-tailwind-css`)

### 🎯 Overview

Hands-on practice with **Tailwind CSS**, focusing on utility-first development, responsive layouts, CSS Grid, and Flexbox.

### 🎓 Learning Objectives

* Tailwind installation/configuration
* Responsive layout design
* Grid/Flexbox layout strategies
* Aesthetic implementation via Tailwind utilities
* Accessibility and responsive UI best practices

### ⚙️ Requirements

* Node.js
* Modern browser
* GitHub & VSCode
* Tailwind via npm or CDN

### 🧩 Tasks

**0. Setup Tailwind**

* Installed Tailwind CSS
* Configured `tailwind.config.js` and build pipeline using CLI

**1. Responsive Grid Layout**

* Used `grid-cols-3`, `gap-4`, responsive modifiers

**2. Nested Grid Layout**

* Built sections with `grid-cols-2`, utility classes

**3. Flexbox Navigation Bar**

* `flex`, `space-x-5`, `hover:bg-gray-500`

**4. Two-Column Flexbox Layout**

* Responsive structure using `w-1/3`, `w-2/3`, `bg-gray-300`

**5. Hybrid Layout with Grid + Flexbox**

* Used `grid-cols-1`, `lg:grid-cols-3`, `lg:col-span-2`

**6. Responsive Image Gallery**

* CSS Grid for image grid using `grid-cols-3`, responsive spacing

**7. Manual Review**

* Submitted for QA in `alx-intermediate-frontend/0x02-tailwind-css`

### 🧪 Notes

* Follow accessibility standards
* Test across breakpoints
* Use DevTools for layout inspection

---

## 📘 Project: SCSS with Sass (`0x03-sass_scss`)

### 🎯 Objective

To gain expertise in **Sass/SCSS**, a CSS preprocessor for writing modular, scalable, and DRY CSS using variables, nesting, mixins, and directives.

### ⚙️ Environment

* **OS:** Windows 10
* **Node.js:** v20.16.0
* **Sass:** 3.7.4 via npm
* **Compiler:** `npx sass`

### 📥 Installation

```bash
# Verify Node
node -v

# Navigate
cd D:\DOCUMENTS\ALX PRO FRONT END DEV\0x03-sass_scss

# Install Sass
npm install sass@3.7.4

# Confirm version
npx sass --version
```

### 📄 Files & Tasks

| File Name              | Description                                                 |
| ---------------------- | ----------------------------------------------------------- |
| 0-installation-script  | Logs all steps for Sass setup                               |
| 0-debug\_log.scss      | Outputs debug string using `@debug`                         |
| 1-color\_variable.scss | Defines `$text-color` variable and applies it to body and p |
| 2-nested\_tag.scss     | Implements nested rules for body and p                      |
| 3-mixin\_margins.scss  | Creates a `@mixin` to apply margin-x values                 |

### 🔁 Compilation

```bash
npx sass <file>.scss

# Example:
npx sass 3-mixin_margins.scss
```

### 📘 Concepts Learned

| Concept    | Description                                     |
| ---------- | ----------------------------------------------- |
| @debug     | Development logging during compilation          |
| Variables  | Reusable tokens for values like colors, spacing |
| Nesting    | Logical rule grouping based on HTML structure   |
| Mixins     | Parametrized reusable styles                    |
| DRY Design | Reduces redundancy in stylesheets               |

### 📈 Outcome

* Created modular, maintainable SCSS
* Mastered Sass CLI workflow
* Practiced clean coding for design systems

---

## 👨‍💻 Author

**Vincent Omondi Owuor**
AWS Certified | Cloud-Native Full-Stack Developer
GitHub: [@owuorviny109](https://github.com/owuorviny109)
