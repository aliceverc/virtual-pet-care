# Virtual Pet Care App 🐾

A mobile-first React / Next.js app where you can adopt, nurture and manage a collection of virtual pets.


---

## Features

| Feature | Status |
| :--- | :--- |
| Pet List (card view, happiness emoji, responsive) | ✅ |
| Add / Edit pet form (name ≤ 15 char, character tags, live preview) | ✅ |
| Character-based default needs | ✅ |
| Needs bars + decay over time | ✅ |
| Interaction buttons (Feed, Sleep, Play) | ✅ |
| Release Pet with confirmation dialog | ✅ |
| Auto-delete when all needs = 0 | ✅ |
| Global 375 px container + Home logo link | ✅ |

---

## Tech Stack

* **Next.js 14** (React 18) – SPA + API routes  
* **MongoDB Atlas** via **Mongoose** – pets stored in `pets` collection  
* **SWR** – data fetching & cache  
* **styled-components** – scoped CSS  
* Optional dev tooling: ESLint + Prettier

---

## Local Setup

```bash
git clone https://github.com/your-username/pocket-pets.git
cd pocket-pets
cp .env.example .env.local         # add your MONGODB_URI here
npm install
npm run dev
