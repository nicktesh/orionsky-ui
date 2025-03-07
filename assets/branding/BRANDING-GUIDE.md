# OrionSky UI Branding Guide

This guide provides instructions for using the OrionSky UI branding assets correctly across different applications and contexts.

## Logo Files

The OrionSky UI branding assets are organized as follows:

### Primary Logo Files

- `orionsky-logo.svg` - Full logo for light backgrounds
- `orionsky-logo-dark.svg` - Full logo for dark backgrounds
- `orionsky-icon.svg` - Icon-only logo for light backgrounds
- `orionsky-icon-dark.svg` - Icon-only logo for dark backgrounds

### Favicon Files

- `favicon.ico` - Multi-size favicon for browsers
- `favicon.png` - 32x32px PNG favicon
- `apple-touch-icon.png` - 180x180px icon for iOS devices

## Usage Guidelines

### Light vs Dark Versions

- Use the standard logo files (`orionsky-logo.svg` and `orionsky-icon.svg`) on light backgrounds
- Use the dark versions (`orionsky-logo-dark.svg` and `orionsky-icon-dark.svg`) on dark backgrounds or when using dark mode

### Automatic Theme Switching

To automatically switch between light and dark logos based on the theme:

1. Include both versions in your HTML:

```html
<img src="../assets/branding/orionsky-logo.svg" alt="OrionSky UI" class="logo-light" /> <img src="../assets/branding/orionsky-logo-dark.svg" alt="OrionSky UI" class="logo-dark" />
```

2. Add this CSS to show/hide the appropriate logo based on theme:

```css
[data-theme="dark"] .logo-light {
  display: none;
}
[data-theme="light"] .logo-dark {
  display: none;
}
```

### Spacing

Always maintain adequate spacing around the logo:

- For the full logo, maintain clear space equal to the height of the "O" in "OrionSky" on all sides
- For the icon, maintain clear space equal to 25% of the icon's width on all sides

### Sizing

- Minimum size for the full logo: 120px wide
- Minimum size for the icon: 24px × 24px
- Maintain the aspect ratio when resizing

### Colors

The OrionSky UI brand uses the following colors:

- Primary Blue: `#3e64ff`
- Secondary Blue: `#5edfff`
- Dark Gray: `#343a40`
- Light Gray: `#f8f9fa`

### Implementation in HTML

#### Basic Implementation

```html
<!-- Full logo -->
<img src="../assets/branding/orionsky-logo.svg" alt="OrionSky UI" />

<!-- Icon only -->
<img src="../assets/branding/orionsky-icon.svg" alt="OrionSky UI" />
```

#### Theme-Aware Implementation

```html
<img src="../assets/branding/orionsky-logo.svg" alt="OrionSky UI" class="logo-light" /> <img src="../assets/branding/orionsky-logo-dark.svg" alt="OrionSky UI" class="logo-dark" />
```

### Implementation in CSS

```css
.navbar-brand {
  background-image: url("../assets/branding/orionsky-logo.svg");
  background-repeat: no-repeat;
  background-size: contain;
  width: 150px;
  height: 40px;
}

[data-theme="dark"] .navbar-brand {
  background-image: url("../assets/branding/orionsky-logo-dark.svg");
}
```

## JavaScript for Theme Switching

```javascript
// Theme toggle functionality
const themeToggle = document.querySelector(".theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("os-theme", newTheme);
  });
}

// Set initial theme from localStorage
const savedTheme = localStorage.getItem("os-theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
}
```

## CDN Usage

When using OrionSky UI via CDN, reference the branding assets as follows:

```html
<img src="https://cdn.jsdelivr.net/npm/orionsky-ui@0.1.0/assets/branding/orionsky-logo.svg" alt="OrionSky UI" />
```

## Do's and Don'ts

### Do's

- ✅ Use the appropriate logo version for light or dark backgrounds
- ✅ Maintain the logo's aspect ratio when resizing
- ✅ Provide adequate spacing around the logo
- ✅ Use the logo with the OrionSky UI name when possible

### Don'ts

- ❌ Don't alter the logo colors
- ❌ Don't distort or stretch the logo
- ❌ Don't add effects like shadows or gradients to the logo
- ❌ Don't place the logo on busy backgrounds that reduce visibility

## Contact

For questions about using the OrionSky UI branding assets, please contact the OrionSky UI team at [contact@orionsky-ui.com](mailto:contact@orionsky-ui.com).
