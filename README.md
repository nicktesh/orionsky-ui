# OrionSky UI

<p align="center">
  <img src="assets/orionsky-logo.png" alt="OrionSky UI Logo" width="200"/>
</p>

<p align="center">
  A modern, open-source CSS/JavaScript library inspired by constellations and cosmic themes.
</p>

<p align="center">
  <a href="#key-features">Features</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#documentation">Documentation</a> •
  <a href="#integration">Integration</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a>
</p>

## Overview

OrionSky UI is designed for developers seeking an easy-to-use, highly customizable UI library that integrates seamlessly into any project. Whether you're building a personal website, a corporate platform, or integrating with popular CMS and frameworks like WordPress or Next.js, OrionSky UI provides the tools you need with minimal complexity.

## Key Features

- **Simplicity and Flexibility**: Minimal yet robust SCSS structure with intuitive class naming conventions (`.os-button`, `.os-modal`, etc.)
- **Effortless Customization**: Central CSS variables file for easy theme customization and real-time updates
- **Built-in Accessibility**: Designed with accessibility in mind, featuring clear visual styles and semantic markup
- **Responsive by Default**: Fully responsive grid system using intuitive size breakpoints (small, medium, large)
- **Light/Dark Modes**: Seamless support for dark and light modes, easily toggleable with minimal setup

## Project Structure

OrionSky UI is organized into three main conceptual layers:

- **Components**: Reusable UI elements (buttons, modals, accordions, inputs, etc.)
- **Structures**: Prebuilt layout elements (headers, navbars, footers) composed of Components
- **Themes**: Complete layouts or page templates constructed from Structures and Components

```
orionsky-ui/
├── src/
│   ├── scss/
│   │   ├── _variables.scss
│   │   ├── components/
│   │   ├── structures/
│   ├── js/
│   │   └── orionsky-ui.js
│   ├── components/
│   └── variables.css
├── dist/
│   ├── orionsky-ui.min.css
│   └── orionsky-ui.min.js
├── docs/
│   └── demo.html
├── package.json
└── README.md
```

## Getting Started

### Installation

Choose one of the following methods to add OrionSky UI to your project:

#### NPM (Recommended)

```bash
npm install orionsky-ui
```

#### CDN

Add the following links to your HTML:

##### jsDelivr CDN (Recommended)

```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/orionsky-ui@0.1.0/dist/orionsky-ui.min.css" />

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/orionsky-ui@0.1.0/dist/orionsky-ui.min.js"></script>
```

You can also use the latest version automatically:

```html
<!-- Always get the latest version -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/orionsky-ui/dist/orionsky-ui.min.css" />
<script src="https://cdn.jsdelivr.net/npm/orionsky-ui/dist/orionsky-ui.min.js"></script>

<!-- Get the latest minor version of 0.1.x -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/orionsky-ui@0.1/dist/orionsky-ui.min.css" />
<script src="https://cdn.jsdelivr.net/npm/orionsky-ui@0.1/dist/orionsky-ui.min.js"></script>
```

##### OrionSky CDN

```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.orionsky-ui.com/0.1.0/orionsky-ui.min.css" />

<!-- JavaScript -->
<script src="https://cdn.orionsky-ui.com/0.1.0/orionsky-ui.min.js"></script>
```

#### Download

