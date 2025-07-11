 
 
#  ALX Intermediate Front-End Projects

This document consolidates the deliverables and technical documentation for three core projects in the ALX Intermediate Front-End curriculum:

* `0x00-semantic_html`
* `0x02-tailwind-css`
* `0x03-sass_scss`

---

##  Project: Semantic HTML and Accessibility (`0x00-semantic_html`)

###  Context

This project emphasizes the construction of semantically correct HTML structures with a focus on accessibility, aligning with W3C and WCAG 2.2 AA standards.

###  Learning Objectives

* Employ semantic HTML tags: `<header>`, `<main>`, `<section>`, `<footer>`, etc.
* Use ARIA roles and attributes for accessibility
* Improve SEO and screen reader compatibility
* Build accessible forms using `aria-*` and landmark roles

###  File Descriptions

**0-index.html**

* Basic structure using semantic tags: `<header>`, `<main>`, `<footer>`

**1-index.html**

* Added navigation with `<nav>` and list elements for accessibility

**2-index.html**

* Blog post layout with `<article>`, `<section>`, `<figure>`, `<time>`

**3-index.html**

* Accessible form with `aria-labelledby`, `role="form"`, live region feedback

### Accessibility & Standards

| Feature                  | Compliance Target | Description                                 |
| ------------------------ | ----------------- | ------------------------------------------- |
| Semantic Structure       | HTML5 W3C         | Proper tag usage                            |
| ARIA Roles & Attributes  | WAI-ARIA 1.1      | Enhanced screen reader support              |
| Accessibility Guidelines | WCAG 2.2 AA       | Inclusive design compliance                 |
| Responsive Meta Tag      | Mobile First      | Meta viewport for responsive rendering      |
| Time & Date Markup       | ISO 8601          | `<time datetime="YYYY-MM-DD">` for machines |

###  Technologies

* HTML5
* ARIA attributes
* Git & GitHub
* VSCode, Vim
* WAVE & Axe DevTools

---

##  Project: CSS Grid and Flexbox with Tailwind (`0x02-tailwind-css`)

###  Overview

Hands-on practice with **Tailwind CSS**, focusing on utility-first development, responsive layouts, CSS Grid, and Flexbox.

###  Learning Objectives

* Tailwind installation/configuration
* Responsive layout design
* Grid/Flexbox layout strategies
* Aesthetic implementation via Tailwind utilities
* Accessibility and responsive UI best practices

###  Requirements

* Node.js
* Modern browser
* GitHub & VSCode
* Tailwind via npm or CDN

###  Tasks

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

###  Notes

* Follow accessibility standards
* Test across breakpoints
* Use DevTools for layout inspection

---

##  Project: SCSS with Sass (`0x03-sass_scss`)

###  Objective

To gain expertise in **Sass/SCSS**, a CSS preprocessor for writing modular, scalable, and DRY CSS using variables, nesting, mixins, and directives.

### ⚙Environment

* **OS:** Windows 10
* **Node.js:** v20.16.0
* **Sass:** 3.7.4 via npm
* **Compiler:** `npx sass`

###  Installation

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

###  Files & Tasks

| File Name              | Description                                                 |
| ---------------------- | ----------------------------------------------------------- |
| 0-installation-script  | Logs all steps for Sass setup                               |
| 0-debug\_log.scss      | Outputs debug string using `@debug`                         |
| 1-color\_variable.scss | Defines `$text-color` variable and applies it to body and p |
| 2-nested\_tag.scss     | Implements nested rules for body and p                      |
| 3-mixin\_margins.scss  | Creates a `@mixin` to apply margin-x values                 |

###  Compilation

```bash
npx sass <file>.scss

# Example:
npx sass 3-mixin_margins.scss
```

###  Concepts Learned

| Concept    | Description                                     |
| ---------- | ----------------------------------------------- |
| @debug     | Development logging during compilation          |
| Variables  | Reusable tokens for values like colors, spacing |
| Nesting    | Logical rule grouping based on HTML structure   |
| Mixins     | Parametrized reusable styles                    |
| DRY Design | Reduces redundancy in stylesheets               |

###  Outcome

* Created modular, maintainable SCSS
* Mastered Sass CLI workflow
* Practiced clean coding for design systems

---

##  Author

**Vincent Omondi Owuor**
AWS Certified | Cloud-Native Full-Stack Developer
GitHub: [@owuorviny109](https://github.com/owuorviny109)
