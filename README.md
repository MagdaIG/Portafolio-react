# Magdalena Inalaf - Portfolio

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS, deployed on GitHub Pages.

## Features

- 🎨 Modern and responsive design
- 🌟 Interactive 3D elements with Three.js
- 📱 Mobile-first approach
- ⚡ Fast performance with Next.js
- 🎯 SEO optimized
- 📧 Contact form integration with Formspree
- 🎭 Smooth animations with Framer Motion
- 🚀 Automatic deployment with GitHub Actions

## Quick Start

### 1. Clone and Install
```bash
git clone [your-repository-url]
cd Portafolio-react
npm install
```

### 2. Development
```bash
npm run dev
```

### 3. Build
```bash
npm run build
```

## GitHub Pages Deployment

This portfolio is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment

1. **Push your code to GitHub**
2. **Enable GitHub Pages:**
   - Go to your repository → Settings → Pages
   - Source: "GitHub Actions"
   - The workflow will automatically deploy on push to main/master

3. **Your site will be available at:**
   ```
   https://[your-username].github.io/[repository-name]
   ```

### Manual Deployment (Alternative)

```bash
./deploy-github-pages.sh
```

Then in GitHub:
- Go to Settings → Pages
- Source: "Deploy from a branch"
- Branch: "gh-pages"
- Folder: "/ (root)"

## Contact Form Setup

The contact form uses Formspree for static form handling:

1. **Sign up at [Formspree](https://formspree.io/)**
2. **Create a new form**
3. **Update the endpoint in `src/components/Contact.js`**

Current endpoint: `manbvygz`

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── aboutme/        # About page
│   ├── certifications/ # Certifications page
│   ├── contact/        # Contact page
│   ├── education/      # Education page
│   ├── experience/     # Experience page
│   ├── projects/       # Projects page
│   ├── skills/         # Skills page
│   └── layout.js       # Root layout
├── components/         # React components
└── styles/            # Global styles
```

## Technologies Used

- **Next.js 15** - React framework with static export
- **React 19** - UI library
- **Tailwind CSS** - Styling
- **Three.js** - 3D graphics
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **Formspree** - Contact form handling

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Test workflow locally
./test-workflow.sh
```

## Deployment Files

- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `deploy-github-pages.sh` - Manual deployment script
- `test-workflow.sh` - Local workflow testing
- `GITHUB_PAGES_SETUP.md` - Detailed setup guide
- `GITHUB_DEPLOYMENT_CHECKLIST.md` - Deployment checklist

## License

MIT License - feel free to use this template for your own portfolio!