[Download the latest release](https://github.com/orionsky-ui/orionsky-ui/releases/latest) and include the files in your project.

### Basic Usage

Include the CSS and JavaScript files in your project:

```html
<link rel="stylesheet" href="path/to/orionsky-ui.min.css" />
<script src="path/to/orionsky-ui.min.js"></script>
```

Or import in your JavaScript:

```javascript
import "orionsky-ui/dist/orionsky-ui.min.css";
import OrionSky from "orionsky-ui";
```

### Quick Example

```html
<div class="os-container">
  <div class="os-row">
    <div class="os-col-md-6">
      <div class="os-card">
        <h2 class="os-card-title">Getting Started</h2>
        <p class="os-card-text">Welcome to OrionSky UI!</p>
        <button class="os-button os-button-primary">Learn More</button>
      </div>
    </div>
  </div>
</div>
```

## Documentation

Visit our [documentation site](https://orionsky-ui.com/docs) for comprehensive guides, component examples, and API references.

### Customization

OrionSky UI is designed to be easily customizable through CSS variables:

```css
:root {
  --os-primary-color: #3e64ff;
  --os-secondary-color: #5edfff;
  --os-text-color: #333333;
  --os-background-color: #ffffff;
  /* More variables... */
}
```

## Integration

OrionSky UI seamlessly integrates with popular frameworks and CMS platforms:

### Next.js

OrionSky UI is built with Next.js in mind and can be easily integrated into your Next.js projects:

#### Basic Integration

```javascript
// In your _app.js or similar
import "orionsky-ui/dist/orionsky-ui.min.css";
import { useEffect } from "react";
import OrionSky from "orionsky-ui";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Initialize OrionSky UI components
    OrionSky.init();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
```

#### Using with Next.js App Router

```javascript
// In your app/layout.js
import "orionsky-ui/dist/orionsky-ui.min.css";
import OrionSkyInitializer from "@/components/OrionSkyInitializer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <OrionSkyInitializer />
      </body>
    </html>
  );
}

// In components/OrionSkyInitializer.js
"use client";
import { useEffect } from "react";
import OrionSky from "orionsky-ui";

export default function OrionSkyInitializer() {
  useEffect(() => {
    OrionSky.init();
  }, []);

  return null;
}
```

### WordPress

```php
// In your theme's functions.php
function enqueue_orionsky_ui() {
  wp_enqueue_style('orionsky-ui', 'https://cdn.jsdelivr.net/npm/orionsky-ui@0.1.0/dist/orionsky-ui.min.css');
  wp_enqueue_script('orionsky-ui', 'https://cdn.jsdelivr.net/npm/orionsky-ui@0.1.0/dist/orionsky-ui.min.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'enqueue_orionsky_ui');
```

### React

```javascript
import "orionsky-ui/dist/orionsky-ui.min.css";
import { useEffect } from "react";
import OrionSky from "orionsky-ui";

function App() {
  useEffect(() => {
    OrionSky.init();
  }, []);

  return (
    <div className="os-container">
      <h1>Hello, OrionSky UI!</h1>
      <button className="os-button os-button-primary">Click Me</button>
    </div>
  );
}
```

### Vue.js

```javascript
// In your main.js or similar
import "orionsky-ui/dist/orionsky-ui.min.css";
import OrionSky from "orionsky-ui";

// In your App.vue mounted hook
export default {
  mounted() {
    OrionSky.init();
  },
};
```

## Deployment Options

OrionSky UI offers flexible deployment options to suit your project needs:

### Self-Hosted

Download and host the files on your own server. This gives you complete control over the version and availability.

### CDN-Hosted (jsDelivr)

Use jsDelivr CDN for the fastest and easiest integration. It automatically pulls from npm and provides version management:

```html
<!-- Specific version -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/orionsky-ui@0.1.0/dist/orionsky-ui.min.css" />
<script src="https://cdn.jsdelivr.net/npm/orionsky-ui@0.1.0/dist/orionsky-ui.min.js"></script>

<!-- Latest version (auto-updates) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/orionsky-ui/dist/orionsky-ui.min.css" />
<script src="https://cdn.jsdelivr.net/npm/orionsky-ui/dist/orionsky-ui.min.js"></script>
```

Benefits of using jsDelivr:

- Automatic version management
- Global CDN with high availability
- No setup required
- Automatic updates when specifying only the major or minor version

### NPM Package

Install via NPM for seamless integration with modern JavaScript build systems:

```bash
npm install orionsky-ui
```

## Contributing

We welcome contributions from the community! Whether it's bug reports, feature requests, or code contributions, please feel free to get involved.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

See our [Contributing Guide](CONTRIBUTING.md) for more details.

## Community

- Join our [Discord server](https://discord.gg/orionsky-ui)
- Follow us on [Twitter](https://twitter.com/orionskyui)
- Star us on [GitHub](https://github.com/orionsky-ui/orionsky-ui)

## Roadmap

- **Current (v0.1)**: Core components, basic documentation, and community engagement
- **Coming Soon (v0.2)**: Additional components, improved documentation, and WordPress integration
- **Future**: Premium components, specialized plugins, and advanced theming options

## License

OrionSky UI is released under the MIT License. See the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with ❤️ by the OrionSky UI Team
</p>
