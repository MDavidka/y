# SaaS Landing Page

This project is a simple SaaS landing page built with Vite, TypeScript, and Tailwind CSS. It's designed to be deployed on Cloudflare Pages.

## Features

*   **Modern Minimalist Design:** Clean and professional look.
*   **Responsive Layout:** Optimized for various screen sizes.
*   **Pricing Section:** Clear presentation of different pricing plans.
*   **Modular Components:** Easy to maintain and extend.
*   **TypeScript:** Type safety and improved code quality.
*   **Tailwind CSS:** Utility-first CSS framework for rapid development.
*   **Vite:** Fast build tool for a smooth development experience.

## Technologies Used

*   [Vite](https://vitejs.dev/)
*   [TypeScript](https://www.typescriptlang.org/)
*   [Tailwind CSS](https://tailwindcss.com/)
*   [Cloudflare Pages](https://pages.cloudflare.com/)

## Project Structure

```
project/
├── index.html
├── src/
│   ├── main.ts          (entry point - imports all components)
│   ├── types.ts          (shared TypeScript interfaces & types)
│   ├── utils.ts          (shared helper functions)
│   ├── style.css         (design-system tokens & global styles)
│   └── components/
│       ├── header.ts
│       ├── hero.ts
│       ├── features.ts
│       ├── pricing.ts
│       ├── testimonial.ts
│       ├── faq.ts
│       └── footer.ts
├── public/
├── package.json
├── tsconfig.json
├── vite.config.ts
├── .gitignore
└── README.md
```

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

4.  **Open your browser and navigate to `http://localhost:5173` (or the port Vite assigns).**

## Building for Production

1.  **Build the project:**

    ```bash
    npm run build
    ```

2.  **The built files will be in the `dist` directory.**

## Deployment to Cloudflare Pages

1.  **Connect your repository to Cloudflare Pages.**
2.  **Configure the build settings:**
    *   **Production branch:** `main` (or your main branch)
    *   **Build command:** `npm run build`
    *   **Build output directory:** `dist`
3.  **Save and deploy!**

## Customization

*   **Styling:** Modify the `src/style.css` file to change the design system tokens and global styles. Tailwind classes are used throughout the components for styling.
*   **Components:** Edit the files in the `src/components/` directory to customize the content and structure of the landing page.
*   **Configuration:** Update the `src/types.ts` file to modify shared types and interfaces.

## License

[MIT](LICENSE)