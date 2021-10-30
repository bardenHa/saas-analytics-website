# SaaS Analytics Website

This project was a simple mockup of a SaaS website homepage. There was a lot of new development processes and technologies I wanted to gain experience with, namely `Typescript`, `Jest`, `React Testing Library` and CI/CD. So I just thought I'd throw together a basic page and from this [design](https://www.figma.com/community/file/905814382591046401).

I also wanted to focus on using a scalable file structure (even though this is a tiny project) just so I could get a practical understanding of best practices on a larger project; so if you're wondering why some things are unnecessarily abstracted, there's your answer.

## Overview

- This project runs [Next.js](https://nextjs.org/) under the hood.
- Typescript for type checking
- Tailwind for styling
- Jest for running unit/integration tests
- React Test Library for testing react components
- Eslint for linting rule enforcement
- Prettier for format enforcement
- Github Actions for CI
  - Checks linting, formatting, types, unit tests & build
  - Runs on pull requests to any branch
  - Required on Prod/Staging/Dev branches with security rules
- Vercel for CD
  - Deploys preview/production builds to branches staging/production respectively

## Demo

Take a look at the [production](https://saas-analytics-website.vercel.app/) build

## Run Locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000)

## License

This project uses the [MIT License](saas-analytics-website/LICENSE).
