# Project notes

This project is a standalone React and TypeScript application built with Vite.
Keep changes focused on the web app experience and avoid introducing proprietary runtime dependencies.

- Use the existing client-side TanStack Router with Vite; do not introduce TanStack Start server entries because this app is served as a standalone SPA.
- Render About child pages through the parent Outlet without repeating the About overview, so each page has one clear heading.
- Use ContentPending for unavailable listings and documents, so unverified records are never displayed as real content.
- Reuse the shared Button component and semantic CSS tokens for new interactions, keeping appearance consistent.
