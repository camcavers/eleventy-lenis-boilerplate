# Eleventy + Lenis Boilerplate

This is a boilerplate project for building a single-page static site using [Eleventy](https://www.11ty.dev/) and [Lenis](https://github.com/studio-freight/lenis) for smooth scrolling effects.

## Features

- **Eleventy** as a static site generator
- **Lenis** for smooth scrolling
- **PostCSS** with plugins like Autoprefixer and CSS Nano
- **Live Reload** during development

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/camcavers/eleventy-lenis-boilerplate.git
   cd eleventy-lenis-boilerplate

2. **Install Dependencies:**

    npm install

### Development
Start the development server with live reload:

    npm run serve

The site will be available at http://localhost:8080/.

### Building for Production
Generate the optimized site for production:

    npm run build

The output will be in the _site directory.

### Project Structure

    eleventy-lenis-boilerplate/
    ├── src/
    │   ├── _includes/
    │   │   └── layout.njk
    │   ├── pages/
    │   │   └── index.njk
    │   ├── images/
    │   ├── scripts/
    │   └── styles/
    │       └── style.css
    ├── .eleventy.js
    ├── package.json
    ├── postcss.config.js
    └── README.md

- **src/**: Main source directory.
  - **_includes/**: Contains reusable template components.
  - **pages/**: Your site pages.
  - **images/**: Image assets.
  - **scripts/**: JavaScript files.
  - **styles/**: CSS stylesheets.
- **.eleventy.js**: Eleventy configuration file.
- **package.json**: Node.js dependencies and scripts.
- **postcss.config.js**: Configuration for PostCSS plugins.

## Customization

- **Update Site Content:**
  - Modify or add templates in `src/pages/`.
  - Customize layouts in `src/_includes/`.
- **Styles and Scripts:**
  - Add CSS styles in `src/styles/style.css`.
  - Include JavaScript files in `src/scripts/`.

## Dependencies

- **@11ty/eleventy**: Static site generator.
- **@studio-freight/lenis**: Smooth scrolling library.
- **PostCSS Plugins**:
  - **autoprefixer**
  - **cssnano**
  - **postcss-nested**
  - **postcss-preset-env**

## License

This project is licensed under the [MIT License](LICENSE).
