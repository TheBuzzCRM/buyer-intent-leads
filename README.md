# Buyer Intent Leads — Premium Editorial Website

This is a high-conversion, premium editorial website built with Next.js, Tailwind CSS, and Neon DB.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Database:** Neon (PostgreSQL)
- **Authentication:** JWT with HTTP-only cookies
- **Icons:** Lucide React
- **Validation:** Zod + React Hook Form

## 🛠️ Setup Instructions

### 1. Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your credentials:

```bash
cp .env.local.example .env.local
```

Required variables:
- `DATABASE_URL`: Your Neon connection string.
- `JWT_SECRET`: A secure random string for signing tokens.
- `ADMIN_EMAIL`: The email for the admin account.
- `ADMIN_PASSWORD`: The initial password for the admin account.

### 2. Database Initialization

Run the SQL commands in `lib/schema.sql` in your Neon SQL Editor to create the necessary tables.

To create the initial admin user, you can run:

```sql
INSERT INTO users (email, password_hash, role) 
VALUES ('''admin@buyerintentleads.com''', '''[HASHED_PASSWORD]''', '''admin''');
```

*Note: Use a bcrypt hash for the password.*

### 3. Installation & Development

```bash
npm install
npm run dev
```

## 📂 Project Structure

- `/app`: Next.js pages and API routes.
- `/components`: Reusable UI components (Button, Header, Footer, etc.).
- `/lib`: Database client, authentication utilities, and schema.
- `/public`: Static assets (images, icons).

## 🤖 SEO & AI Features

- **Admin Panel:** Located at `/admin/seo`. Protected by JWT auth.
- **Dynamic Assets:** `llms.txt`, `llms.json`, `robots.txt`, and `sitemap.xml` are generated dynamically based on admin settings.
- **Schema:** JSON-LD schema (Organization, WebSite, Service, Offer, FAQPage) is implemented across pages.

## 📂 Design System

- **Background:** #F6F4EF (Soft Ivory)
- **Accent:** #C2A06F (Champagne)
- **Typography:** Serif for headlines, Sans-serif for body.
- **Vibe:** Light Luxury / Private Equity Editorial.