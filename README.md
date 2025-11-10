# Shreyas Gupta - Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Responsive Design** - Works perfectly on all devices
- **Dark Mode** - Automatic dark/light theme based on system preference
- **Smooth Animations** - Powered by Framer Motion
- **SEO Optimized** - Meta tags and semantic HTML
- **Fast Performance** - Built with Next.js 15 App Router
- **Professional Layout** - Clean, recruiter-friendly design

## 📋 Sections

- **Hero/About** - Introduction with profile photo and tagline
- **Projects** - Showcase of 6 major projects with tech stacks and links
- **Skills** - Organized by category (Programming, AI/ML, Tools, etc.)
- **Experience** - Professional internship experience
- **Education** - Academic background at SRMIST
- **Certifications** - Top 6 professional certifications
- **Contact** - Email, GitHub, LinkedIn, and phone links

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. **Install dependencies:**

\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

2. **Add your assets:**

Place the following files in the `public` folder:

- `profile.jpg` - Your professional photo (square format recommended)
- `resume_shreyas_gupta.pdf` - Your resume PDF

3. **Customize the content:**

Edit `app/page.tsx` and update the configuration objects at the top:

- `PROFILE` - Your personal information
- `PROJECTS` - Add your GitHub/demo links
- `SKILLS` - Modify skills as needed
- `EXPERIENCE` - Update work experience
- `CERTIFICATIONS` - Add/remove certifications
- `EDUCATION` - Update education details

### Development

Run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Build for production:

\`\`\`bash
npm run build
npm start
\`\`\`

## 🌐 Deployment to Vercel (Free)

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub:

\`\`\`bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
\`\`\`

2. Go to [vercel.com](https://vercel.com) and sign up/login
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"
7. Your site will be live at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
\`\`\`

## 📝 TODO After Setup

- [ ] Add your professional photo to `public/profile.jpg`
- [ ] Add your resume PDF to `public/resume_shreyas_gupta.pdf`
- [ ] Update GitHub links for all projects in `app/page.tsx`
- [ ] Add demo links for deployed projects
- [ ] Optional: Add Google Analytics
- [ ] Optional: Set up custom domain on Vercel

## 🎨 Customization Tips

### Colors

The portfolio uses a blue-purple gradient theme. To change colors, edit Tailwind classes in `app/page.tsx`:

- `from-blue-600 to-purple-600` - Main gradient
- `bg-blue-600` - Primary buttons
- `hover:text-blue-600` - Link hover states

### Fonts

Currently uses Inter (Google Font). To change, edit `app/layout.tsx`:

\`\`\`typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({ subsets: ["latin"] });
\`\`\`

### Add More Sections

You can easily add new sections by following the existing pattern in `app/page.tsx`.

## 📱 Mobile Responsive

The portfolio is fully responsive with breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## 📄 License

This project is open source and available for personal use.

## 🤝 Contact

**Shreyas Gupta**

- Email: contactshreyasgupta@gmail.com
- LinkedIn: [linkedin.com/in/contact-shreyas](https://www.linkedin.com/in/contact-shreyas/)
- GitHub: [github.com/contact-shreyas](https://github.com/contact-shreyas)
- Phone: +91 9151606122

---

Built with ❤️ using Next.js and Tailwind CSS
