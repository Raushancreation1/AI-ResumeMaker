<![CDATA[<div align="center">

# 🤖 AI Resume Maker

### Build Professional, ATS-Optimized Resumes with the Power of AI

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Strapi](https://img.shields.io/badge/Strapi-5.13-4945FF?style=for-the-badge&logo=strapi&logoColor=white)](https://strapi.io/)
[![Gemini AI](https://img.shields.io/badge/Gemini_AI-1.5_Flash-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com/)

<br/>

> 🚀 *10x your chances of landing your dream company interview with our AI-powered ATS resume builder.*

[Live Demo](#) · [Report Bug](https://github.com/Raushancreation1/AI-ResumeMaker/issues) · [Request Feature](https://github.com/Raushancreation1/AI-ResumeMaker/issues)

</div>

---

## 📑 Table of Contents

- [Features](#-features)
- [System Architecture](#-system-architecture)
- [Component Architecture](#-component-architecture)
- [Data Flow Diagram](#-data-flow-diagram)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [User Flows](#-user-flows)
- [Deployment](#-deployment)
- [Performance Optimizations](#-performance-optimizations)
- [UI Features](#-ui-features)
- [Security Features](#-security-features)
- [Database Schema](#-database-schema)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-documentation)

---

## ✨ Features

| Category | Feature | Description |
|----------|---------|-------------|
| 🤖 **AI-Powered** | Smart Summary Generation | Gemini 1.5 Flash generates professional summaries tailored to your job title |
| 🤖 **AI-Powered** | Experience Bullet Points | AI writes impactful, action-verb-driven work experience descriptions |
| 📝 **Resume Builder** | Multi-Step Form Wizard | 5-step guided form: Personal → Summary → Experience → Education → Skills |
| 📝 **Resume Builder** | Live Preview | Real-time resume preview updates as you type |
| 🎨 **Customization** | Theme Colors | Choose from multiple theme colors to personalize your resume |
| 🎨 **Customization** | Rich Text Editor | WYSIWYG editor for formatting work experience descriptions |
| 🔐 **Authentication** | Clerk Integration | Secure sign-in/sign-up with Google, GitHub, and email providers |
| 📤 **Sharing** | Unique View Links | Generate shareable URLs for each resume (`/my-resume/:id/view`) |
| 📤 **Sharing** | PDF Download | Download your completed resume as a PDF |
| 📊 **Management** | Dashboard | View, edit, and delete all your saved resumes |
| 📊 **Management** | CRUD Operations | Full Create, Read, Update, Delete for resumes via Strapi API |

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                      CLIENT BROWSER                      │
│  ┌─────────────────────────────────────────────────────┐ │
│  │              React 18 + Vite (Port 5173)            │ │
│  │  ┌──────────┐ ┌──────────┐ ┌────────────────────┐  │ │
│  │  │  Clerk   │ │  Router  │ │   Gemini AI Chat   │  │ │
│  │  │  Auth    │ │ Provider │ │   Session (Client)  │  │ │
│  │  └────┬─────┘ └────┬─────┘ └─────────┬──────────┘  │ │
│  │       │             │                 │             │ │
│  │  ┌────▼─────────────▼─────────────────▼──────────┐  │ │
│  │  │              Application Layer                │  │ │
│  │  │  Home │ Dashboard │ Edit Resume │ View Resume  │  │ │
│  │  └──────────────────┬────────────────────────────┘  │ │
│  │                     │                               │ │
│  │            ┌────────▼────────┐                      │ │
│  │            │   GlobalApi.js  │ Axios HTTP Client     │ │
│  │            └────────┬────────┘                      │ │
│  └─────────────────────┼───────────────────────────────┘ │
└─────────────────────────┼────────────────────────────────┘
                          │ REST API (HTTP)
┌─────────────────────────┼────────────────────────────────┐
│                BACKEND SERVER (Port 1337)                 │
│  ┌──────────────────────▼──────────────────────────────┐ │
│  │              Strapi v5.13 CMS                       │ │
│  │  ┌─────────────┐ ┌──────────────┐ ┌─────────────┐  │ │
│  │  │ Controllers  │ │   Services   │ │   Routes    │  │ │
│  │  └──────┬──────┘ └──────┬───────┘ └──────┬──────┘  │ │
│  │         └───────────────┼────────────────┘          │ │
│  │                  ┌──────▼──────┐                    │ │
│  │                  │  SQLite DB  │                    │ │
│  │                  │  (data.db)  │                    │ │
│  │                  └─────────────┘                    │ │
│  └─────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│                   EXTERNAL SERVICES                       │
│  ┌──────────────┐  ┌──────────────────────────────────┐  │
│  │  Clerk Auth  │  │  Google Gemini AI (1.5 Flash)    │  │
│  │  (Identity)  │  │  (Content Generation)            │  │
│  └──────────────┘  └──────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
```

---

## 🧩 Component Architecture

```
src/
├── main.jsx ─────────────────── Entry Point + Router Config + ClerkProvider
├── App.jsx ──────────────────── Auth Guard + Layout (Header + Outlet + Toaster)
│
├── home/
│   └── Home.jsx ─────────────── Landing Page (Hero + How it Works + Features)
│
├── auth/
│   └── sign-in/Sign-in.jsx ──── Clerk Sign-In Page
│
├── components/
│   ├── custom/
│   │   └── Header.jsx ──────── Navigation Bar (Logo + Auth Buttons + UserButton)
│   └── ui/ ─────────────────── Shadcn/Radix UI Primitives
│       ├── button.jsx
│       ├── input.jsx
│       ├── textarea.jsx
│       ├── dialog.jsx
│       ├── alert-dialog.jsx
│       ├── dropdown-menu.jsx
│       ├── popover.jsx
│       └── sonner.jsx (Toast Notifications)
│
├── dashboard/
│   ├── index.jsx ────────────── Resume List Grid + Loading Skeletons
│   └── components/
│       ├── AddResume.jsx ────── "+" Card to Create New Resume (Dialog)
│       └── ResumeCardItem.jsx ─ Resume Card (Preview + Edit/Delete/View)
│
├── dashboard/resume/
│   ├── [resumeId]/edit/
│   │   └── index.jsx ───────── Edit Page (FormSection + ResumePreview)
│   └── components/
│       ├── FormSection.jsx ──── 5-Step Form Wizard Controller
│       ├── ResumePreview.jsx ── Live Preview Panel
│       ├── ThemeColor.jsx ───── Color Picker Popover
│       ├── RichTextEditor.jsx ─ WYSIWYG for Work Experience
│       ├── forms/
│       │   ├── PersonalDetail.jsx ── Step 1: Name, Email, Phone, etc.
│       │   ├── Summery.jsx ───────── Step 2: AI-Generated Summary
│       │   ├── Experience.jsx ────── Step 3: Work Experience (Repeatable)
│       │   ├── Education.jsx ─────── Step 4: Education (Repeatable)
│       │   └── Skills.jsx ────────── Step 5: Skills with Rating
│       └── preview/
│           ├── PersonalDetailPreview.jsx
│           ├── SummeryPreview.jsx
│           ├── ExperiencePreview.jsx
│           ├── EducationalPreview.jsx
│           └── SkillsPreview.jsx
│
├── my-resume/[resumeId]/view/
│   └── index.jsx ────────────── Public View + Download/Share
│
├── context/
│   └── ResumeInfoContext.jsx ── React Context for Resume State
│
├── data/
│   └── dummy.jsx ────────────── Default/Dummy Resume Data
│
└── lib/
    └── utils.js ─────────────── cn() Helper (clsx + tailwind-merge)
```

---

## 🔄 Data Flow Diagram

```
┌──────────┐    Sign In     ┌──────────┐    Verify     ┌──────────┐
│   User   │ ─────────────► │  Clerk   │ ────────────► │  App.jsx │
│ (Browser)│ ◄───────────── │  Auth    │ ◄──────────── │  Guard   │
└──────────┘   JWT Token    └──────────┘   isSignedIn  └────┬─────┘
                                                            │
                                              ┌─────────────▼──────────────┐
                                              │       Dashboard            │
                                              │  GetUserResumes(email)     │
                                              └─────────────┬──────────────┘
                                                            │
                              ┌──────────────────────┐      │ Axios
                              │    Gemini AI API     │      │ REST
  AI Summary/Experience ◄──── │  (gemini-1.5-flash)  │      │
  Suggestions                 └──────────────────────┘      │
       │                                                    ▼
       │                                          ┌──────────────────┐
       ▼                                          │   Strapi CMS     │
  ┌──────────────┐   PUT /user-resumes/:id        │   (Port 1337)    │
  │  Edit Resume │ ──────────────────────────────► │                  │
  │  (5 Steps)   │ ◄────────────────────────────── │  ┌────────────┐ │
  └──────┬───────┘   GET /user-resumes/:id         │  │  SQLite    │ │
         │                                         │  │  Database  │ │
         │           ┌──────────────┐              │  └────────────┘ │
         └──────────►│ Live Preview │              └──────────────────┘
  ResumeInfoContext  │  (Real-time) │
                     └──────┬───────┘
                            │
                     ┌──────▼───────┐
                     │  View/Share  │
                     │  Download    │
                     └──────────────┘
```

---

## 🛠️ Tech Stack

### Frontend

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 18.3 | UI Component Library |
| **Vite** | 6.3 | Build Tool & Dev Server |
| **TailwindCSS** | 4.1 | Utility-First CSS Framework |
| **React Router DOM** | 7.6 | Client-Side Routing |
| **Clerk React** | 5.31 | Authentication & User Management |
| **Google Generative AI** | 0.24 | Gemini 1.5 Flash AI Integration |
| **Axios** | 1.9 | HTTP Client for API Calls |
| **Radix UI** | Latest | Accessible UI Primitives (Dialog, Popover, etc.) |
| **Lucide React** | 0.511 | Icon Library |
| **React Icons** | 5.5 | Additional Icon Set |
| **react-simple-wysiwyg** | 3.2 | Rich Text Editor |
| **react-web-share** | 2.0 | Web Share API Integration |
| **Sonner** | 2.0 | Toast Notification System |
| **UUID** | 11.1 | Unique Resume ID Generation |

### Backend

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Strapi** | 5.13 | Headless CMS & REST API |
| **SQLite** (better-sqlite3) | 11.3 | Local Database (Development) |
| **PostgreSQL** (pg) | 8.16 | Production Database Support |
| **Node.js** | ≥18, ≤22 | Server Runtime |

### External Services

| Service | Purpose |
|---------|---------|
| **Clerk** | Authentication (Google, GitHub, Email) |
| **Google Gemini AI** | AI-Powered Content Generation |

---

## 📦 Installation

### Prerequisites

- **Node.js** ≥ 18.x and ≤ 22.x
- **npm** ≥ 6.x
- A **Clerk** account → [clerk.com](https://clerk.com)
- A **Google AI** API key → [ai.google.dev](https://ai.google.dev)

### 1. Clone the Repository

```bash
git clone https://github.com/Raushancreation1/AI-ResumeMaker.git
cd AI-ResumeMaker
```

### 2. Backend Setup (Strapi)

```bash
cd Backend
npm install
```

Create a `.env` file in `Backend/`:

```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=<your-generated-app-keys>
API_TOKEN_SALT=<your-api-token-salt>
ADMIN_JWT_SECRET=<your-admin-jwt-secret>
TRANSFER_TOKEN_SALT=<your-transfer-token-salt>
JWT_SECRET=<your-jwt-secret>
```

> 💡 Generate secrets using: `openssl rand -base64 32`

Start the backend:

```bash
npm run develop
```

The Strapi admin panel will be available at `http://localhost:1337/admin`.

### 3. Frontend Setup (React + Vite)

```bash
cd Frontend
npm install
```

Create a `.env` file in `Frontend/`:

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_key_here
VITE_GOOGLE_AI_API_KEY=your_google_ai_api_key_here
VITE_STRAPI_API_KEY=your_strapi_api_token_here
```

Start the frontend:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### 4. Configure Strapi API Token

1. Open Strapi admin panel at `http://localhost:1337/admin`
2. Go to **Settings** → **API Tokens** → **Create new API Token**
3. Set permissions: **Full access** to `user-resume` content type
4. Copy the token into `Frontend/.env` as `VITE_STRAPI_API_KEY`

---

## 👤 User Flows

### New User Flow

```
Landing Page → Click "Get Started" → Clerk Sign-In → Dashboard
     │
     ▼
Click "+" Card → Enter Resume Title → Create Resume
     │
     ▼
Step 1: Personal Details (Name, Email, Phone, Job Title, Address)
     │
     ▼
Step 2: Summary (Write manually OR click "Generate from AI")
     │
     ▼
Step 3: Experience (Add multiple entries, use Rich Text Editor)
     │
     ▼
Step 4: Education (Add multiple entries with University, Degree, etc.)
     │
     ▼
Step 5: Skills (Add skills with proficiency ratings)
     │
     ▼
Preview Page → Download as PDF / Share via Link
```

### Returning User Flow

```
Landing Page → Sign In → Dashboard (sees all saved resumes)
     │
     ├── Click resume card → Edit existing resume
     ├── Click delete icon → Confirm delete via AlertDialog
     └── Click view → Open shareable resume view
```

---

## 🚀 Deployment

### Frontend (Vercel / Netlify)

```bash
cd Frontend
npm run build    # Outputs to dist/
```

**Vercel:**
```bash
npx vercel --prod
```

**Environment Variables to set on hosting platform:**
- `VITE_CLERK_PUBLISHABLE_KEY`
- `VITE_GOOGLE_AI_API_KEY`
- `VITE_STRAPI_API_KEY`

### Backend (Strapi Cloud / Railway / Render)

```bash
cd Backend
npm run build
npm run start
```

> ⚠️ For production, switch from SQLite to **PostgreSQL** by configuring `config/database.js` with the `pg` package (already included as a dependency).

**Environment Variables for production backend:**
- `HOST`, `PORT`
- `APP_KEYS`, `API_TOKEN_SALT`, `ADMIN_JWT_SECRET`
- `TRANSFER_TOKEN_SALT`, `JWT_SECRET`
- `DATABASE_CLIENT=postgres`
- `DATABASE_URL=your_postgres_connection_string`

---

## ⚡ Performance Optimizations

| Optimization | Implementation |
|-------------|----------------|
| **Vite HMR** | Instant hot module replacement during development |
| **Code Splitting** | React Router lazy-loads route components |
| **Loading Skeletons** | Animated pulse placeholders while data loads |
| **Conditional Rendering** | Components render only when data is available |
| **Optimized AI Calls** | Gemini API uses `responseMimeType: "application/json"` for structured output |
| **Axios Instance** | Single reusable Axios client with pre-configured base URL and auth headers |
| **Context API** | `ResumeInfoContext` avoids prop drilling across deeply nested components |
| **TailwindCSS v4** | Zero-runtime CSS with Vite plugin integration |

---

## 🎨 UI Features

- **🌗 Dark Mode Support** — Built-in dark/light theme via `next-themes`
- **🎨 Theme Color Picker** — Popover-based color selection for resume accent colors
- **📱 Responsive Design** — Mobile-first grid layouts (1→2→3→5 column responsive grid)
- **✍️ Rich Text Editor** — WYSIWYG editor for formatting work experience bullet points
- **⭐ Skill Ratings** — Visual star/progress ratings via `@smastrom/react-rating`
- **📝 Live Preview** — Real-time resume preview that updates as you edit each section
- **🔔 Toast Notifications** — Sonner-powered success/error toasts for all CRUD actions
- **💀 Skeleton Loading** — Animated placeholder cards while fetching resume data
- **🪟 Modal Dialogs** — Radix AlertDialog for delete confirmations, Dialog for resume creation
- **🔗 Share Integration** — Web Share API for one-click resume sharing on mobile

---

## 🔒 Security Features

| Feature | Implementation |
|---------|----------------|
| **Authentication** | Clerk handles all auth flows (OAuth, email/password) |
| **Route Protection** | `App.jsx` redirects unauthenticated users to `/auth/sign-in` |
| **API Authorization** | Strapi API Token in `Authorization: Bearer` header |
| **Email-Based Filtering** | Resumes filtered by `userEmail` — users only see their own data |
| **Environment Variables** | All secrets (API keys, tokens) stored in `.env` files, excluded from Git |
| **CORS Protection** | Strapi middleware enforces Cross-Origin Resource Sharing policies |
| **.gitignore** | `.env` files explicitly excluded from version control |

---

## 🗄️ Database Schema

### User Resume (Content Type)

```
┌──────────────────────────────────────────────────────────┐
│                     user_resumes                          │
├───────────────┬──────────┬───────────────────────────────┤
│ Field         │ Type     │ Description                   │
├───────────────┼──────────┼───────────────────────────────┤
│ id            │ Integer  │ Auto-generated primary key    │
│ title         │ String   │ Resume title (required)       │
│ resumeId      │ String   │ UUID for public sharing       │
│ userEmail     │ Email    │ Owner's email (from Clerk)    │
│ userName      │ String   │ Owner's display name          │
│ firstName     │ String   │ First name on resume          │
│ lastName      │ String   │ Last name on resume           │
│ jobTitle      │ String   │ Target job title              │
│ address       │ String   │ Address                       │
│ phone         │ String   │ Phone number                  │
│ email         │ String   │ Contact email on resume       │
│ summery       │ Text     │ Professional summary          │
│ themeColor    │ String   │ Hex color for resume theme    │
│ Experience    │ Component│ Repeatable experience entries  │
│ Education     │ Component│ Repeatable education entries   │
│ Skills        │ Component│ Repeatable skill entries       │
└───────────────┴──────────┴───────────────────────────────┘
```

### Experience Component

| Field | Type | Description |
|-------|------|-------------|
| title | String | Job title |
| companyName | String | Company name |
| city | String | City |
| state | String | State |
| startDate | String | Start date |
| endDate | String | End date |
| workSummery | String | Description (HTML from rich text editor) |

### Education Component

| Field | Type | Description |
|-------|------|-------------|
| universityName | String | University/Institution name |
| degree | String | Degree obtained |
| major | String | Major/Field of study |
| startDate | String | Start date |
| endDate | String | End date |
| description | String | Additional details |

### Skills Component

| Field | Type | Description |
|-------|------|-------------|
| name | String | Skill name |

---

## 📁 Project Structure

```
AI-ResumeMaker/
├── 📄 README.md
├── 📄 .gitignore
│
├── 📂 Backend/                    # Strapi CMS (Headless API)
│   ├── 📄 package.json
│   ├── 📄 .env                    # Backend secrets (git-ignored)
│   ├── 📄 .env.example            # Template for env vars
│   ├── 📂 config/
│   │   ├── admin.js               # Admin panel config
│   │   ├── api.js                 # API config
│   │   ├── database.js            # Database connection (SQLite/Postgres)
│   │   ├── middlewares.js         # CORS, security, logging
│   │   ├── plugins.js             # Plugin config
│   │   └── server.js              # Server host/port config
│   ├── 📂 src/
│   │   ├── index.js               # Strapi bootstrap
│   │   ├── 📂 api/user-resume/    # Resume API
│   │   │   ├── content-types/user-resume/schema.json
│   │   │   ├── controllers/user-resume.js
│   │   │   ├── routes/user-resume.js
│   │   │   └── services/user-resume.js
│   │   └── 📂 components/         # Reusable Strapi components
│   │       ├── experience/experience.json
│   │       ├── education/education.json
│   │       └── skills/skills.json
│   └── 📂 types/generated/        # Auto-generated TypeScript types
│
├── 📂 Frontend/                   # React + Vite Application
│   ├── 📄 package.json
│   ├── 📄 .env                    # Frontend secrets (git-ignored)
│   ├── 📄 vite.config.js          # Vite + React + TailwindCSS config
│   ├── 📄 index.html              # HTML entry point
│   ├── 📄 components.json         # Shadcn UI configuration
│   ├── 📂 public/
│   │   ├── logo.svg               # App logo
│   │   └── cv.png                 # Resume icon
│   ├── 📂 service/
│   │   ├── GlobalApi.js           # Axios client + API endpoints
│   │   └── AIModal.js             # Gemini AI chat session config
│   └── 📂 src/
│       ├── main.jsx               # App entry + routing + ClerkProvider
│       ├── App.jsx                # Auth guard + layout shell
│       ├── index.css              # Global styles + Tailwind imports
│       ├── App.css                # App-specific styles
│       ├── 📂 home/               # Landing page
│       ├── 📂 auth/               # Authentication pages
│       ├── 📂 dashboard/          # Resume management
│       ├── 📂 my-resume/          # Public resume view
│       ├── 📂 components/         # Shared UI components
│       ├── 📂 context/            # React Context providers
│       ├── 📂 data/               # Dummy/default data
│       └── 📂 lib/                # Utility functions
```

---

## 📡 API Documentation

### Base URL

```
http://localhost:1337/api
```

### Authentication

All requests require the Strapi API token:

```
Authorization: Bearer <STRAPI_API_TOKEN>
Content-Type: application/json
```

### Endpoints

#### 1. Create Resume

```http
POST /user-resumes
```

**Request Body:**
```json
{
  "data": {
    "title": "My Resume",
    "resumeId": "uuid-v4-string",
    "userEmail": "user@example.com",
    "userName": "John Doe"
  }
}
```

**Response:** `201 Created`

---

#### 2. Get User's Resumes

```http
GET /user-resumes?filters[userEmail][$eq]=user@example.com
```

**Response:** `200 OK` — Array of resume objects filtered by email

---

#### 3. Get Resume by ID (with all components)

```http
GET /user-resumes/:id?populate=*
```

**Response:** `200 OK` — Full resume with Experience, Education, and Skills populated

---

#### 4. Update Resume

```http
PUT /user-resumes/:id
```

**Request Body:**
```json
{
  "data": {
    "firstName": "John",
    "lastName": "Doe",
    "jobTitle": "Software Engineer",
    "summery": "Experienced developer...",
    "Experience": [
      {
        "title": "Senior Dev",
        "companyName": "TechCorp",
        "city": "San Francisco",
        "state": "CA",
        "startDate": "Jan 2022",
        "endDate": "Present",
        "workSummery": "<ul><li>Led team of 5...</li></ul>"
      }
    ],
    "Education": [...],
    "Skills": [{ "name": "React" }, { "name": "Node.js" }],
    "themeColor": "#4F46E5"
  }
}
```

**Response:** `200 OK`

---

#### 5. Delete Resume

```http
DELETE /user-resumes/:id
```

**Response:** `200 OK`

---

## 🙏 Acknowledgments

- [Strapi](https://strapi.io/) — Headless CMS
- [Clerk](https://clerk.com/) — Authentication
- [Google Gemini AI](https://ai.google.dev/) — AI Content Generation
- [Shadcn UI](https://ui.shadcn.com/) — Component Library
- [Radix UI](https://www.radix-ui.com/) — Accessible Primitives

---

<div align="center">

**Built with ❤️ by [Raushan Kumar](https://github.com/Raushancreation1)**

⭐ Star this repo if you found it helpful!

</div>
]]>
