# 🚀 Quick Start Guide - Shreyas Gupta Portfolio

## ✅ Setup Complete!

Your portfolio is ready to run! Here's what's been set up:

### 📁 Files Created:
- ✅ Next.js project structure
- ✅ Main portfolio page (`app/page.tsx`)
- ✅ Tailwind CSS styling
- ✅ Framer Motion animations
- ✅ All dependencies installed
- ✅ Resume PDF copied to public folder

---

## 🎯 Next Steps (Important!)

### 1️⃣ Add Your Professional Photo

You need to add your professional photo to make the portfolio complete:

**Option A: If you have it on your computer**
1. Place your professional photo in the `public` folder
2. Rename it to `profile.jpg`
3. Path should be: `d:\1. Portfolio\public\profile.jpg`

**Option B: Temporary placeholder**
The site will show a nice fallback with your initial "S" if no photo is found.

---

## 🏃 Running Your Portfolio

### Start the Development Server:

\`\`\`powershell
cd "d:\1. Portfolio"
npm run dev
\`\`\`

Then open your browser and go to: **http://localhost:3000**

Your portfolio will be live locally with hot-reload (any changes you make will update instantly)!

---

## ✏️ Customizing Your Portfolio

### Update Project Links

Open `app/page.tsx` and find the `PROJECTS` array (around line 28). Add your GitHub/demo links:

\`\`\`typescript
const PROJECTS = [
  {
    title: "Light Pollution Explorer 2.0",
    // ... other fields ...
    github: "https://github.com/contact-shreyas/your-repo", // ← Add your links here
    demo: "https://your-demo-site.com", // ← Add demo links here
  },
  // ... more projects
];
\`\`\`

### Update Personal Information

In `app/page.tsx`, find the `PROFILE` object (around line 21) to update:
- Email
- Phone
- Social links
- Resume path

### Add More Projects

Just copy one project object and add your new project details!

---

## 🌐 Deploying to Vercel (FREE)

### Step 1: Create a GitHub Repository

\`\`\`powershell
cd "d:\1. Portfolio"
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
\`\`\`

Then create a new repository on GitHub and push:

\`\`\`powershell
git remote add origin https://github.com/contact-shreyas/your-portfolio-repo.git
git push -u origin main
\`\`\`

### Step 2: Deploy on Vercel

1. Go to https://vercel.com
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your portfolio repository
5. Click "Deploy" (Vercel auto-detects Next.js!)
6. Your site will be live at: `https://your-project.vercel.app` 🎉

**That's it!** Vercel will auto-deploy whenever you push to GitHub.

---

## 📝 Current Content Summary

Your portfolio includes:

### 🎯 Projects (6 total):
1. **Light Pollution Explorer 2.0** (Highlighted) - Geospatial AI platform
2. **AI-Powered Fraud Detection** (Highlighted) - ML system with 95% accuracy
3. **Medical Visual Question Answering** - Deep learning + CV + NLP
4. **AI Assistant Bot** - Raspberry Pi + TensorFlow chatbot
5. **Electricity Billing System** - Java + MySQL application
6. **Secure Full-Stack Application** - Next.js + Prisma

### 💼 Experience:
- Business Strategy Intern @ To-Let Globe
- Web Developer Intern @ Oasis Infobyte

### 🎓 Education:
- SRMIST - M.Tech (Int.) AI - CGPA 8.21

### 🏆 Certifications (6 top ones):
- NLP - NPTEL
- NLP with Azure AI - Microsoft
- Azure AI Document Intelligence - Microsoft
- Technology Job Simulation - Deloitte
- Google AI-ML Certification
- Programming in Java - NPTEL

### 🛠️ Skills (30+ technologies):
Organized into 4 categories:
- Programming Languages
- AI/ML & Data Science
- Frameworks & Libraries
- Tools & Technologies

---

## 🎨 Features of Your Portfolio

✅ **Responsive Design** - Works on mobile, tablet, desktop
✅ **Dark Mode** - Automatic based on system preference
✅ **Smooth Animations** - Professional Framer Motion effects
✅ **SEO Optimized** - Ready for Google indexing
✅ **Fast Performance** - Next.js 15 App Router
✅ **Recruiter-Friendly** - Clean layout, easy navigation
✅ **Download Resume** - Button in header and contact section
✅ **Social Links** - GitHub, LinkedIn, Email, Phone, LeetCode

---

## 🆘 Need Help?

### Common Issues:

**Issue: "Cannot find profile.jpg"**
- Solution: Add your photo to `public/profile.jpg` or the site will show a nice fallback

**Issue: Port 3000 already in use**
- Solution: Run `npm run dev -- -p 3001` to use port 3001 instead

**Issue: Changes not reflecting**
- Solution: Hard refresh your browser (Ctrl + Shift + R)

---

## 📞 Questions to Answer

Before deploying, make sure you've:

1. ✅ Added your professional photo (`public/profile.jpg`)
2. ⏳ Updated GitHub links for your projects
3. ⏳ Added demo links for deployed projects (if any)
4. ✅ Verified all personal information is correct

---

## 🎉 You're All Set!

Your portfolio is production-ready and optimized for:
- ✅ Internship applications
- ✅ Job applications  
- ✅ Hackathon showcases
- ✅ LinkedIn profile link
- ✅ Resume enhancement

**Ready to launch your portfolio? Run `npm run dev` and see it in action!**

---

Built with ❤️ for Shreyas Gupta
Tech Stack: Next.js 15 + TypeScript + Tailwind CSS + Framer Motion
