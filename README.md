# Young Legends Web Project

Official web portal for **Young Legends**. High-performance, mobile-first, and multi-language.

## Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: TailwindCSS + shadcn/ui
- **Content**: Local Static Data (`src/data/content.ts`)
- **Video**: Mux
- **Animations**: Framer Motion
- **Email**: Resend
- **Anti-Spam**: Cloudflare Turnstile

## Development

### 1. Installation

```bash
npm install
```

### 2. Environment Variables

Create `.env.local` in `apps/web`:

```env
RESEND_API_KEY=re_...
NEXT_PUBLIC_TURNSTILE_SITE_KEY=...
TURNSTILE_SECRET_KEY=...
```

### 3. Run Locally

```bash
npm run dev
```

## Content Management

To update members, news, or site text, modify the file:
`apps/web/src/data/content.ts`

---

**Young Legends 4 Life ®**
