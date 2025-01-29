# 🚀 NFT Market

A frontend application displaying NFT market listings and a details page for each NFT. Built with Next.js, React, TypeScript, Jest, and Tailwind CSS.

## 📌 Features

- 📌 View NFT marketplace listings
- 🔍 Search and filter NFTs
- 📄 Detailed NFT information page
- 📱 Fully responsive design

## 🛠 Tech Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **Testing:** Jest, React Testing Library
- **State Management:** Redux Toolkit / Context API
- **Package Manager:** npm / yarn / pnpm

## 📂 Folder Structure

```
/nft-market
 ├── /src          # Source code
 │   ├── /components  # Reusable React components
 │   ├── /pages       # Next.js pages (Marketplace, NFT Details)
 │   ├── /styles      # Global and component-specific styles (Tailwind CSS)
 │   ├── /utils       # Utility functions
 ├── /public       # Static assets (images, icons)
 ├── /tests        # Jest test cases
 ├── .env.example  # Example environment variables
 ├── package.json  # Dependencies and scripts
 ├── README.md     # Project documentation
 ├── tsconfig.json  # TypeScript configuration
```

## ⚙️ Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Git](https://git-scm.com/)
- [Yarn](https://yarnpkg.com/) or npm

## 📥 Download & Setup

1. **Clone the repository** from GitHub:
   ```sh
   git clone https://github.com/yourusername/nft-market.git
   cd nft-market
   ```

2. **Install dependencies**:
   ```sh
   npm install   # or yarn install
   ```

3. **Set up environment variables**:
   - Copy `.env.example` to `.env`
   - Fill in the required API keys and settings.

## 🚀 Running the Project Locally

### **For Development**
Start a local development server:
```sh
npm run dev  # or yarn dev
```
Runs the app on **`http://localhost:3000`**.

### **For Production**
Build and start the production version:
```sh
npm run build
npm start
```

## ✅ Testing

Run unit tests with Jest:
```sh
npm run test
```

## 🔧 Useful Commands

| Command           | Description                          |
|------------------|----------------------------------|
| `npm run dev`   | Start the development server     |
| `npm run build` | Build the project for production |
| `npm start`     | Run the production server        |
| `npm run lint`  | Run ESLint to check for errors   |
| `npm run test`  | Run Jest test suite              |

## 🛠 Troubleshooting

- If dependencies fail, try:
  ```sh
  rm -rf node_modules package-lock.json && npm install
  ```
- Ensure your **`.env`** file is correctly configured.
- Restart the development server after making changes.

## 🤝 Contributing

1. **Fork** the repository
2. **Create a branch** (`git checkout -b feature-name`)
3. **Commit your changes** (`git commit -m "feat: Add new feature"`)
4. **Push to the branch** (`git push origin feature-name`)
5. **Open a Pull Request**

## 📜 License
This project is licensed under the **MIT License**.