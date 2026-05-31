# Nelema Jahan — Portfolio

A React.js portfolio website of mine.
## 🚀 Getting Started (Local Development)

### Prerequisites
- Node.js (v16 or higher)
- npm

### Install & Run
```bash
npm install
npm start
```
Opens at `http://localhost:3000`

---

## 🌐 Deployment Options

### Option 1: Netlify (Recommended — Free)
1. Run `npm run build` to generate the `build/` folder
2. Go to [netlify.com](https://netlify.com) → New site → Deploy manually
3. Drag and drop the `build/` folder
4. Done! You get a free `.netlify.app` URL

**Or connect via GitHub:**
1. Push this repo to GitHub
2. Netlify → New site → Import from Git
3. Build command: `npm run build`
4. Publish directory: `build`

### Option 2: Vercel (Free)
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Framework: Create React App (auto-detected)
4. Click Deploy

### Option 3: GitHub Pages
1. `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://Nelema-Jahan.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run `npm run deploy`

---

## 📁 Project Structure
```
src/
├── App.js                  # Main app with routing
├── index.css               # All styles (same design as reference)
├── Components/
│   ├── Navbar.js           # Fixed navbar with blur
│   ├── Home.js             # Hero + brief intro
│   ├── About.js            # About + skills grid
│   ├── Projects.js         # Projects showcase
│   ├── Contact.js          # Contact form + info
│   ├── Footer.js           # Footer with social links
│   ├── Skills.js           # Skill icon box
│   ├── ProjectBox.js       # Individual project card
│   ├── Typed.js            # Typewriter effect
│   └── MoveToTop.js        # Scroll-to-top button
└── LottieFiles/
    ├── SpaceBoy.json       # Home page animation
    ├── coder.json          # About page animation
    └── night-sky.json      # Background animation
```

## ✏️ Personalisation
- **LinkedIn URL**: Update in `Footer.js` and `Contact.js`
- **Phone number**: Update in `Contact.js`
- **Add projects**: Edit `Projects.js`
- **Add skills**: Edit `About.js` and `Skills.js`
