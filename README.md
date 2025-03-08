# Koneti Manoj - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS to showcase my skills, projects, and professional journey.

## 🌟 Features

- **Responsive Design**: Looks great on all devices from mobile to desktop
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Animations**: Smooth transitions and effects using Framer Motion
- **3D Background**: Interactive Three.js background in the hero section
- **Project Showcase**: Filterable project gallery with detailed modal views
- **Work Experience**: Interactive timeline of professional experience
- **Education History**: Visually appealing education timeline
- **Community Involvement**: Showcase of community projects and initiatives
- **Contact Form**: Easy way for visitors to get in touch
- **Performance Optimized**: Fast loading with code splitting and optimization

## 🛠️ Tech Stack

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **Animations**: Framer Motion
- **3D Graphics**: Three.js
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **Type Safety**: TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and visit `http://localhost:8080`

## 📂 Project Structure

```
src/
├── components/        # UI components
│   ├── ui/            # shadcn/ui components
│   ├── AboutSection.tsx
│   ├── CommunitySection.tsx
│   ├── ContactSection.tsx
│   ├── DarkModeToggle.tsx
│   ├── EducationSection.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── Navbar.tsx
│   ├── ProjectsSection.tsx
│   ├── Scene3D.tsx    # Three.js background
│   ├── SkillsSection.tsx
│   ├── ThemeProvider.tsx
│   └── WorkExperienceSection.tsx
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── pages/             # Page components
├── App.tsx            # Main app component
└── main.tsx           # Entry point
```

## 🔧 Customization

### Personal Information

Edit the components in the `src/components/` directory to update:
- Your name, title, and bio
- Skills and expertise
- Project details
- Work experience
- Education history
- Contact information

### Styling

- Modify colors and theme in `tailwind.config.ts`
- Adjust component styles in their respective files
- Update global styles in `src/index.css`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile devices
- Tablets
- Laptops/Desktops
- Large screens

## 🌙 Dark/Light Mode

The theme toggle respects the user's system preferences and allows manual toggling between light and dark modes.

## 🚢 Deployment

### Building for Production

```bash
npm run build
# or
yarn build
```

This will create a `dist` directory with production-ready files.

### Deploying to GitHub Pages

1. Update the `vite.config.ts` file to include your repository name as the base path:
   ```typescript
   base: '/your-repo-name/',
   ```

2. Create a GitHub Actions workflow file at `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: 18
             cache: 'npm'
         - run: npm ci
         - run: npm run build
         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

3. Push your code to GitHub and enable GitHub Pages in your repository settings.

### Other Hosting Options

The built project can be deployed to any static hosting service, including:
- Netlify
- Vercel
- AWS S3
- Firebase Hosting

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [shadcn/ui](https://ui.shadcn.com/) for the component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Three.js](https://threejs.org/) for 3D graphics
- [Lucide Icons](https://lucide.dev/) for the icon set
- [Vite](https://vitejs.dev/) for the build tool

---

Made with ❤️ by Koneti Manoj