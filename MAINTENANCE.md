# PH Hardware Website Management Guide

This website is built with **Next.js 14**, **Tailwind CSS**, and **next-intl**.

## How to Update Content

### 1. Adding/Editing Products
All products are managed in `src/data/products.ts`.
To add a new product:
- Add a new object to the `PRODUCTS` array.
- Follow the existing schema (id, category, name, material, finish, description, features).

### 2. Multi-language Translations
Translations are located in the `messages/` directory:
- `en.json` (English)
- `es.json` (Spanish)
- `fr.json` (French)
- `ru.json` (Russian)

To update a string, edit it in the corresponding JSON file.

### 3. Publishing News/Blog Posts
Current news posts are hardcoded in `src/app/[locale]/news/page.tsx`. To update:
- Add a new entry to the `NEWS_POSTS` array.
- For a full CMS experience, these can be moved to MDX files or a headless CMS like Sanity.

### 4. SEO & GEO Optimization
- **Metadata**: Managed in `src/app/metadata.ts`.
- **JSON-LD (Structured Data)**: Managed in `src/components/JsonLd.tsx`.
- **Sitemap**: Automatically generated in `src/app/sitemap.ts`.

## Deployment
Recommended platforms: **Vercel** or **Netlify** for seamless Next.js support.
1. Connect the repository.
2. Set build command: `npm run build`.
3. Output directory: `.next`.
