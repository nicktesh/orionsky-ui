# OrionSky UI

**OrionSky UI** is a modern, open-source front-end library built with SCSS and CSS variables. Designed for flexibility, scalability, and ease of use, OrionSky UI enables developers to create stunning user interfaces with a focus on modularity and customization.

---

## **Features**

- **Responsive Grid System**: Flexbox-based, 12-column grid with intuitive class names (e.g., `os-md-4`).
- **Customizable Themes**: Light and dark modes included, with easy-to-modify CSS variables for branding.
- **Reusable Components**: Buttons, modals, accordions, tooltips, and more.
- **Prebuilt Structures**: Headers, footers, hero sections, and other page-building blocks.
- **Modern Workflow**: Built with SCSS for preprocessing and CSS variables for runtime customization.

---

## **Getting Started**

### **Installation**

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/orionsky-ui.git
   cd orionsky-ui
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the Library:

   - To compile SCSS, minify CSS, and bundle JavaScript, run:
     ```bash
     npm run build
     ```

4. Watch for changes (SCSS only):
   ```bash
   npm run watch
   ```

---

## **Usage**

### **HTML Example**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>OrionSky UI Example</title>
    <link rel="stylesheet" href="dist/orionsky.css" />
  </head>
  <body>
    <div class="os-row">
      <div class="os-md-4">Column 1</div>
      <div class="os-md-4">Column 2</div>
      <div class="os-md-4">Column 3</div>
    </div>
  </body>
</html>
```

---

## **Folder Structure**

```plaintext
orionsky-ui/
├── src/
│   ├── scss/
│   │   ├── base/         # Global resets, typography
│   │   ├── layout/       # Grid system, spacing utilities
│   │   ├── components/   # Buttons, modals, etc.
│   │   ├── themes/       # Light and dark mode styles
│   │   ├── utilities/    # Variables, mixins, helper functions
│   │   └── orionsky.scss # Main SCSS entry point
│   ├── css/              # Compiled CSS output
│   └── js/               # Optional JS for interactivity
├── dist/                 # Final distribution files
├── package.json          # Project metadata and scripts
├── README.md             # Project documentation
├── .gitignore            # Ignored files
```

---

## **Customization**

OrionSky UI is built with a hybrid SCSS + CSS variables approach, making it easy to adapt to any branding or design requirements.

1. Modify variables in `src/scss/utilities/_variables.scss`:

   ```scss
   // Example:
   $primary-color: #3498db; // Change primary color
   ```

2. Rebuild the CSS:
   ```bash
   npm run build
   ```

---

## **Contributing**

We welcome contributions from the community! Please feel free to:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a detailed description of your changes.

---

## **License**

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## **Roadmap**

- Add more components (e.g., sliders, progress bars, etc.).
- Create WordPress integration with a custom plugin.
- Build a documentation site with live examples.
- Offer premium themes and structures.
