# 🚀 Project about my portfolio
UI & styled base on vscode editor

## Getting Started

First, run the development server:

```bash
pnpm install &&
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## 👀 Project Structure
Inside of this project, you'll see the following folders and files:

```
/
├── app/
│   └── pages/
│       └── page.tsx
├── auth/
├── components/
├── emails/
├── hooks/
├── lib/
├── public/
├── server/
├── styles/
├── types/
├── drizzle.config.ts
├── env.ts
├── liveblocks.config.ts
├── middleware.ts
├── next.config.mjs
└── package.json
└── tailwind.config.ts
└── velite.config.ts
```

> `drizzle.config.ts` config for drizzle orm
> 
> `liveblocks.config.ts` config for webscoket library
> 
> `velite.config.ts` config for .mdx and SSG on nextjs

## 🚩 Commands
All commands are run from the root of the project, from a terminal:

| Command          | Action                                                                             |
|------------------|------------------------------------------------------------------------------------|
| pnpm install     | Installs dependencies                                                              |
| pnpm dev         | Starts local dev server at localhost:3000                                          |
| pnpm build       | Build production site to ./.next/                                                  |
| pnpm preview     | Preview build locally, before deploying                                            |
| pnpm db:push     |                                                                                    |
| pnpm db:generate | Generate migrations based on ./server/db/schema.ts                                 |
| pnpm db:migrate  | Push schema changes directly to the database and omit managing SQL migration files |
| pnpm db:studio   | Launch drizzle Studio database browser locally from ./drizzle.config.ts            |
| pnpm lint        | Identifying and reporting on patterns found in ECMAScript/JavaScript code          |
| pnpm email       | Launch locally preview email template                                              |
|                  |                                                                                    |

## 🖇️ Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## 🌍 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
