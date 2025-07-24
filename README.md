# Virtual Pet Care App 🐾

A mobile-first React / Next.js app where you can adopt, nurture and manage a collection of virtual pets.

<a href="https://virtual-pet-care.vercel.app/" target="_blank"><img width="1378" height="742" alt="Bildschirmfoto 2025-07-16 um 08 28 45" src="https://github.com/user-attachments/assets/d6b603b4-4b7f-4862-8a18-098ffe779512" /></a>

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
| Global 375 px container + Home logo link | ✅ |

---

## Tech Stack

* **Next.js 14** (React 18) – SPA + API routes  
* **MongoDB Atlas** via **Mongoose** – pets stored in `pets` collection  
* **SWR** – data fetching & cache  
* **styled-components** – scoped CSS  
* Optional dev tooling: ESLint + Prettier
