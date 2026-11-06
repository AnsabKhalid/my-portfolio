# Ansab Khalid · Portfolio

Next.js 15 (App Router), exported as a static site.

## Edit content
- `lib/site.ts`: name, headline, email, location, social links, experience, skills.
- `lib/projects.ts`: every project (text, stack, facts). `featured: true` puts it on the home page.
- `public/work/*.jpg`: AI project images. Web projects draw their flow diagram from `flow`.

## Run
```
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in out/
```

## Deploy
Vercel: push this folder to GitHub, import it at vercel.com/new and keep the defaults. Or run `npx vercel` from here.
After deploying, set `siteUrl` in `lib/site.ts` to the real URL.
