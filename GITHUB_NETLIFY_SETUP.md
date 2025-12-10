# Quick Start: GitHub + Netlify Deployment

## What You Need
- GitHub account (you have this ✓)
- Netlify account (you have this ✓)
- Git installed on your computer

---

## Step-by-Step Instructions

### 1. Create GitHub Repository

**On GitHub.com:**
1. Click **+** icon → **New repository**
2. Name it: `evan-brewer-portfolio`
3. Add description: "Film portfolio website"
4. Choose **Public**
5. Check **Add .gitignore** (select "Node")
6. Click **Create repository**

---

### 2. Push Code to GitHub

**Copy and paste these commands into your terminal:**

```bash
cd evan-portfolio-web

git remote add origin https://github.com/YOUR_USERNAME/evan-brewer-portfolio.git

git branch -M main

git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username**

---

### 3. Connect to Netlify

**On Netlify.com:**
1. Click **Add new site** → **Import an existing project**
2. Select **GitHub**
3. Authorize Netlify
4. Choose `evan-brewer-portfolio` repository
5. Build settings should be:
   - **Build command:** `pnpm run build`
   - **Publish directory:** `dist`
6. Click **Deploy site**

**Wait 2-5 minutes for deployment to complete**

---

### 4. Your Site is Live!

Netlify will give you a URL like:
```
https://evan-brewer-portfolio.netlify.app
```

You can change this to a custom domain in Netlify settings.

---

### 5. Making Updates

After you deploy, to update your portfolio:

```bash
# Make changes to your files locally

git add .
git commit -m "Update portfolio"
git push origin main
```

Netlify automatically rebuilds and redeploys (1-2 minutes).

---

## File Locations

The code files are already set up. Key files:

- **Home page:** `client/src/pages/Home.tsx`
- **About page:** `client/src/pages/About.tsx`
- **Projects page:** `client/src/pages/Projects.tsx`
- **Contact page:** `client/src/pages/Contact.tsx`
- **Images:** `client/public/images/`
- **Styles:** `client/src/index.css`

---

## Troubleshooting

**"Build failed" error on Netlify?**
- Check the Netlify build logs (click the failed deploy)
- Make sure `pnpm run build` works on your computer first

**Site shows old content?**
- Clear browser cache (Ctrl+Shift+Delete)
- Wait 2-3 minutes for Netlify to finish

**Want to edit text/images?**
- Edit files locally
- Run `git add .` → `git commit -m "message"` → `git push origin main`
- Netlify redeploys automatically

---

## Done! 🎬

Your portfolio is now:
- ✅ On GitHub (version controlled)
- ✅ Deployed on Netlify (live on the internet)
- ✅ Independent from Manus (no "Made by Manus" popup)
- ✅ Ready to share with Netflix, Paramount, etc.
