# Evan Brewer Film Portfolio - GitHub & Netlify Deployment Guide

## Step 1: Create a GitHub Repository

### On GitHub.com:
1. Go to **github.com** and log in
2. Click the **+** icon in the top right → **New repository**
3. Fill in the form:
   - **Repository name:** `evan-brewer-portfolio` (or similar)
   - **Description:** "Film portfolio website showcasing production experience"
   - **Visibility:** Public (so Netlify can access it)
   - **Add .gitignore:** Select "Node" from the dropdown
   - **Add license:** Optional (MIT is good for portfolios)
4. Click **Create repository**

---

## Step 2: Push Your Code to GitHub

### In your terminal (on your computer):

```bash
# Navigate to your project directory
cd evan-portfolio-web

# Add the GitHub remote (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/evan-brewer-portfolio.git

# Rename branch to main (if needed)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

**Replace:**
- `YOUR_USERNAME` with your actual GitHub username
- `evan-brewer-portfolio` with your actual repository name

---

## Step 3: Connect to Netlify

### On Netlify.com:
1. Log in to **netlify.com**
2. Click **Add new site** → **Import an existing project**
3. Choose **GitHub** as your Git provider
4. Authorize Netlify to access your GitHub account
5. Select your `evan-brewer-portfolio` repository
6. Configure build settings:
   - **Base directory:** (leave blank)
   - **Build command:** `pnpm run build`
   - **Publish directory:** `dist`
7. Click **Deploy site**

Netlify will automatically build and deploy your site. This takes 2-5 minutes.

---

## Step 4: Connect Your Custom Domain (Optional)

### On Netlify:
1. Go to your site's **Settings** → **Domain management**
2. Click **Add domain**
3. Enter your custom domain (e.g., `evanbrewer.com`)
4. Follow the DNS setup instructions

---

## Step 5: Update Your Code (After Deployment)

Whenever you make changes to your portfolio:

```bash
# Make your edits locally
# Then commit and push:

git add .
git commit -m "Update portfolio content"
git push origin main
```

Netlify will automatically rebuild and redeploy your site within 1-2 minutes.

---

## Troubleshooting

### Build fails on Netlify?
- Check that `pnpm run build` works locally first
- Ensure all dependencies are in `package.json`
- Check the Netlify build logs for specific errors

### Site shows old content?
- Clear your browser cache (Ctrl+Shift+Delete)
- Wait 2-3 minutes for Netlify to finish deploying
- Check the Netlify deployment status

### Need to edit images?
- Replace images in `client/public/images/`
- Commit and push changes
- Netlify will redeploy automatically

---

## Your Repository Structure

```
evan-brewer-portfolio/
├── client/
│   ├── public/
│   │   ├── images/          ← Your portfolio images
│   │   └── index.html
│   └── src/
│       ├── pages/           ← Home, About, Projects, Contact
│       ├── components/      ← Navigation, Layout
│       ├── App.tsx
│       └── index.css
├── package.json
├── vite.config.ts
└── netlify.toml             ← Netlify configuration
```

---

## Next Steps

1. ✅ Create GitHub repository
2. ✅ Push code to GitHub
3. ✅ Connect to Netlify
4. ✅ Wait for deployment (2-5 minutes)
5. ✅ Visit your live site
6. ✅ Connect custom domain (optional)

Your portfolio will be live and completely independent from Manus!
