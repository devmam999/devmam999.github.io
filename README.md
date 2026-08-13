# Devesh Mamidi — Personal Site

Portfolio site for recruiters and hiring managers. Built with Next.js, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) or [http://localhost:3001](http://localhost:3001) if 3000 is already in use.

## Publish to GitHub Pages (`https://devmam999.github.io`)

This is a **user site**, so the GitHub repo must be named **`devmam999.github.io`** and owned by `devmam999`. No `basePath` is needed because the site is served from the domain root.

Official references:
- [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports)
- [Next.js GitHub Pages template](https://github.com/nextjs/deploy-github-pages)
- [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

### 1. Create the repo

1. On GitHub, create a **public** repository named `devmam999.github.io`.
2. Push this project to that repo on the `main` branch.

```bash
git remote add origin https://github.com/devmam999/devmam999.github.io.git
git branch -M main
git push -u origin main
```

### 2. Enable Pages from GitHub Actions

1. Repo **Settings → Pages**
2. Under **Build and deployment → Source**, choose **GitHub Actions**
3. Do not pick a branch as the source — the workflow deploys the `out/` folder

### 3. Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`. It builds a static export and publishes it. You can also run the workflow from the **Actions** tab.

The live site is [https://devmam999.github.io](https://devmam999.github.io). First publish can take a few minutes.

## Notes

- GitHub Pages is static only. This project uses `output: "export"` and unoptimized images so it can run there.
- Set `NEXT_PUBLIC_SITE_URL=https://devmam999.github.io` in GitHub Actions (already in the workflow) so sitemap, robots, and Open Graph URLs are correct.
