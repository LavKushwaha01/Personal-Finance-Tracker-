# 📊 Personal Finance Tracker

A modern web application to help you **track your personal finances**, record income & expenses, and get a visual overview of your budget and spending habits.  
This project is built using **Next.js (React), TypeScript, and Tailwind CSS** — making it fast, responsive, and scalable for future upgrades.

---

##  Technologies Used

| Layer | Technologies |
|-------|--------------|
| Frontend Framework | **Next.js** — Server-side React framework |
| Language | **TypeScript** — Strong typing for scalable code |
| Styling | **Tailwind CSS** — Utility-first CSS framework |
| UI Management | **React Components** |
| Database / ORM | **Prisma** (configured in repo) |
| Deployment | Ready for Vercel / static export |
| Tooling | ESLint, PostCSS, Bun (package manager), Tailwind |

This stack offers rapid development experience with type safety, responsive design, and optimal performance.

---

## 📦 Features

✔ Track income & expense entries  
✔ Categories for transactions  
✔ View summed totals & summaries  
✔ Clean and responsive dashboard UI  
✔ Built with **React + Next.js** + **Tailwind CSS**  
✔ Uses **Prisma** for database modelling  
✔ TypeScript throughout for safer code  

---

## 📁 Repository Structure

/
├── app/ # Next.js pages & routing
├── components/ # Reusable UI components
├── images/ # Static media assets
├── lib/ # Helpers & utilities
├── prisma/ # Database schema & migrations
├── public/ # Public assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── .eslintrc # Linting configuration


---

## 🛠 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/LavKushwaha01/Personal-Finance-Tracker-.git
cd Personal-Finance-Tracker-
2. Install Dependencies
This project is configured with Bun but also works with npm/yarn:

Using Bun (recommended)
bun install
Using npm
npm install
3. Environment Setup
Before running locally, create a .env file using the example (if provided):

cp .env.example .env
Configure the database connection (if using Prisma & a database) — e.g., SQLite, PostgreSQL, etc.

4. Run the Development Server
npm run dev
# or
bun run dev
Your app will be available at:

http://localhost:3000
```

##  How It Works (Workflows)
- User interacts with UI components (forms, buttons)

- Frontend collects input (transaction, category)

- Next.js triggers API routes (under /app/api)

- API handlers forward requests to Prisma client

- Prisma talks to the database to create/read data

- Response is returned to UI and re-renders updated data
  
---

## UI Workflow
_ The dashboard fetches a list of transactions

- It categorizes them into income vs expenses

- Totals and summaries are computed in frontend logic

- Tailwind utility classes style components responsively

❤️ Contribution
Contributions are welcome!
Feel free to open issues or submit PRs with new features or bug fixes.



