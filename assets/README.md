# OrionSky UI Assets

This directory contains all the assets used in the OrionSky UI library.

## Directory Structure

- **images/**: Contains general images used throughout the UI, including logos
- **icons/**: Contains icon files (SVG preferred)
- **fonts/**: Contains font files if any custom fonts are used

## Logo Assets

Place your logo files in the `images` directory. Recommended formats and sizes:

- **Logo (Full)**:
  - `orionsky-logo.svg` (vector format, preferred)
  - `orionsky-logo.png` (raster format, 300x100px minimum, with transparency)
- **Logo (Icon/Symbol Only)**:

  - `orionsky-icon.svg` (vector format, preferred)
  - `orionsky-icon.png` (raster format, 100x100px minimum, with transparency)

- **Favicon**:
  - `favicon.ico` (multi-size ICO file)
  - `favicon.png` (32x32px, with transparency)
  - `apple-touch-icon.png` (180x180px)

## Usage in HTML

Example usage in HTML:

```html
<!-- Full logo -->
<img src="assets/images/orionsky-logo.svg" alt="OrionSky UI" class="os-logo" />

<!-- Icon only -->
<img src="assets/images/orionsky-icon.svg" alt="OrionSky UI" class="os-logo-icon" />
```

## Usage in CSS

Example usage in CSS:

```css
.os-navbar-brand {
  background-image: url("../assets/images/orionsky-logo.svg");
  background-repeat: no-repeat;
  background-size: contain;
}
```

## Usage in Examples

When referencing assets in example files, use relative paths:

```html
<img src="../assets/images/orionsky-logo.svg" alt="OrionSky UI" />
```

## CDN Usage

For CDN usage, assets will be available at:

```
https://cdn.jsdelivr.net/npm/orionsky-ui@0.1.0/assets/images/orionsky-logo.svg
```
