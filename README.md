import { writeFile } from "fs/promises";

const content = `# Financial Card

> A React + TypeScript project for Financial Card dashboard.  
> Includes lazy-loaded components, React Query integration, TailwindCSS styling, and unit tests with Vitest.

---

## 🚀 Getting Started

### Prerequisites
- Node.js v14 or higher
- npm v6 or higher (or Yarn)

### Installation
Clone the repository and install dependencies:

\`\`\`bash
git clone git@github.com:bershek/Financial-Card.git
cd Financial-Card
npm install
\`\`\`

### Available Scripts

| Command                | Description |
|------------------------|-------------|
| \`npm run dev\`           | Start development server and open in browser |
| \`npm run build\`         | Build the project into the \`dist\` folder |
| \`npm run lint\`          | Show ESLint errors and warnings |
| \`npm run lint:fix\`      | Automatically fix ESLint issues |
| \`npm run test\`          | Run unit tests with Vitest |
| \`npm run test:watch\`    | Run tests in watch mode |

---

## 🛠 Project Structure

\`\`\`
src/
├─ features/ratingsDashboard/   # Dashboard components and utils
├─ common/components/           # Reusable UI components (CardSection, Skeleton, etc.)
├─ hooks/                       # Custom React hooks
├─ utils/                       # Utility functions
└─ App.tsx                      # Main application entry
\`\`\`

---

## ⚡ Features

- Lazy-loaded dashboard components for better performance
- React Query for API data fetching and caching
- TailwindCSS for utility-first styling
- TypeScript for type safety
- Modular code structure with code-splitting
- Unit tests using Vitest and React Testing Library

---

## 💻 Development

1. Start dev server:

\`\`\`bash
npm run dev
\`\`\`

2. Open the app in Chrome (usually \`http://localhost:5173\`)  
3. Edit components in \`src/\` — changes auto-reload  

---

## ✅ Testing

Run unit tests:

\`\`\`bash
npm run test
\`\`\`

Run in watch mode for TDD:

\`\`\`bash
npm run test:watch
\`\`\`

---

## ⚙️ Linting & Formatting

Check for ESLint errors:

\`\`\`bash
npm run lint
\`\`\`

Fix errors automatically:

\`\`\`bash
npm run lint:fix
\`\`\`

Format code with Prettier (optional):

\`\`\`bash
npm run prettify
\`\`\`

---

## 📦 Build

Create production build:

\`\`\`bash
npm run build
\`\`\`

Files will be in the \`dist/\` folder.

---

## 📖 Notes

- Make sure to use Node.js v14+  
- This project uses \`React.lazy\` and \`Suspense\` for component-level code splitting  
- All API requests are handled via React Query  

---

## 🔗 Links

- [GitHub Repository](https://github.com/bershek/Financial-Card)
`;

await writeFile("README.md", content, "utf-8");
console.log("README.md successfully created!");
