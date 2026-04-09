# Slide HTML Template

A lightweight slide presentation template built with plain HTML, CSS, and JavaScript.

This repository is a clean template. All demo content, logos, and images have been removed, and the framework has been upgraded into a more complete presentation toolkit — ready for you to drop in your own content.

## File Structure

```text
.
├── index.html
├── assets
│   ├── css
│   │   └── slides.css
│   ├── js
│   │   └── slides.js
│   └── images
├── README.md
```

## How to Use

1. Edit `index.html`
2. Add or remove `<section class="slide">...</section>` blocks as needed
3. Modify `assets/css/slides.css` to adjust styles
4. For additional interactivity, edit `assets/js/slides.js`

## Features

- Polished visual style with clear typographic hierarchy
- Cover slide, roadmap slide, content card slide, and closing slide
- Built-in prompt components: note, tip, watch out, key point, takeaway, steps
- Previous / Next navigation
- Page counter and top progress bar
- Jump-to-page input
- Fullscreen toggle
- Keyboard shortcut help panel
- URL hash sync (e.g. `#slide-2`)
- Print / export to PDF via browser

## Usage

Open `index.html` in a browser to preview.

Keyboard shortcuts:

- `ArrowLeft` — Previous slide
- `ArrowRight` — Next slide
- `Space` — Next slide
- `Home` — First slide
- `End` — Last slide
- `f` — Toggle fullscreen
- `p` — Print / export PDF
- `?` — Show keyboard help

## Notes

- `assets/images` is currently empty. Drop your own images in as needed.
- No build tools required — ideal for quick presentations or talk templates.
